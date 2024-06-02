export interface Login {
    status?: boolean;
    msg?: string;
    name: string;
    email: string;
    token: string;
    modules: ModuleUser[];
}

export interface ModuleUser {
    id: number;
    icon: string;
    title: string;
    value: string;
    path: string;
    checked: boolean;
    expanded: boolean;
    module_levels: ModuleLevel[];
}

export interface ModuleLevel {
    id: number;
    module_id: number;
    title: string;
    value: string;
    enabled: boolean;
    checked: boolean;
    path: string;
}
