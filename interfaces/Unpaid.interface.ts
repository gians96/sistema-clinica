export interface Unpaid {
    id: number;
    customer: Customer;
    sale_notes: SaleNote[];
    total: number;
    pending_amount: number;
}

export interface Customer {
    id: number;
    name: string;
    number: string;
    email: null | string;
}

export interface SaleNote {
    id: number;
    total: string;
    series: Series;
    number: number;
    currency_type_id: CurrencyTypeID;
    pending_amount: string;
    date_of_issue: string | null;
    state_type: StateType;
}

export enum CurrencyTypeID {
    Pen = "PEN",
}

export enum Series {
    Nv = "NV",
}

export interface StateType {
    id: number;
    description: string;
}
