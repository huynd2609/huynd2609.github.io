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
                    this._sanpham = sanpham;
                    this._amount = amount;
                }
                Object.defineProperty(productcart.prototype, "sanpham", {
                    //Getter - Setter
                    //sanpham
                    get: function () {
                        return this._sanpham;
                    },
                    set: function (sanpham) {
                        this._sanpham = sanpham;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(productcart.prototype, "amount", {
                    //amount
                    get: function () {
                        return this._amount;
                    },
                    set: function (amount) {
                        this._amount = amount;
                    },
                    enumerable: true,
                    configurable: true
                });
                productcart.prototype.calculationPrice = function () {
                    var gia = this.sanpham.gia;
                    var amount = this.amount;
                    return gia = gia * amount;
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
