export class product{
    productName: String;
    productId: number;
    cost: number;
    category: String;
    Availability: boolean
    

    constructor(productName: String, productId: number, cost: number, category: String, Availability: boolean){
        this.productName = productName;
        this.productId = productId;
        this.cost = cost;
        this.category = category;
        this.Availability = Availability;
    }
}