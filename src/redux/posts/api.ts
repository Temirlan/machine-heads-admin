import { axios } from '../../core/axios';
import { IPost, IPostDetail } from '../../interfaces/models';

export const getPosts = async () => {
  const { data } = await axios.get<IPost[]>('/manage/posts');

  return data;
};

export const getPost = async (id: number) => {
  const { data } = await axios.get<IPostDetail>(`/manage/posts/detail?id=${id}`);

  return data;
};

export const createPost = async (formData: FormData) => {
  const { data } = await axios.post<number>('/manage/posts/add', formData);

  return data;
};
