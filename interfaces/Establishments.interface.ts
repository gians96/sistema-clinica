import type { Country, District, Department, Province } from "./Location.interface";
export interface Establishment {
    id: number;
    description: string;
    country_id: string | "PE";
    country: null | Country;
    department_id: null | string;
    department: Department | null;
    province_id: null | string;
    province: Province | null;
    district_id: null | string;
    district: District | null;
    address: null;
    email: null;
    telephone: null;
    code: null;
    aditional_information: null;
    web_address: null;
    trade_address: null;
    create_at?: Date | string;
    update_at?: Date | string;
    warehouse: Warehouse[] | null;
}
export interface Warehouse {
    id: number;
    establishment_id: number;
    description: string;
    user_id: null;
    create_at: Date;
    update_at: null;
}

