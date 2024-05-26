export interface User {
    id: number;
    name: string;
    email: string;
    api_token: string | null;
    locked: boolean;
    password: string;
    photo_filename: string | null;
    date_of_birth: string | null;
    corporate_cell_phone: string | null;
    personal_cell_phone: string | null;
    identity_document_type_id: string | null;
    number: string | null;
    address: string | null;
    telephone: string | null;
    firt_name: string | null;
    last_name: string | null;
    module_user?: ModulesUser[] | null;
}

export interface ModulesUser {
    id: number;
    module_id: number;
    user_id: number;
    module?: Module;
    level_user: LevelUser[];
}

export interface LevelUser {
    id: number;
    module_user_id: number;
    level_id: number;
    user_id: number;
    level?: Level;
}

export interface Module {
    id: number;
    module_id?: number;
    title: string;
    value: string;
    enabled: boolean;
    path: string;
    icon?: string;
}


export interface Level {
    id: number;
    title: string;
    value: string;
    enabled: boolean;
    path: string;
}