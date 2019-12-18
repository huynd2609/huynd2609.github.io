System.register(["./product.js"], function (exports_1, context_1) {
    "use strict";
    var product_js_1, QuanLyHang;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (product_js_1_1) {
                product_js_1 = product_js_1_1;
            }
        ],
        execute: function () {
            QuanLyHang = /** @class */ (function () {
                function QuanLyHang() {
                    this.products = [];
                    //Tao mang sp vi chua ket noi database de lay du lieu
                    var product01 = new product_js_1.sanPham(1, 'Bàn làm việc', 499000, "Tiki Trading", true, "images/ban-lam-viec.jpg");
                    var product02 = new product_js_1.sanPham(2, 'Bàn laptop', 599000, "Tiki Trading", false, "images/ban-laptop.jpg");
                    var product03 = new product_js_1.sanPham(3, 'Tai nghe True Wireless Xiaomi Redmi Airdots', 299000, "Tiki Trading", true, "images/tai-nghe-khong-day.jpg");
                    this.addProduct(product01);
                    this.addProduct(product02);
                    this.addProduct(product03);
                }
                //Lấy ra tất cả sản phẩm
                QuanLyHang.prototype.getProducts = function () {
                    return this.products;
                };
                //Lấy ra sản phẩm theo ID
                QuanLyHang.prototype.getProductById = function (idProduct) {
                    //Lấy product dua vao id
                    for (var i = 0; i < this.products.length; i++) {
                        //Kiểm tra
                        if (this.products[i].id == idProduct) {
                            return this.products[i];
                        }
                    }
                    //Hết vong lặp mà không có sản phẩm trong dữ liệu
                    return 0;
                };
                //Thêm sản phẩm vào
                QuanLyHang.prototype.addProduct = function (sp) {
                    //dung de day du lieu hung tu API vao trong mang san pham
                    //Cách 1:
                    //this.products.push(sp); //ham push la ham thao tac voi mang 
                    //Cách 2:
                    this.products[this.products.length] = sp;
                    // console.log(this.products);
                };
                //Hiển thị sản phẩm
                QuanLyHang.prototype.showProduct = function () {
                    //Lấy sanPham rồi in ra dưới dạng HTML 
                    var productsHTML = "";
                    if (this.products.length != 0) {
                        //Duyệt mảng hàng
                        for (var i = 0; i < this.products.length; i++) {
                            productsHTML += "\n                <div id=\"product\" class=\"card id-" + this.products[i].id + " col-sm-4\">\n                  <div class=\"img-product\">\n                    <img src=\"" + this.products[i].anh + "\" alt=\"\" class=\"img-fluid\"/>\n                  </div>\n                  <div class=\"card-body\">\n                    <p><small>" + this.products[i].ten + "</small></p>\n                    <p class=\"card-text\"><b>" + this.products[i].gia + " \u0111</b></p>\n                  </div>\n                  <div class=\"card-footer mx-auto\">";
                            if (this.products[i].tinhtrang == false) {
                                productsHTML += "<a href=\"\" class=\"btn btn-outline-secondary disabled\">H\u1EBFt h\u00E0ng</a>";
                            }
                            else {
                                productsHTML += "<button class=\"btn btn-outline-primary btnBuyProduct\" data-idProduct=\"" + this.products[i].id + "\">Th\u00EAm v\u00E0o gi\u1ECF h\u00E0ng</button>";
                            }
                            //<a href="" class="btn btn-outline-primary">Thêm vào giỏ hàng</a>
                            productsHTML += "</div>\n                </div>\n                <!--H\u1EBFt card-->\n              ";
                        }
                        return productsHTML;
                    }
                    return 'Đang cập nhật!';
                };
                return QuanLyHang;
            }());
            exports_1("QuanLyHang", QuanLyHang);
        }
    };
});
