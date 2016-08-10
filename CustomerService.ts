/// <reference path="Customer.ts" />
import model = app.Model;
namespace app.Service{
    export interface ICustomerServive{
         GetCustomer(id:number):app.Model.Customer;
         GetCustomerAsync(id:number):Promise<model.Customer>;
    }
    export class CustomerService implements ICustomerServive{
        GetCustomer(id:number):app.Model.Customer{
            return  new app.Model.Customer('John',1084);
        }
        GetCustomerAsync(id:number):Promise<model.Customer>{
            var promise = new Promise<model.Customer>((resolve,reject)=>{
                setTimeout(resolve(new model.Customer('Debdeep',1084)),500);
            });
            return promise;
        }
    }
}

