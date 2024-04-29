import type { Country, District, Department, Province } from "./Location.interface";
export interface Customer {
    id: number;
    name: string;
    number: string;
    identity_document_type_id: String | null;//#Identity Document type
    identity_document_type: DocumentType;
    address: null | string;
    internal_code: String | null;
    barcode: String | null;
    observation: String | null;
    seller: String | null;
    zone: Object | null;
    zone_id: number | null;
    seller_id: number | null;
    website: String | null;
    enabled: boolean;
    created_at?: Date;
    updated_at?: Date;
    type: 'customers';
    trade_name: String | null;
    country_id: "PE";
    nationality_id: "PE" | null;
    department_id: null | string;
    department: Department | null;
    province_id: null | string;
    province: Province | null;
    district_id: null | string;
    district: District | null;
    telephone: String | null;
    email: String | null;
    perception_agent: boolean;
    percentage_perception: number | null;
    state: null | string;
    condition: null | string;
    person_type_id: String | null;
    person_type: string | null;
    contact: Contact | null;
    comment: String | null;
    addresses: any[] | null;
    parent_id: number;
    credit_days: number;
    optional_email: any[] | null;
    optional_email_send: String | null;
    // childrens: any[];
    accumulated_points: number;
    has_discount: boolean;
    discount_type: string | '01';//debe ser un string, SUNAT
    discount_amount: number;
    // location_id: string[];
}

export interface Contact {
    phone: null;
    full_name: null;
}

export interface CustomerIPOS {
    id: number;
    description: string;
    name: string;
    number: string;
    identity_document_type_id: string;
    has_discount: boolean;
    discount_type: string;
    discount_amount: number;
}

export interface DocumentType {
    id: string;
    active: Boolean;
    description: string;
}
