export interface IGenerateToken {
  access_token: string;
  refresh_token: string;
  access_expired_at: number;
  refresh_expired_at: number;
}

export interface IApiError {
  name: string;
  message: string;
  code: number;
  status: number;
  type: string;
}

export interface IApiDataValidationError {
  field: string;
  message: string;
}

export type ApiError = IApiError | IApiDataValidationError[];
