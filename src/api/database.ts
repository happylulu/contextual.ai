import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';

const db = new Database('database.db');

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'user',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS leads (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT NOT NULL,
    phone TEXT,
    platform TEXT NOT NULL,
    status TEXT DEFAULT 'new',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS logs (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    action TEXT NOT NULL,
    details TEXT NOT NULL,
    ip_address TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
  );
`);

// Create initial admin user if not exists
const createInitialAdmin = db.prepare(`
  INSERT OR IGNORE INTO users (id, email, password, role)
  VALUES (?, ?, ?, ?)
`);

const adminPassword = await bcrypt.hash('admin123', 10);
createInitialAdmin.run(
  'admin-' + Date.now(),
  'admin@contextual.com',
  adminPassword,
  'admin'
);

// Prepared statements
export const createLead = db.prepare(`
  INSERT INTO leads (id, name, email, company, phone, platform, status)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);

export const getAllLeads = db.prepare(`
  SELECT * FROM leads ORDER BY created_at DESC
`);

export const getUserByEmail = db.prepare(`
  SELECT * FROM users WHERE email = ?
`);

export const createLog = db.prepare(`
  INSERT INTO logs (id, user_id, action, details, ip_address)
  VALUES (?, ?, ?, ?, ?)
`);

export const getLogs = db.prepare(`
  SELECT logs.*, users.email as user_email
  FROM logs
  LEFT JOIN users ON logs.user_id = users.id
  ORDER BY timestamp DESC
  LIMIT ? OFFSET ?
`);

export const getLogsCount = db.prepare(`
  SELECT COUNT(*) as count FROM logs
`);

export default db;