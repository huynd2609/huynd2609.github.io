System.register(["./products.js", "./cart.js", "./productincart.js"], function(exports_1, context_1) {
	"use strict";
	var products_js_1, cart_js_1, productincart_js_1, products, cart, productsincart, countQuantity, totalMoney, alert, productsHTML, btnBuyProduct;
	var __moduleName = context_1 && context_1.id;
	function loaddatacart() {
		//Số lượng sản phẩm
		countQuantity.innerHTML = "( " + cart.countQuantity() + " sản phẩm )";
		//Tổng tiền thanh toán
		for (var i = 0; i < totalMoney.length; i++) {
			totalMoney[i].innerHTML = cart.totalMoney() + " đ";
		}
	}
	return {
		setters: [
			function(products_js_1_1) {
				products_js_1 = products_js_1_1;
			},
			function(cart_js_1_1) {
				cart_js_1 = cart_js_1_1;
			},
			function(productincart_js_1_1) {
				productincart_js_1 = productincart_js_1_1;
			}
		],
		execute: function() {
			products = new products_js_1.QuanLyHang();
			cart = new cart_js_1.QuanLyGioHang();
			productsincart = document.getElementById("productsincart");
			countQuantity = document.getElementById("count-quantity");
			totalMoney = document.querySelectorAll(".charge");
			alert = document.getElementById("alert-updatecart");
			//Đẩy sản phẩm tủ dữ liệu đã lấy từ database vào HTML
			productsHTML = document.getElementById("show-products");
			productsHTML.innerHTML = products.showProduct();
			//Xử lý click  "Thêm vaò giỏ hàng"
			btnBuyProduct = document.querySelectorAll(".btnBuyProduct");
			for (var i = 0; i < btnBuyProduct.length; i++) {
				btnBuyProduct[i].addEventListener("click", function() {
					var idProduct = this.getAttribute("data-idProduct");
					if (products.getProductById(idProduct) == 0) {
						console.log("Error!");
					} else {
						var productTaken = products.getProductById(idProduct);
						//Kiem tra xem sp co hay chua?
						if (cart.checkProductExist(productTaken) == -1) {
							//chua co, them san pham voi so luong 1
							var addProductToCart = new productincart_js_1.productcart(productTaken, 1);
							cart.addProductCart(addProductToCart);
						} else {
							//Co sp roi thi update so luong san pham len
							cart.increasingProduct(productTaken);
						}
						alert.innerHTML = '<div class="alert alert-success" role="alert"> <i class="fa fa-check-square-o"></i> <strong>' + productTaken.ten + "</strong> đã được thêm vào giỏ hàng thành công!</div>";
						//show sản phẩm
						productsincart.innerHTML = cart.showCart();
						loaddatacart();
						//Xử lý ô số lượng sản phẩm
						var amount = document.getElementsByClassName("amount");
						var _loop_1 = function(i_1) {
							amount[i_1].addEventListener("change", function() {
								var idproduct = amount[i_1].getAttribute("data-idproduct");
								var takenproduct = products.getProductById(idproduct);
								var amountupdate = parseInt(this.value);
								cart.updateProductCart(takenproduct, amountupdate);
								console.log(cart.checkCart());
								loaddatacart();
							});
						};
						for (var i_1 = 0; i_1 < amount.length; i_1++) {
							_loop_1(i_1);
						}
					}
				});
			}
		}
	};
});
