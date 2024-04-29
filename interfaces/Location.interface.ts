
export interface Department {
    id: string;
    description: string;
    active: boolean;
}
export interface Province {
    id: string;
    department_id: string;
    description: string;
    active: boolean;
}
export interface District {
    id: string;
    province_id: string;
    description: string;
    active: boolean;
}
export interface Country {
    id: string;
    description: string;
    active: boolean;
}