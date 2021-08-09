import { axios } from '../../core/axios';
import { IUser } from './../../interfaces/models';

export const getProfile = async () => {
  const { data } = await axios.get<IUser>('/profile');

  return data;
};
