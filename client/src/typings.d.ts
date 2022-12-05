declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

type UserBody = {
  name?: string | null;
  email?: string | null;
  username: string | null;
  password: string | null;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string | null;
  profilePic: string | null;
  coverPic: string | null;
  city: string | null;
  website: string | null;
  facebook: string | null;
  instagram: string | null;
  birthDate: Date | null;
};

type PostBody = {
  desc: string | null;
  img?: string | FormData | null;
};

interface Post extends PostBody {
  id: number;
  userId: number;
  username: string;
  name: string;
  profilePic: string | null;
  createdAt: Date;
}

type CommentBody = {
  desc: string;
  postId: number;
};

interface Comment extends CommentBody {
  profilePic: string;
  name: string;
  createdAt: Date;
  userId: number;
  id: number;
}
