export interface planI{
    id?: string;
    name: string;
    price: number;
    duration: number;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
    validated?: boolean;
    deleted?: boolean;
}