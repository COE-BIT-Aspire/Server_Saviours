var traffic_light = "yellow";
if(traffic_light == "red"){
    console.log("Stop");
}
else if(traffic_light == "yellow"){
    console.log("Get Ready");
}
else{
    console.log("Go")
}

var season = "summer";
if(season == "spring"){
    console.log("Enjoy the blooming flowers.");
}
else if(season == "summer"){
    console.log("Have fun in the sun.");
}
else if(season == "autumn" || season == "fall"){
    console.log("Admire the colorful leaves.");
}
else{
    console.log("Bundle up and stay warm.");
}

var score = 90;
if(score < 50){
    console.log("You need to improve.");
}
else if(score >= 50 && score <= 70){
    console.log("Good job!");
}
else{
    console.log("Excellent performance!");
}

var num = 6;
if(num%2 == 0){
    console.log("The number is even.");
}
else{
    console.log("The number is odd.");
}

var character = "s";
if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u"){
    console.log("It's a vowel.");
}
else{
    console.log("It's a consonant.");
}