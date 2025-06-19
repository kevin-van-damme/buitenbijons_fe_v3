export interface AppError {
  message: string;
  code?: string | number;
  cause?: unknown;
}
