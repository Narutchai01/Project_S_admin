export type Ilogin = {
  email: string;
  password: string;
};

export type SkincareItem = {
  id: string;
  name: string;
  image: string;
  description: string;
  create_by: number;
};

export type SkincareResponse = {
  status: boolean;
  data: SkincareItem[];
  error: string | null;
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

export type AcneItem  = {
  id: number;
  name: string;
  image: string;
  create_by: number;
};

export type AcneResponse = {
  status: boolean;
  data: AcneItem[];
  error: string | null;
}
export interface IHeaderItemsProps {
  itemName: string;
  onOpen: () => void;
}

export interface IEditDetailProps {
  isOpen: boolean;
}

export interface IacneProps {
  acnes: AcneItem[];
}

export interface IAcneByIDpageProps {
  params: Promise<{ id: string }>;
}