const person = {
    fullName: function(city,country){
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName: "Varshini",
    lastName: "Sri"
}

const person2 = {
    firstName: "Abinaya",
    lastName: "Shree"
}

var res1 = person.fullName.apply(person1,["Chennai","India"]);
var res2 = person.fullName.apply(person2,["Bangalore","India"]);

console.log(res1);
console.log(res2);