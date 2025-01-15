export interface Iskin {
    id: number;
    name: string;
    image: string;
    create_by: number;
  }
  
  export interface IskinProps {
    skins: Iskin[];
  }
  export interface IskinByIdpageProps {
    params: Promise<{ id: string }>;
  }
  