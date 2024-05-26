export interface Module {
    id: number;
    icon?: string;
    title: string;
    value: string;
    path: string;
    checked?: boolean,
    expanded?: boolean,
    module_levels: ModuleLevel[];
}

export interface ModuleLevel {
    id: number;
    module_id: number;
    title: string;
    value: string;
    path: string;
    checked?: boolean;
}
