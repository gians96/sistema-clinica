import type { Users } from "./User";
import type { Establishment } from "./Establishments.interface";

export interface Warehouses {
    response: Warehouse[];
    database: string;
}

export interface Warehouse {
    id: number;
    user_id: number | null;
    establishments?: Establishment;
    // establishment_id: number;
    text: string,
    description: string;
    create_at?: Date;
    update_at?: null;
    users: Users | null;
}

