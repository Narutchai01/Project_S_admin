export type Ilogin = {
  email: string;
  password: string;
};

export type SkincareItem  = {
  id: string;
  name: string;
  image: string;
  description: string;
  create_by : number;
};

export type SkincareResponse = {
  status: boolean;
  data: SkincareItem[];
  error: string | null;
}


export interface IAdmin {
  id: number;
  full_name: string;
  email: string;
  image: string;
}

export type Data = {
  status: boolean;
  data: IAdmin| null | undefined; 
  error: string | null;
}

export type AcneItem  = {
  id: string;
  name: string;
  image: string;
};

export type AcneResponse = {
  status: boolean;
  data: AcneItem[];
  error: string | null;
}
export interface IHeaderItems {
  itemName: string;
  setIsOpen: (value: boolean) => void;
}

export interface IEditDetailProps {
  isOpen: boolean;
}