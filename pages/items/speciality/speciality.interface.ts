export interface Specialty {
    id: number;
    name: string;
    description?: string;
    category?: string;
    price: number;
    type_commission: "Porcentaje" | "Dinero";
    commission: number;
    status: boolean;
  }