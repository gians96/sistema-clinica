import type { Users } from "./User";
import type { Establishment } from "./Establishments.interface";

export interface Warehouse {
    id: number;
    establishment_id: number | null;
    description: string;
    user_id: number | null;
    status?: boolean;
    establishments: Establishment | null;
    users: Users | null;
    create_at?: Date;
    update_at?: null;
}
