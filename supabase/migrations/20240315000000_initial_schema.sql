-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create users table
create table public.users (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  password text not null,
  role text default 'user',
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create leads table
create table public.leads (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  company text not null,
  phone text,
  platform text not null,
  status text default 'new',
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create logs table
create table public.logs (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id),
  action text not null,
  details text not null,
  ip_address text not null,
  timestamp timestamp with time zone default timezone('utc'::text, now())
);

-- Create RLS policies
alter table public.users enable row level security;
alter table public.leads enable row level security;
alter table public.logs enable row level security;

-- Users policies
create policy "Users can view their own data" on public.users
  for select using (auth.uid() = id);

-- Leads policies
create policy "Anyone can create leads" on public.leads
  for insert with check (true);

create policy "Admins can view all leads" on public.leads
  for select using (
    exists (
      select 1 from public.users
      where users.id = auth.uid()
      and users.role = 'admin'
    )
  );

-- Logs policies
create policy "Admins can view all logs" on public.logs
  for select using (
    exists (
      select 1 from public.users
      where users.id = auth.uid()
      and users.role = 'admin'
    )
  );

create policy "System can create logs" on public.logs
  for insert with check (true);

-- Create initial admin user
insert into public.users (email, password, role)
values (
  'admin@contextual.com',
  crypt('admin123', gen_salt('bf')),
  'admin'
);