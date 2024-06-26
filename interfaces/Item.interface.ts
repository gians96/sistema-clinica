import type { CatUnitTypes } from "./Company.interface";

export interface Item {
    id: number | 0;
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
    currency_type_id?: string | null;
    unit_type_id: 'NIU' | string;
    unit_type: CatUnitTypes | null;
    category_id: number | null;
    warehouse_id: number | null;
    warehouses: Warehouses | null;
    item_lots_group?: ItemLotsGroup[];
    sale_unit_price: number;
    purchase_unit_price: number;
    item_type_id: number | null;
    type_item: TypeItem | null;
    type_commission?: string | null;
    commission?: number | null;
    createdAt?: string;
    update_at?: string;
    net_weight?: number;
    quantity_chicken?: number;
}
export interface TypeItem {
    id: number;
    description: string;
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
    user_id?: number | null;
    create_at?: string;
    update_at?: string | null;
}

export interface Product {
    id: number
    name: string
    note: string
    price: number
    item_type_id?: number | null;
    quantity_chicken: number;
    average_weight?: number | null;
    quantity_box?: number | null;
    tare?: number | null;
    tare_weight?: number | null | string;
    gross_weight?: number | null;

    net_weight?: number | null;
    discount: number;
    isDiscount: boolean;
    type_item?: TypeItem | null;
    total: number;
    // imageUrl: string
    // itemCode?: string | null
    quantity: number
    status: number
    // tag: Tag[] | []
    categoryId: number | null
    internalId: string
    unitTypeId: string

    // currencyTypeSymbol: string
    // sale_affectation_igv_type_id: string
}

export interface paymentMethodTypes {
    id: number;
    description: string;
    has_card: boolean;
    charge: number;
    number_days: number;
    is_credit: boolean;
    is_cash: boolean;
}

export interface paymentPOS {
    id: number | null
    payment_method_type_id: number;
    reference: string;
    mount: number;
    date_of_payment?: string | null
}