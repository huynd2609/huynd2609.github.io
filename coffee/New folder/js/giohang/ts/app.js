System.register(["./products.js", "./cart.js", "./productincart.js"], function (exports_1, context_1) {
    "use strict";
    var products_js_1, cart_js_1, productincart_js_1, products, cart, productsHTML, btnBuyProduct;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (products_js_1_1) {
                products_js_1 = products_js_1_1;
            },
            function (cart_js_1_1) {
                cart_js_1 = cart_js_1_1;
            },
            function (productincart_js_1_1) {
                productincart_js_1 = productincart_js_1_1;
            }
        ],
        execute: function () {
            products = new products_js_1.QuanLyHang();
            cart = new cart_js_1.QuanLyGioHang();
            // var allProducts : sanPham[] =  products.getProducts();
            // for (let i = 0; i < allProducts.length; i++) {
            //     console.log(allProducts[i]);
            // }
            // console.log(products.showProduct());
            //Đẩy sản phẩm tủ dữ liệu đã lấy từ database vào HTML
            productsHTML = document.getElementById('show-products');
            productsHTML.innerHTML = products.showProduct();
            //Xử lý click  "Thêm vaò giỏ hàng"
            btnBuyProduct = document.querySelectorAll('.btnBuyProduct');
            for (var i = 0; i < btnBuyProduct.length; i++) {
                btnBuyProduct[i].addEventListener("click", function () {
                    var idProduct = this.getAttribute('data-idProduct');
                    if (products.getProductById(idProduct) == 0) {
                        console.log("Error!");
                    }
                    else {
                        var productTaken = products.getProductById(idProduct);
                        //Kiem tra xem sp co hay chua?
                        if (cart.checkProductExist(productTaken) == -1) {
                            //chua co, them san pham voi so luong 1
                            var addProductToCart = new productincart_js_1.productcart(productTaken, 1);
                            cart.addProductCart(addProductToCart);
                        }
                        else {
                            //Co sp roi thi update so luong san pham len
                            cart.increasingProduct(productTaken);
                            console.log(cart.checkCart());
                        }
                    }
                    //Đưa sản phẩm đã lấy vào mảng quản lý sản phẩm trong giỏ hàng
                });
            }
        }
    };
});
