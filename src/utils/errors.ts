import { ApiError } from '../interfaces/api';

export const transformApiErrorForAntD = (error: ApiError | null) => {
  if (!error || !Array.isArray(error)) return [];

  return error.map((e) => ({
    name: e.field,
    errors: [e.message],
  }));
};
