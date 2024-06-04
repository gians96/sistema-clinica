export interface Unpaid {
    id:         number;
    name:       string;
    number:     string;
    email:      null | string;
    sale_notes: SaleNote[];
    total:      number;
}

export interface SaleNote {
    id:             number;
    total:          string;
    series:         Series;
    number:         number;
    pending_amount: string;
    date_of_issue:  Date;
    state_type:     StateType;
}

export enum Series {
    Nv = "NV",
}

export interface StateType {
    id:          number;
    description: string;
}
