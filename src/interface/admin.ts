export type Ilogin = {
  email: string;
  password: string;
};

export interface IAdmin {
  id: number;
  full_name: string;
  email: string;
  image: string;
}

export type Data = {
  status: boolean;
  data: IAdmin | null | undefined;
  error: string | null;
};

export interface IHeaderItemsProps {
  itemName: string;
  onOpen: () => void;
}

export interface IEditDetailProps {
  isOpen: boolean;
}

