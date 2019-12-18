import { sanPham } from "./product.js";

export class QuanLyHang {
    private products : sanPham[] = [];

    constructor(){
        //Tao mang sp vi chua ket noi database de lay du lieu
        var product01 = new sanPham(0o1, 'Bàn làm việc', 499000, "Tiki Trading", true, "images/ban-lam-viec.jpg");
        var product02 = new sanPham(0o2, 'Bàn laptop', 599000, "Tiki Trading", false, "images/ban-laptop.jpg");
        var product03 = new sanPham(0o3, 'Tai nghe True Wireless Xiaomi Redmi Airdots', 299000, "Tiki Trading", true, "images/tai-nghe-khong-day.jpg");
        this.addProduct(product01);
        this.addProduct(product02);
        this.addProduct(product03);
    }

    //Lấy ra tất cả sản phẩm
    getProducts() : sanPham[] {
        return this.products;
    }

    //Lấy ra sản phẩm theo ID
    getProductById(idProduct : number) : any {
        //Lấy product dua vao id
        for (let i = 0; i < this.products.length; i++) {
            //Kiểm tra
            if (this.products[i].id == idProduct) {
                return this.products[i]
            }
        }
        //Hết vong lặp mà không có sản phẩm trong dữ liệu
        return 0;
    }

    //Thêm sản phẩm vào
    addProduct(sp : sanPham) :void {
        //dung de day du lieu hung tu API vao trong mang san pham
        //Cách 1:
        //this.products.push(sp); //ham push la ham thao tac voi mang 

        //Cách 2:
        this.products[this.products.length] = sp;
        // console.log(this.products);
    }

    //Hiển thị sản phẩm
    showProduct() : string {
        //Lấy sanPham rồi in ra dưới dạng HTML 
        var productsHTML = "";
        if(this.products.length != 0){
            //Duyệt mảng hàng
            for (let i = 0; i < this.products.length; i++) {
                productsHTML += `
                <div id="product" class="card id-${this.products[i].id} col-sm-4">
                  <div class="img-product">
                    <img src="${this.products[i].anh}" alt="" class="img-fluid"/>
                  </div>
                  <div class="card-body">
                    <p><small>${this.products[i].ten}</small></p>
                    <p class="card-text"><b>${this.products[i].gia} đ</b></p>
                  </div>
                  <div class="card-footer mx-auto">`;
                if(this.products[i].tinhtrang == false) {
                    productsHTML += `<a href="" class="btn btn-outline-secondary disabled">Hết hàng</a>`;
                } else {
                    productsHTML += `<button class="btn btn-outline-primary btnBuyProduct" data-idProduct="${this.products[i].id}">Thêm vào giỏ hàng</button>`;
                }
                    //<a href="" class="btn btn-outline-primary">Thêm vào giỏ hàng</a>
                productsHTML += `</div>
                </div>
                <!--Hết card-->
              `;
            }
            return productsHTML;
        }

        return 'Đang cập nhật!'
    }

}