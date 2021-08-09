import { UploadChangeParam } from 'antd/lib/upload';

export interface LoginDTO {
  email: string;
  password: string;
}

export interface CreatePostDTO {
  code: string;
  title: string;
  authorId: number;
  tagIds: number[];
  text: string;
  previewPicture?: UploadChangeParam;
}
