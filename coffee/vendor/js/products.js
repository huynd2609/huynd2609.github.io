System.register(["./product.js"], function(exports_1, context_1) {
	"use strict";
	var product_js_1, QuanLyHang;
	var __moduleName = context_1 && context_1.id;
	return {
		setters: [
			function(product_js_1_1) {
				product_js_1 = product_js_1_1;
			}
		],
		execute: function() {
			QuanLyHang = /** @class */ (function() {
				function QuanLyHang() {
					this.products = [];
					//Tao mang sp vi chua ket noi database de lay du lieu
					var product01 = new product_js_1.sanPham(1, "Cà phê nâu", 30000, "Cà phê nâu hứa hẹn mang đến cho bạn một hương vị cực kì đặc biệt", true, "images/menu/coffee-item-3.png");
					var product02 = new product_js_1.sanPham(
						2,
						"Espresso",
						35000,
						"Hãy quên đi những bộn bề cuộc sống để tìm thấy những niềm vui nho nhỏ từ ly Cà phê Espresso của Coffee Place",
						true,
						"images/menu/coffee-item-1.png"
					);
					var product03 = new product_js_1.sanPham(3, "Mattchiato", 35000, "Lớp Macchiato 'homemade' bồng bềnh quyến rũ vị phô mai mặn mặn mà béo béo.", true, "images/menu/coffee-item-2.png");
					this.addProduct(product01);
					this.addProduct(product02);
					this.addProduct(product03);
				}
				//Lấy ra tất cả sản phẩm
				QuanLyHang.prototype.getProducts = function() {
					return this.products;
				};
				//Lấy ra sản phẩm theo ID
				QuanLyHang.prototype.getProductById = function(idProduct) {
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
				QuanLyHang.prototype.addProduct = function(sp) {
					//dung de day du lieu hung tu API vao trong mang san pham
					//Cách 1:
					//this.products.push(sp); //ham push la ham thao tac voi mang
					//Cách 2:
					this.products[this.products.length] = sp;
					// console.log(this.products);
				};
				//Hiển thị sản phẩm
				QuanLyHang.prototype.showProduct = function() {
					//Lấy sanPham rồi in ra dưới dạng HTML
					var productsHTML = "";
					if (this.products.length != 0) {
						//Duyệt mảng hàng
						for (var i = 0; i < this.products.length; i++) {
							productsHTML +=
								'\n                <div id="product" class="card id-' +
								this.products[i].id +
								' col-sm-4">\n                  <div class="img-product">\n                    <img src="' +
								this.products[i].anh +
								'" alt="" class="img-fluid"/>\n                  </div>\n                  <div class="card-body">\n                    <p class="card-text">' +
								this.products[i].ten +
								"</p>\n                    <p>" +
								this.products[i].gia +
								' \u0111</p>\n                  </div>\n                  <div class="card-footer mx-auto">';
							if (this.products[i].tinhtrang == false) {
								productsHTML += '<a href="" class="btn btn-outline-secondary disabled">H\u1EBFt h\u00E0ng</a>';
							} else {
								productsHTML += '<button class="btnBuyProduct" data-idProduct="' + this.products[i].id + '">Mua ngay</button>';
							}
							//<a href="" class="btn btn-outline-primary">Thêm vào giỏ hàng</a>
							productsHTML += "</div>\n                </div>\n                <!--H\u1EBFt card-->\n              ";
						}
						return productsHTML;
					}
					return "Đang cập nhật!";
				};
				return QuanLyHang;
			})();
			exports_1("QuanLyHang", QuanLyHang);
		}
	};
});
