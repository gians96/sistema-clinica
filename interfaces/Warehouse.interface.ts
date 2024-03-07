export interface Warehouses {
    response: Warehouse[];
    database: string;
}

export interface Warehouse {
    id: number;
    user_id: number | null;
    establishments?: Establishments;
    // establishment_id: number;
    description: string;
    create_at?: Date;
    update_at?: null;
}

export interface Establishments {
    id: number;
    description: string;
    country_id: null;
    department_id: null;
    province_id: null;
    district_id: null;
    country: null;
    department: null;
    province: null;
    district: null;
    address: null;
    email: null;
    telephone: null;
    code: null;
    aditional_information: null;
    web_address: null;
    trade_address: null;
    create_at: Date;
    update_at: null;
}
