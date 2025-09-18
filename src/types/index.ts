import { PropsWithChildren } from 'react';

export type SideBarContextType = {
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type NeonBoxPropsType = PropsWithChildren<{
  pad?: number;
  neonColor?: string;
  radius?: string;
  duration?: number;
  className?: string;
}>;

export type CardPropsType = React.PropsWithChildren<{
  title?: string;
  className?: string;
}>;

export type ModalPropsType = React.PropsWithChildren<{
  modalClose: () => void;
  title?: string;
}>;

export type User = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
  phone: string;
  website: string;
  address: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type ParamsType = { params: { id: string } };
