System.register([], function (exports_1, context_1) {
    "use strict";
    var sanPham;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            sanPham = /** @class */ (function () {
                //Contructor
                function sanPham(id, ten, gia, mota, tinhtrang, anh) {
                    this.id = id;
                    this.ten = ten;
                    this.gia = gia;
                    this.mota = mota;
                    this.tinhtrang = tinhtrang;
                    this.anh = anh;
                }
                Object.defineProperty(sanPham.prototype, "id", {
                    //setter-getter
                    //ID
                    get: function () {
                        return this._id;
                    },
                    set: function (v) {
                        this._id = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(sanPham.prototype, "ten", {
                    //Tên
                    get: function () {
                        return this._ten;
                    },
                    set: function (v) {
                        this._ten = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(sanPham.prototype, "gia", {
                    //Giá
                    get: function () {
                        return this._gia;
                    },
                    set: function (v) {
                        this._gia = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(sanPham.prototype, "mota", {
                    //Mô tả
                    get: function () {
                        return this._mota;
                    },
                    set: function (v) {
                        this._mota = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(sanPham.prototype, "tinhtrang", {
                    //Tình trạng
                    get: function () {
                        return this._tinhtrang;
                    },
                    set: function (v) {
                        this._tinhtrang = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(sanPham.prototype, "anh", {
                    //Ảnh
                    get: function () {
                        return this._anh;
                    },
                    set: function (v) {
                        this._anh = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                return sanPham;
            }());
            exports_1("sanPham", sanPham);
        }
    };
});
