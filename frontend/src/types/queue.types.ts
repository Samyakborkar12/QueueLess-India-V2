export interface Queue {
  id: string;
  hospitalName: string;
  department: string;
  currentToken: number;
  avgWaitTime: number;
}

export interface Token {
  id: string;
  tokenNumber: string;
  status: string;
  joinedAt: string;
}