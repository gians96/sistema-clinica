export interface SaleNotesFetch {
    user_id: number;
    customer_id: number;
    total: number;
    observation: string;
    // due_of_date: Date;
    items: Item[];
    payments: Payment[];
}

export interface Item {
    item_id: number;
    item_lots_group_id: number;
    quantity: number;
    unit_price: number;
    item_type_id: null;
    quantity_chicken: number;
    average_weight: number;
    quantity_box: number;
    tare: number;
    gross_weight: number;
    unit_type_id: string;
}

export interface Payment {
    payment_method_type_id: number;
    // date_of_payment: Date;
    reference: string;
    payment: number;
}
