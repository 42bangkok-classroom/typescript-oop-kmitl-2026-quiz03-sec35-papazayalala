export class Product {
    name: string;
    price:number;

    constructor(name: string, price: number=0){
        this.name = name;
        this.price = price;
    }
    setPrice(price: number){
        this.price = price;
    }
    getPrice(){
        return this.price;
    }
    static readonly DISCOUNT_PERCENT = 10;

}

