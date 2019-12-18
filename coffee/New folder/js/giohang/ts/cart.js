System.register([], function (exports_1, context_1) {
    "use strict";
    var QuanLyGioHang;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            QuanLyGioHang = /** @class */ (function () {
                function QuanLyGioHang() {
                    this.CartItems = [];
                }
                //Xem gio hang
                QuanLyGioHang.prototype.checkCart = function () {
                    return this.CartItems;
                };
                //Them san pham vao gio hang
                QuanLyGioHang.prototype.addProductCart = function (product) {
                    this.CartItems.push(product);
                    console.log(this.CartItems);
                };
                //Check xem cos sp trong gio hang chua?
                QuanLyGioHang.prototype.checkProductExist = function (product) {
                    for (var i = 0; i < this.CartItems.length; ++i) {
                        //console.log(this.CartItems[0].takenProduct().ten);
                        if (this.CartItems[i].takenProduct().id == product.id) {
                            //co sp trong gio hang roi
                            return i;
                        }
                    }
                    //chua co
                    return -1;
                };
                //Tang so luong san pham
                QuanLyGioHang.prototype.increasingProduct = function (product) {
                    //Dua vao vi tri cua san pham
                    var location = this.checkProductExist(product);
                    var amount = this.CartItems[location].takenAmount();
                    amount = amount + 1;
                    this.CartItems[location].changeNumber(amount);
                };
                QuanLyGioHang.prototype.updateProductCart = function (product, amount) { };
                QuanLyGioHang.prototype.kiemtraProduct = function () { };
                QuanLyGioHang.prototype.countQuantity = function () { return; };
                QuanLyGioHang.prototype.charge = function () { return; };
                QuanLyGioHang.prototype.showCart = function () { return; };
                return QuanLyGioHang;
            }());
            exports_1("QuanLyGioHang", QuanLyGioHang);
        }
    };
});
