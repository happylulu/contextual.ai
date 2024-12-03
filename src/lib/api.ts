import { supabase } from './supabase';

export async function submitLead(data: {
  name: string;
  email: string;
  company: string;
  phone?: string;
  platform: 'perplexity' | 'searchgpt';
}) {
  const { error } = await supabase
    .from('leads')
    .insert([
      {
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone || null,
        platform: data.platform,
        status: 'new'
      }
    ]);

  if (error) {
    console.error('Supabase error:', error);
    throw new Error('Failed to submit lead');
  }
}

export async function loginAdmin(email: string, password: string) {
  const { data: { session }, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) throw error;
  return { token: session?.access_token };
}

export async function getLeads(token: string) {
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getLogs(token: string, page = 1, limit = 10) {
  const { data, error, count } = await supabase
    .from('logs')
    .select('*', { count: 'exact' })
    .order('timestamp', { ascending: false })
    .range((page - 1) * limit, page * limit);

  if (error) throw error;
  return {
    entries: data || [],
    totalCount: count || 0
  };
}