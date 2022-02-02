export interface subcriptionI{
    id?: string;
    validated: boolean;
    price: number;
    duration: number;
    startDate: Date;
    endDate: Date;
    deleted?: boolean;
}