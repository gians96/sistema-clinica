export interface Customer {
    id: number;
    description: string;
    name: string;
    number: string;
    identity_document_type_id: String | null;//#Identity Document type
    identity_document_type: DocumentType;
    identity_document_type_code: String | null;//NO HAY VALOR
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
    created_at: Date;
    updated_at: Date;
    type: 'customers';
    trade_name: String | null;
    country_id: YID;
    nationality_id: YID | null;
    department_id: null | string;
    department: City | null;
    province_id: null | string;
    province: City | null;
    district_id: null | string;
    district: City | null;
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
    childrens: any[];
    accumulated_points: number;
    has_discount: boolean;
    discount_type: string | '01';//debe ser un string, SUNAT
    discount_amount: number;
    location_id: string[];
}

export interface Contact {
    phone: null;
    full_name: null;
}

export enum YID {
    PE = "PE",
}

export interface City {
    id: string;
    description: string;
    active: number;
}

export enum DocumentType {
    DNI = "DNI",
    DocTribNoDOMSinRuc = "Doc.trib.no.dom.sin.ruc",
    RUC = "RUC",
    CE = "CE",
    PASSPORT = "Pasaporte"
}

export interface CustomerIPOS {
    id: number;
    description: string;
    name: string;
    number: string;
    identity_document_type_id: string;
    identity_document_type_code: null;
    has_discount: boolean;
    discount_type: string;
    discount_amount: number;
}