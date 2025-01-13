export interface Ifacial {
  id: number;
  name: string;
  image: string;
  create_by: number;
}

export interface IfacialProps {
  facials: Ifacial[];
}
export interface IFacialByIDpageProps {
  params: Promise<{ id: string }>;
}
