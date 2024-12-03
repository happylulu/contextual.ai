import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { z } from 'zod';
import { createLead, getAllLeads, getUserByEmail, createLog, getLogs, getLogsCount } from './database';

const app = express();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

app.use(cors());
app.use(express.json());

// Validation schemas
const leadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  phone: z.string().optional(),
  platform: z.enum(['perplexity', 'searchgpt'])
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

// Middleware to verify JWT token
const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

// Create new lead
app.post('/api/leads', async (req, res) => {
  try {
    const data = leadSchema.parse(req.body);
    const id = 'lead-' + Date.now();
    createLead.run(
      id,
      data.name,
      data.email,
      data.company,
      data.phone || null,
      data.platform,
      'new'
    );

    // Log the lead creation
    createLog.run(
      'log-' + Date.now(),
      null,
      'LEAD_CREATED',
      JSON.stringify(data),
      req.ip
    );

    res.json({ id, ...data, status: 'new' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Admin login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const user = getUserByEmail.get(email);

    if (!user || user.role !== 'admin') {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET);

    // Log successful login
    createLog.run(
      'log-' + Date.now(),
      user.id,
      'USER_LOGIN',
      'Successful login',
      req.ip
    );

    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Get all leads (admin only)
app.get('/api/leads', authenticateToken, async (req: any, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }

  const leads = getAllLeads.all();
  res.json(leads);
});

// Get logs (admin only)
app.get('/api/logs', authenticateToken, async (req: any, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const logs = getLogs.all(limit, offset);
  const totalCount = getLogsCount.get().count;

  res.json({
    entries: logs,
    totalCount,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));