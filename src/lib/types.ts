export interface LogEntry {
  id: string;
  userId: string | null;
  action: string;
  details: string;
  timestamp: string;
  ipAddress: string;
}

export interface UserLog {
  entries: LogEntry[];
  totalCount: number;
}