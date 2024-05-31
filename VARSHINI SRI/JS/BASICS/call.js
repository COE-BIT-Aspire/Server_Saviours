const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
  
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
  
var res = person.fullName.call(person1, "Oslo", "Norway");
console.log(res);