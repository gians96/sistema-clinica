export interface TransferFetch {
    response: Transfer[];
    database: string;
}

export interface Transfer {
    id: number;
    warehouse_origin_id?: number;
    warehouse_destination_id?: number;
    series: string;
    number: number;
    description: string;
    quantity: number;
    details?: string | null;
    create_at?: Date;
    update_at?: Date;
    warehouse_origin: Warehouse;
    warehouse_destination: Warehouse;
    inventory_transfer_items: InventoryTransferItem[];
}

export interface InventoryTransferItem {
    id?: number | null;
    description?: string;
    date_of_due?: string;
    inventories_transfer_id?: number;
    lots_enabled: boolean;
    item_id: number;
    item_lots_group_id: number | null | undefined;
    quantity: number;
    items?: Item;
    item_lots_group?: ItemLotsGroup | null;
}

export interface ItemLotsGroup {
    id: number;
    item_id: number;
    code: string;
    quantity: string;
    old_quantity: string;
    date_of_due: Date;
    create_at?: Date | string;
    update_at?: Date;
}

export interface Item {
    id: number;
    name: string;
    description: string;
    second_name: string;
    text_filter: string;
    model: string;
    barcode: string;
    internal_id: string;
    stock: number;
    stock_min: number;
    active: boolean;
    status: boolean;
    lots_enabled: boolean;
    unit_type_id: string;
    category_id: null;
    warehouse_id: number;
    sale_unit_price: number;
    purchase_unit_price: number;
    createdAt?: Date;
    update_at?: Date;
    type_commission: string;
    commission: number;
}

export interface Warehouse {
    id: number;
    establishment_id: number;
    description: string;
    user_id: null;
    users?: Users;
    create_at?: Date;
    update_at?: Date;
}


export interface Users {
    id: number;
    name: string;
    email: null;
    password: null;
    api_token: null;
    locked: boolean;
    photo_filename: string;
    date_of_birth: null;
    corporate_cell_phone: null;
    personal_cell_phone: null;
    identity_document_type_id: null;
    number: null;
    address: null;
    telephone: null;
    firt_name: null;
    last_name: null;
    create_at: Date;
    update_at: Date;
}