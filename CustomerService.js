/// <reference path="Customer.ts" />
var model = app.Model;
var app;
(function (app) {
    var Service;
    (function (Service) {
        class CustomerService {
            GetCustomer(id) {
                return new app.Model.Customer('John', 1084);
            }
            GetCustomerAsync(id) {
                var promise = new Promise((resolve, reject) => {
                    setTimeout(resolve(new model.Customer('Debdeep', 1084)), 500);
                });
                return promise;
            }
        }
        Service.CustomerService = CustomerService;
    })(Service = app.Service || (app.Service = {}));
})(app || (app = {}));
//# sourceMappingURL=CustomerService.js.map