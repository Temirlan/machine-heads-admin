import { axios } from '../../core/axios';
import { ITag } from '../../interfaces/models';

export const getTags = async () => {
  const { data } = await axios.get<ITag[]>('/manage/tags');

  return data;
};
