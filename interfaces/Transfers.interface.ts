export interface TransferFetch {
    response: Transfer[];
    database: string;
}

export interface Transfer {
    id: number | 0;
    series: string;
    number: number;
    description: string;
    quantity: number;
    details?: string | null;
    create_at?: Date;
    update_at?: Date;
    warehouse_origin: Warehouse | {};
    warehouse_destination: Warehouse | {};
    inventory_transfer_items: InventoryTransferItem[];
}

export interface InventoryTransferItem {
    id: number;
    inventories_transfer_id: number;
    item_lots_group_id: number;
    quantity: number;
    item_lots_group: ItemLotsGroup;
}

export interface ItemLotsGroup {
    id: number;
    item_id: number;
    code: string;
    quantity: string;
    old_quantity: string;
    date_of_due: Date;
    create_at: Date;
    update_at: Date;
    items: Items;
}

export interface Items {
    id: number;
    name: string;
    description: string;
    second_name: string;
    text_filter: string;
    model: string;
    barcode: string;
    internal_id: string;
    stock: string;
    stock_min: string;
    active: boolean;
    status: boolean;
    lots_enabled: boolean;
    unit_type_id: string;
    category_id: null;
    warehouse_id: number;
    sale_unit_price: string;
    purchase_unit_price: string;
    createdAt: Date;
    update_at: Date;
    type_commission: string;
    commission: string;
}

export enum Series {
    Nta = "NTA",
}

export interface Warehouse {
    id: number;
    establishment_id: number;
    description: string;
    user_id: null;
    create_at: Date;
    update_at: null;
}
