var app;
(function (app) {
    var Model;
    (function (Model) {
        class Customer {
            constructor(name, id) {
                this.Name = name;
                this.Id = id;
            }
        }
        Model.Customer = Customer;
    })(Model = app.Model || (app.Model = {}));
})(app || (app = {}));
//# sourceMappingURL=Customer.js.map