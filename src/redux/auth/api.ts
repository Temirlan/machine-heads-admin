import { axios } from '../../core/axios';
import { IGenerateToken } from './../../interfaces/api';

export const tokenGenerate = async (formData: FormData) => {
  const { data } = await axios.post<IGenerateToken>('/auth/token-generate', formData);

  return data;
};

export const tokenRefresh = async (formData: FormData) => {
  const { data } = await axios.post<IGenerateToken>('/auth/token-refresh', formData);

  return data;
};
