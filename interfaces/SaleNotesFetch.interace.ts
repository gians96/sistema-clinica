export interface SaleNoteFetch {
    id:                      number;
    user_id:                 number;
    external_id:             null;
    establishment_id:        number;
    establishment_json:      JSON;
    soap_type_id:            number;
    state_type_id:           number;
    prefix:                  string;
    series:                  string;
    number:                  number;
    date_of_issue:           Date;
    customer_id:             number;
    customer_json:           JSON;
    currency_type_id:        string;
    exchange_rate_sale:      string;
    point_system:            string;
    point_systema_data:      null;
    created_from_pos:        boolean;
    has_total_canceled:      boolean;
    total_prepayment:       number|null;
    pending_amount:         number|null;
    total_charge:           number|null;
    total_discount:         number|null;
    total_exportation:      number|null;
    total_free:             number|null;
    total_taxed:            number|null;
    total_unaffected:       number|null;
    total_exonerated:       number|null;
    total_igv:              number|null;
    total_igv_free:         number|null;
    total_base_isc:         number|null;
    total_isc:              number|null;
    total_base_other_taxes: number|null;
    total_other_taxes:      number|null;
    total_plastic_bag_taxes:number|null;
    total_taxes:            number|null;
    total_value:            number|null;
    subtotal:               number|null;
    total:                  number|null;
    observation:             string;
    due_of_date:             Date;
    create_at:               Date;
    update_at:               Date;
    customer:                Customer;
    establishment:           Establishment;
    sale_note_items:         SaleNoteItem[];
    sale_note_payments:      SaleNotePayment[];
    state_type:              StateType;
    user:                    null;
}

export interface Customer {
    id:                        number;
    name:                      string;
    number:                    string;
    identity_document_type_id: string;
    address:                   null;
    internal_code:             null;
    barcode:                   null;
    observation:               null;
    seller_id:                 null;
    zone_id:                   null;
    website:                   null;
    enabled:                   boolean;
    type:                      string;
    trade_name:                null;
    country_id:                string;
    nationality_id:            string;
    department_id:             null;
    province_id:               null;
    district_id:               null;
    telephone:                 null;
    email:                     null;
    perception_agent:          boolean;
    percentage_perception:     string;
    state:                     null;
    condition:                 null;
    person_type_id:            null;
    contact:                   null;
    comment:                   null;
    addresses:                 null;
    parent_id:                 null;
    credit_days:               null;
    optional_email:            null;
    accumulated_points:        null;
    has_discount:              boolean;
    discount_type:             string;
    discount_amount:           null;
    create_at:                 Date;
    update_at:                 null;
}

export interface JSON {
}

export interface Establishment {
    id:                    number;
    description:           string;
    country_id:            null;
    department_id:         null;
    province_id:           null;
    district_id:           null;
    country:               string;
    department:            string;
    province:              string;
    district:              string;
    address:               string;
    email:                 null;
    telephone:             null;
    code:                  null;
    aditional_information: null;
    web_address:           null;
    trade_address:         null;
    create_at:             Date;
    update_at:             Date;
}

export interface SaleNoteItem {
    id:                      number;
    sale_note_id:            number;
    item_id:                 number;
    item_lots_group_id:      null;
    quantity:                string;
    affectation_igv_id:      string;
    percentage_igv:          string;
    unit_value:              string;
    total_base_igv:          string;
    total_igv:               string;
    system_isc_type_id:      null;
    total_base_isc:          string;
    percentage_isc:          string;
    total_isc:               string;
    total_base_other_taxes:  string;
    percentage_other_taxes:  string;
    total_other_taxes:       string;
    total_plastic_bag_taxes: string;
    total_taxes:             string;
    unit_price:              string;
    total_value:             string;
    total_charge:            string;
    total_discount:          string;
    total:                   string;
    price_type_id:           string;
    additional_information:  null;
    warehouse_id:            number;
    item_type_id:            number | null;
    quantity_chicken:        number;
    average_weight:          string;
    quantity_box:            number;
    tare:                    number;
    gross_weight:            string;
    has_discount:            boolean;
    discount:                string;
    currency_type_id:        string;
    unit_type_id:            string;
}

export interface SaleNotePayment {
    id:                     number;
    sale_note_id:           number;
    date_of_payment:        Date;
    payment_method_type_id: number;
    reference:              string;
    change:                 null;
    payment:                string;
}

export interface StateType {
    id:          number;
    description: string;
}
