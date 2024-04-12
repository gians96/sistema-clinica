import type { Warehouse } from "./Warehouse.interface";
export interface Establishment {
    id: number;
    description: string;
    country_id: null;
    department_id: null;
    province_id: null;
    district_id: null;
    country: null | string;
    department: null | string;
    province: null | string;
    district: null | string;
    address: null | string;
    email: null | string;
    telephone: null | string;
    code: null | string;
    aditional_information: null | string;
    web_address: null | string;
    trade_address: null | string;
    create_at: Date | null;
    update_at: Date | null;
    warehouse: Warehouse[] | [] | null
}