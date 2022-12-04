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
  profilPic: string | null;
  coverPic: string | null;
  city: string | null;
  website: string | null;
  facebook: string | null;
  instagram: string | null;
  birthDate: Date | null;
};

type PostBody = {
  name: string;
  userId: number;
  img?: string;
};

interface Post extends PostBody {
  id: number;
  username: string;
  desc: string;
  profilePic: string | null;
  createdAt: Date;
}
