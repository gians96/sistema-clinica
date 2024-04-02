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
    email: null;
    telephone: null;
    code: null;
    aditional_information: null;
    web_address: null;
    trade_address: null;
    create_at: Date;
    update_at: Date;
    warehouse: Warehouse[] | [] | null
}