export type Iskincare = {
    id: number;
    name: string;
    image: string;
    description: string;
    create_by: number;
  };

export interface IskincareProps {
    skincares: Iskincare[];
  }

export interface ISkincareByIDpageProps {
    params: Promise<{ id: string }>;
  }