export interface Specialty {
  id: number;
  name: string;
  description?: string;
  category: {} | null;
  price: number;
  type_commission: "Porcentaje" | "Dinero";
  commission: number;
  status: boolean;
}
