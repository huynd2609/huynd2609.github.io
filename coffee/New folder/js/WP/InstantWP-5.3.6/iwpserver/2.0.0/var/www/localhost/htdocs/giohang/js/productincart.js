System.register([], function (exports_1, context_1) {
    "use strict";
    var productcart;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            productcart = /** @class */ (function () {
                function productcart(sanpham, amount) {
                    if (amount === void 0) { amount = 1; }
                    this.amount = 1;
                    this.sanpham = sanpham;
                    this.amount = amount;
                }
                productcart.prototype.calculationPrice = function () {
                    return;
                };
                productcart.prototype.showProductInCart = function () {
                    return;
                };
                return productcart;
            }());
            exports_1("productcart", productcart);
        }
    };
});
