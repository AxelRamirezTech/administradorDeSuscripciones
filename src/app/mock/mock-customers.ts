import { CustomerI } from "../models/customer.inferface";

export const CUSTOMERS: CustomerI[] = [
    { uuid: '3fd933cb-0d24-4324-9d5f-141856aa1f5e	', Rut: '123',companyRut:'456',fullName:'juanin juan', enabled:true },
    { uuid: 'beefd27b-450d-4783-b663-7fc913f67c99	', Rut: '0123',companyRut:'0456',fullName:'0juanin juan', enabled:false },
    { uuid: '125bafd5-1e0b-4ebd-af8d-7d3b84d45f4d	', Rut: '3123123', companyRut: '1230079', fullName: 'a', enabled:true},
    { uuid: '03f7cae1-555f-4f93-a6b6-bc4db2b6f363	', Rut: '3222221', companyRut: '15079', fullName: 'e', enabled:false},

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
            duration: 3,
            startDate: 1,
            endDate: 1,
            plan: [
                {
                    uuid: 'df64faa7-397f-413b-a138-29575320ef20', 
                    name: 'plan 1',
                    price: 21,
                    duration: 1,
                    validated: true,
                    //deleted?: false,
                    createdAt:'1/1/1',//string?
                    creadtedBy:'1',
                    //updatedAt?:'1/1/1',
                    //updatedBy?:string,         
                },
                ]
        }


    },
];