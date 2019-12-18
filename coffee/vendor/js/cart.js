System.register([], function(exports_1, context_1) {
	"use strict";
	var QuanLyGioHang;
	var __moduleName = context_1 && context_1.id;
	return {
		setters: [],
		execute: function() {
			QuanLyGioHang = /** @class */ (function() {
				function QuanLyGioHang() {
					this.CartItems = [];
				}
				//Xem gio hang
				QuanLyGioHang.prototype.checkCart = function() {
					return this.CartItems;
				};
				//Tang so luong san pham
				QuanLyGioHang.prototype.increasingProduct = function(product) {
					//Dua vao vi tri cua san pham
					var location = this.checkProductExist(product);
					var amount = this.CartItems[location].amount;
					amount += 1;
					this.CartItems[location].amount = amount;
				};
				//Them san pham vao gio hang
				QuanLyGioHang.prototype.addProductCart = function(product) {
					this.CartItems.push(product);
				};
				//Check xem cos sp trong gio hang chua?
				QuanLyGioHang.prototype.checkProductExist = function(product) {
					for (var i = 0; i < this.CartItems.length; ++i) {
						//console.log(this.CartItems[0].takenProduct().ten);
						if (this.CartItems[i].sanpham.id == product.id) {
							//co sp trong gio hang roi
							return i;
						}
					}
					//chua co
					return -1;
				};
				//Update so luong san pham
				QuanLyGioHang.prototype.updateProductCart = function(product, amount) {
					for (var i = 0; i < this.CartItems.length; i++) {
						if (this.CartItems[i].sanpham.id == product.id) {
							this.CartItems[i].amount = amount;
						}
					}
				};
				//Tính tổng số lượng sản phẩm đã thêm vào giỏ hàng
				QuanLyGioHang.prototype.countQuantity = function() {
					var amount = 0;
					//Duyệt tất cả sp trong mảng, tính số lượng, cộng dồn lại
					for (var i = 0; i < this.CartItems.length; i++) {
						amount += this.CartItems[i].amount;
					}
					//Hết for duyệt hết các sản phẩm, trả về tổng số sản phẩm
					return amount;
				};
				//Tính tổng tiền thanh toán
				QuanLyGioHang.prototype.totalMoney = function() {
					var gia = 0;
					for (var i = 0; i < this.CartItems.length; i++) {
						gia += this.CartItems[i].calculationPrice();
					}
					return gia;
				};
				//Hiển thị sản phẩm trong giỏ hảng ra HTML
				QuanLyGioHang.prototype.showCart = function() {
					var cartHTML = "";
					for (var i = 0; i < this.CartItems.length; i++) {
						cartHTML +=
							'<div id="product" class="row mb-sm-5">\n            <div class="col-sm-2">\n              <img\n                src="' +
							this.CartItems[i].sanpham.anh +
							'"\n                alt=""\n                class="img-fluid"\n              />\n            </div>\n            <div class="col-sm-7">\n              <a href="" class="product-title"\n                ><strong>' +
							this.CartItems[i].sanpham.ten +
							"</strong></a\n              >\n              <p>\n                <small>" +
							this.CartItems[i].sanpham.mota +
							'</small>\n              </p>\n              <a href="" class="mr-sm-5 remove"><small>X\u00F3a</small></a>\n            </div>\n            <div class="col-sm-2">\n              <div id="price" class="float-right">' +
							this.CartItems[i].calculationPrice() +
							' \u20AB</div>\n              </div>\n            <div class="col-sm-1 pl-sm-0">\n              <input\n                class="amount text-center"\n                style="width: 100%"\n                type="number"\n                name="amount"\n                data-idproduct="' +
							this.CartItems[i].sanpham.id +
							'"\n                value="' +
							this.CartItems[i].amount +
							'"\n                min="1"\n                max="99"\n              />\n            </div>\n          </div>\n          <!--H\u1EBFt 1 product-->';
					}
					return cartHTML;
				};
				return QuanLyGioHang;
			})();
			exports_1("QuanLyGioHang", QuanLyGioHang);
		}
	};
});
