import { sanPham } from "./product.js";

export class productcart {
  private _sanpham: sanPham;
  private _amount: number;

  constructor(sanpham: sanPham, amount: number = 1) {
    this._sanpham = sanpham;
    this._amount = amount;
  }

  //Getter - Setter
  //sanpham
  public get sanpham(): sanPham {
    return this._sanpham;
  }

  public set sanpham(sanpham: sanPham) {
    this._sanpham = sanpham;
  }

  //amount
  public get amount(): number {
    return this._amount;
  }

  public set amount(amount: number) {
    this._amount = amount;
  }

  calculationPrice(): number {
    var gia : number = this.sanpham.gia;
    var amount : number = this.amount;
    return gia = gia*amount;
  }

  showProductInCart(): string {
    return;
  }
}
