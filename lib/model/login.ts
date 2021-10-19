import { Role } from "./role";

export interface LoginResponse {
  userId: number;
  token: string;
  role: Role;
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
  role: Role;
}

export interface SignUpResponse {
  id: number;
  email: string;
  role: Role;
}

export type SignUpRequest = Omit<RegisterFormValues, "confirmPassword">;

