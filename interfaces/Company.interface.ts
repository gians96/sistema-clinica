import {
  Country,
  Department,
  Province,
  District
} from "@/interfaces/Location.interface";
export interface Company {
  id: number;
  idIdentityDocumentType: number;
  number: string;
  name: string;
  tradeName: string;
  code: string;
  country: Country | null;
  department: Department | null;
  province: Province | null;
  district: District | null;
  address: string;
  telephone: string;
  email: string;
  aditionalInformation: string;
  webAddress: string;
  logo: string;
  api_facturacion: { url: string ; token: string  } ;
  api_search_ruc_dni: { url: string ; token: string } ;
}
