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

export interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  role?: string;
}

export interface SignUpResponse {
  id: number;
  email: string;
  role: string;
}

export type SignUpRequest = Omit<RegisterFormValues, "confirmPassword">;

