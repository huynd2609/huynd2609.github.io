import { sanPham } from "./product.js";
import { QuanLyHang } from "./products.js";
import { QuanLyGioHang } from "./cart.js";
import { productcart } from "./productincart.js";


var products = new QuanLyHang();
var cart = new QuanLyGioHang();
var productsincart = document.getElementById('productsincart');
var countQuantity = document.getElementById('count-quantity');
var totalMoney = document.querySelectorAll('.charge');
var alert = document.getElementById('alert-updatecart');

//Đẩy sản phẩm tủ dữ liệu đã lấy từ database vào HTML
var productsHTML =  document.getElementById('show-products');
productsHTML.innerHTML = products.showProduct();

//Xử lý click  "Thêm vaò giỏ hàng"
var btnBuyProduct = document.querySelectorAll('.btnBuyProduct');
for (let i = 0; i < btnBuyProduct.length; i++) {
    btnBuyProduct[i].addEventListener("click", function(){
        var idProduct = this.getAttribute('data-idProduct');
        if(products.getProductById(idProduct) == 0) {
            console.log("Error!");
        } else {
            var productTaken : sanPham = products.getProductById(idProduct);
            //Kiem tra xem sp co hay chua?
            if (cart.checkProductExist(productTaken) == -1) {
                //chua co, them san pham voi so luong 1
                var addProductToCart : productcart = new productcart(productTaken,1);
                cart.addProductCart(addProductToCart);
            } else {
                //Co sp roi thi update so luong san pham len
                cart.increasingProduct(productTaken);
            }
            alert.innerHTML = '<div class="alert alert-success" role="alert"> <i class="fa fa-check-square-o"></i> ' + productTaken.ten + ' đã được thêm vào giỏ hàng thành công!</div>'
            //show sản phẩm
            productsincart.innerHTML = cart.showCart();
            loaddatacart();

            //Xử lý ô số lượng sản phẩm
            var amount = document.getElementsByClassName('amount');
            for (let i = 0; i < amount.length; i++) {
                amount[i].addEventListener("change", function() {
                    var idproduct : any = amount[i].getAttribute('data-idproduct');
                    var takenproduct : sanPham = products.getProductById(idproduct);
                    var amountupdate : number = parseInt(this.value);
                    cart.updateProductCart(takenproduct, amountupdate);
                    console.log(cart.checkCart());
                    loaddatacart();
                })
                
            }
            
        }
    })
    
}

function loaddatacart() : void {
    //Số lượng sản phẩm
    countQuantity.innerHTML = "( " + cart.countQuantity() + " sản phẩm )";
    //Tổng tiền thanh toán
    for (let i = 0; i < totalMoney.length; i++) {
        totalMoney[i].innerHTML = cart.totalMoney() + " đ";
    }
}

