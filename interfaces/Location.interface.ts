
export interface departments {
    id:          string;
    description: string;
    active:      number;
}
export interface provinces {
    id:            string;
    idDepartment: string;
    description:   string;
    active:        number;
}
export interface District {
    id:          string;
    idProvince: string;
    description: string;
    active:      number;
}
export interface countries {
    id:          string;
    description: string;
    active:      number;
}