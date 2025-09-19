import { Session } from 'next-auth';
import { PropsWithChildren } from 'react';

export type GlobalContextType = {
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  session: Session | null;
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

export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type ParamsType = { params: { id: string } };

export type InputFieldProps = {
  id: string;
  label: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  placeholder?: string;
};

export type ButtonPropsType = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: string;
  ariaLabel?: string;
  className?: string;
};
