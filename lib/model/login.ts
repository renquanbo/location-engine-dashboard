export interface LoginResponse {
  userId: number;
  token: string;
  role: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  remember?: boolean;
}