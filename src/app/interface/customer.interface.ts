export interface CustomerI{
    id?: string;
    rut: string;
    rutBusiness:string;
    fullName: string;
    enabled?: boolean;
    deleted?: boolean;
    subscription?: {
        id?: string;
        validated: boolean;
        price: number;
        duration: number;
        startDate: Date;
        endDate: Date;
        deleted?: boolean;
    }
}