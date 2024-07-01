import type { SaleNotePayment, SaleNoteItem } from "./SaleNotesFetch.interace";

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
    total: number;
    series: Series;
    number: number;
    currency_type_id: CurrencyTypeID;
    pending_amount: number;
    date_of_issue: string | null;
    state_type: StateType;
    pending_amount_before?: number
    pending_amount_after?: number
    payment?: SaleNotePayment
    sale_note_items?: SaleNoteItem[];
    sale_note_payments?: SaleNotePayment[];
    create_at: Date;
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
