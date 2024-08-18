var products = ["mobilephone", "laptop", "keychain", "dolls", "charger"];
products.map((product,index)=>{
    console.log(product+index);
})

var productDescription = [
    {
        pid: "P101",
        pName: "Samsung F5",
        price: 13000
    },
    {
        pid: "P102",
        pName: "Samsung F9",
        price: 26000
    },
    {
        pid: "P103",
        pName: "Oppo F5",
        price: 12000
    }
]
productDescription.map((product,index)=>{
    //console.log(product);
    console.log("Description of product no:"+(index+1));
    console.log(product.pid);
    console.log(product.pName);
    console.log(product.price);
})