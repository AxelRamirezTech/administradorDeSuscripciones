export interface CustomerI{
    uuid: string;
    Rut: string;
    companyRut: string;
    fullName: string;
    enabled: boolean;
    deleted?: boolean;
    subscription?: Subscription;
}


export interface Subscription{
    uuid: string;
    validated: boolean;
    price: number;
    duration: number;
    startDate: number;
    endDate: number;
    plan?:PlanI[] ;

}

export interface PlanI{
    uuid: string;
    name: string;
    price: number;
    duration: number;
    validated: boolean;
    deleted?: boolean;

    creadtedBy:string;
    createdAt:string;//string/date?
    updatedBy?:string;
    updatedAt?:string;
    
}

