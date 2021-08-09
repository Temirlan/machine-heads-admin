import { axios } from '../../core/axios';
import { IPost } from '../../interfaces/models';

export const getAuthors = async () => {
  const { data } = await axios.get<IPost[]>('/manage/authors');

  return data;
};
