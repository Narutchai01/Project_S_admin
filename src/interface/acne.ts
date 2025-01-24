export interface Iacne {
    id: number;
    name: string;
    image: string;
    create_by: number;
  }  

export interface IacneProps {
    acnes: Iacne[];
  }
  
  export interface IAcneByIdpageProps {
    params: Promise<{ id: string }>;
  }