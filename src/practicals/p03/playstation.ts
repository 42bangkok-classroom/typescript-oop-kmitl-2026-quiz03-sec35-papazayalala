import { Product } from './product'

export class Playstation extends Product {
  constructor(name:string, public generation:number, price:number){
    super(name,price)
  }
  setPrice(price:number){
    this.price = price;
  }
  getProfile(){
    return this.name + '(Gen ' + this.generation + ')';
  }
  getPrice(){
    return this.price;
  }
  getDiscountPrice(discount:number =1){
    return this.price*(discount/100);
  }
  
  }
  // TODO: implement class properties, constructor with super(...), and methods