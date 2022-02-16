import { CustomerI } from "../models/customer.inferface";

export const CUSTOMERS: CustomerI[] = [
    { uuid: '3fd933cb-0d24-4324-9d5f-141856aa1f5e	', Rut: '123',companyRut:'456',fullName:'juanin juan', enabled:true },

    {
        uuid:'2549465b-8f24-4c35-852e-3ff79c92aa6f	',
        Rut:'3113',
        companyRut:'11111',
        fullName:'sujeto con plan',
        enabled: true,
        subscription:
        {

            uuid:'511c8752-13d0-460a-a957-879e8d74b8f0	',
            validated: true,
            price: 21,
            duration: 0,
            startDate: 1,
            endDate: 1,
            plan: [
                {
                    uuid: 'df64faa7-397f-413b-a138-29575320ef20', 
                    name: 'plan 1',
                    price: 21,
                    duration: 0,
                    validated: false,
                    //deleted?: false,
                    createdAt: 1,//string?
                    creadtedBy:'juan',
                    //updatedAt?:'1/1/1',
                    //updatedBy?:string,         
                },
                ]
        }


    },
];