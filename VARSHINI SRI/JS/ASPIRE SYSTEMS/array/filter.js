var productDescription = [
    {
        pid: "P101",
        pName: "Samsung F5",
        price: 24000
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
];

var res = productDescription.filter(product => product.price > 20000);
console.log(res);