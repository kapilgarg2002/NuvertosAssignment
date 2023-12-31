export interface Compound {
    id?: number;
    name: string;
    desc: string;
    image: string;
  };
  
  export interface CompoundResponse {
    count: number;
    rows: Compound[];
  };