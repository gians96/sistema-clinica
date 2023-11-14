
export interface Department {
    id:          string;
    description: string;
    active:      number;
}
export interface Province {
    id:            string;
    department_id: string;
    description:   string;
    active:        number;
}
export interface District {
    id:          string;
    province_id: string;
    description: string;
    active:      number;
}
export interface Country {
    id:          string;
    description: string;
    active:      number;
}