export interface IUser {
  id: number;
  phone: string;
  email: string;
  name: string;
  lastName: string;
  secondName: string;
  roles: Array<{ role: string; name: string }>;
  status: {
    code: number;
    name: string;
  };
  isActive: true;
  updatedAt: string;
  createdAt: string;
}

export interface IPost {
  id: number;
  title: string;
  code: string;
  authorName: string;
  previewPicture: {
    id: number;
    name: string;
    url: string;
  };
  tagNames: string[];
  updatedAt: string;
  createdAt: string;
}

export interface IAuthor {
  id: number;
  name: string;
  lastName: string;
  secondName: string;
  avatar: {
    id: number;
    name: string;
    url: string;
  };
  updatedAt: string;
  createdAt: string;
}

export interface ITag {
  id: number;
  name: string;
  code: string;
  sort: number;
  updatedAt: string;
  createdAt: string;
}

export interface IPostDetail {
  id: number;
  title: string;
  code: string;
  text: string;
  previewPicture: {
    id: number;
    name: string;
    url: string;
  };
  author: {
    id: number;
    fullName: string;
    avatar: {
      id: number;
      name: string;
      url: string;
    };
  };
  tags: [
    {
      id: number;
      name: string;
      code: string;
    },
  ];
  updatedAt: string;
  createdAt: string;
}
