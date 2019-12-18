import { sanPham } from "./product.js";
import { productcart } from "./productincart.js";

export class QuanLyGioHang {
  private CartItems: productcart[] = [];

  //Xem gio hang
  checkCart(): productcart[] {
    return this.CartItems;
  }

  //Tang so luong san pham
  increasingProduct(product: sanPham): void {
    //Dua vao vi tri cua san pham
    var location: number = this.checkProductExist(product);
    var amount = this.CartItems[location].amount;
    amount += 1;
    this.CartItems[location].amount = amount;
  }

  //Them san pham vao gio hang
  addProductCart(product: productcart): void {
    this.CartItems.push(product);
  }

  //Check xem cos sp trong gio hang chua?
  checkProductExist(product: sanPham): number {
    for (let i = 0; i < this.CartItems.length; ++i) {
      //console.log(this.CartItems[0].takenProduct().ten);
      if (this.CartItems[i].sanpham.id == product.id) {
        //co sp trong gio hang roi
        return i;
      }
    }
    //chua co
    return -1;
  }

  //Update so luong san pham
  updateProductCart(product: sanPham, amount: number) : void {
    for (let i = 0; i < this.CartItems.length; i++) {
      if(this.CartItems[i].sanpham.id == product.id) {
        this.CartItems[i].amount = amount;
      }
    }
  }


  //Tính tổng số lượng sản phẩm đã thêm vào giỏ hàng
  countQuantity(): number {
    var amount : number = 0;
    //Duyệt tất cả sp trong mảng, tính số lượng, cộng dồn lại
    for (let i = 0; i < this.CartItems.length; i++) {
      amount += this.CartItems[i].amount;
    }
    //Hết for duyệt hết các sản phẩm, trả về tổng số sản phẩm
    return amount;
  }

  //Tính tổng tiền thanh toán
  totalMoney(): number {
    var gia : number = 0;
    for (let i = 0; i < this.CartItems.length; i++) {
      gia += this.CartItems[i].calculationPrice();
    }
    return gia;
  }
  
  //Hiển thị sản phẩm trong giỏ hảng ra HTML
  showCart(): string {
    var cartHTML: string = "";
    for (let i = 0; i < this.CartItems.length; i++) {
      cartHTML += `<div id="product" class="row mb-sm-5">
            <div class="col-sm-2">
              <img
                src="${this.CartItems[i].sanpham.anh}"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="col-sm-7">
              <a href="" class="product-title"
                >${this.CartItems[i].sanpham.ten}</a
              >
              <p>
                <small>Cung cấp bởi <a href="">${this.CartItems[i].sanpham.mota}</a></small>
              </p>
              <a href="" class="mr-sm-5"><small>Xóa</small></a>
              <a href=""><small>Để dành mua sau</small></a>
            </div>
            <div class="col-sm-2">
              <div id="price" class="float-right">${this.CartItems[i].calculationPrice()} ₫</div>
              <span class="badge badge-primary float-right">-33%</span>
            </div>
            <div class="col-sm-1 pl-sm-0">
              <input
                class="amount text-center"
                style="width: 100%"
                type="number"
                name="amount"
                data-idproduct="${this.CartItems[i].sanpham.id}"
                value="${this.CartItems[i].amount}"
                min="1"
                max="99"
              />
            </div>
          </div>
          <!--Hết 1 product-->`;
    }
    return cartHTML;
  }

  constructor() {}
}
