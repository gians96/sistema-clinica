
export interface Users {
    id: number;
    name: string;
    email?: string | null;
    password?: string | null;
    api_token?: string | null;
    locked: boolean;
    photo_filename?: string;
    date_of_birth?: string;
    corporate_cell_phone?: string | null;
    personal_cell_phone?: string | null;
    identity_document_type_id?: string | null;
    number?: string | null;
    address?: string | null;
    telephone?: string | null;
    firt_name?: string | null;
    last_name?: string | null;
    create_at?: Date;
    update_at?: Date;
}
