var color = "green";
if(color == "red"){
    console.log("Stop");
}
else if(color == "yellow"){
    console.log("Get Ready");
}
else{
    console.log("Go");
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

var num = 24;
if(num % 2 == 0){
    console.log("The number is even.");
}
else{
    console.log("The number is odd.");
}

var character = "V";
if(character == "a" || character == "A" || character == "e" || character == "E" || character == "i" || character == "I" || character == "o" || character == "O" || character == "u" || character == "U"){
    console.log("It's a vowel.");
}
else{
    console.log("It's a consonant");
}