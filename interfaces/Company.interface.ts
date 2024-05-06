import type {
  Country,
  Department,
  Province,
  District
} from "@/interfaces/Location.interface";
export interface Companies {
  companies: Company;
  series: Series[];
  cat_document_types: CatDocumentType[];
  cat_identity_document_types: CatDocumentType[];
  cat_item_types: CatItemType[];
  payment_method_types: PaymentMethodType[];
  business_turns: BusinessTurn[];
  cat_unit_types: CatUnitTypes[];
}

export interface BusinessTurn {
  id: number;
  value: string;
  name: string;
  active: boolean;
  create_at: Date;
  update_at: null;
}

export interface CatDocumentType {
  id: string;
  active: boolean;
  short?: null | string;
  description: string;
}

export interface CatItemType {
  id: number;
  active: boolean;
  description: string;
}

export interface Company {
  id: number;
  identity_document_type_id: string;
  number: string;
  name: string;
  trade_name: string | null;
  logo: string | null;
  api_url: string | null;
  ssl: string | null;
  token: string | null;
}

export interface PaymentMethodType {
  id: number;
  description: string;
  has_card: boolean;
  charge: null | string;
  number_days: number | null;
  is_credit: boolean;
  is_cash: boolean;
}

export interface Series {
  id: number;
  establishment_id: number;
  document_type_id: string;
  number: string;
  contingency: boolean;
  create_at: Date;
  update_at: null;
}


export interface CompanyConfig {
  id: number;
  idIdentityDocumentType: number;
  number: string;
  name: string;
  tradeName: string;
  code: string;
  country?: Country | null;
  department?: Department | null;
  province?: Province | null;
  district?: District | null;
  address?: string;
  telephone?: string;
  email?: string;
  aditionalInformation?: string;
  webAddress?: string;
  logo: string;
  api_facturacion?: { url: string; token: string };
  api_search_ruc_dni?: { url: string; token: string };
}

export interface CatUnitTypes {
  id: string;
  active: boolean;
  description: string;
  symbol: null | string;
}
