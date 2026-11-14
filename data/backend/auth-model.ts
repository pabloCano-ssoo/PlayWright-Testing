export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  status: number;
  message: string;
  data: {
    id: number;
    name: string;
    email: string;
    token: string;
    expiresInSeconds?: number;
  };
}