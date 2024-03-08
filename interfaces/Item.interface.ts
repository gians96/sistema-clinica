export interface Items {
    response: Item[];
    database: string;
}

export interface Item {
    id: number | 0;
    name: string;
    description: string;
    second_name: string;
    model: string;
    barcode: string;
    internal_id: string;
    stock: number;
    stock_min: number;
    active: boolean;
    status: boolean;
    lots_enabled: boolean;
    unit_type_id: 'NIU';
    category_id: number | null;
    warehouses: Warehouses | null;
    item_lots_group?: ItemLotsGroup[] | [];
    sale_unit_price: number;
    purchase_unit_price: number;
    type_commission?: string | null;
    commission?: number | null;
    createdAt?: Date;
    update_at?: Date;
}

export interface ItemLotsGroup {
    id?: number;
    item_id?: number;
    code: string;
    quantity: number;
    old_quantity?: number;
    date_of_due: string | null;
    create_at?: Date;
    update_at?: Date;
}

export interface Warehouses {
    id: number;
    establishment_id?: number;
    description: string;
    user_id?: number;
    create_at?: string;
    update_at?: string;
}
