System.register([], function (exports_1, context_1) {
    "use strict";
    var productcart;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            productcart = /** @class */ (function () {
                function productcart(sanpham, amount) {
                    this.sanpham = sanpham;
                    this.amount = amount;
                }
                productcart.prototype.calculationPrice = function () {
                    return;
                };
                productcart.prototype.showProductInCart = function () {
                    return;
                };
                productcart.prototype.takenProduct = function () {
                    return this.sanpham;
                };
                productcart.prototype.changeNumber = function (amount) {
                    this.amount = amount;
                };
                productcart.prototype.takenAmount = function () {
                    return this.amount;
                };
                return productcart;
            }());
            exports_1("productcart", productcart);
        }
    };
});
