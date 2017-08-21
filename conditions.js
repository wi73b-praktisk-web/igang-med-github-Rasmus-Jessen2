
//Øvelse 1//
Boolean = false;

if (false){
    console.log('hej verden');
}


//Øvelse 2//
var tal = 6;

if (true){
    console.log('højere end 5');  
} else {
    console.log('lavere end 5');
}
console.log(tal);  


//Øvelse 2+3//
var tal = 6;
var result = tal ? "talet er højere end 5" : "tallet er ikke lavere end 5";

console.log(result);


//Øvelse 4//
var favorit = "cola";

if (favorit == "sprite"){
    console.log("udskriver kun hvis favorit er sprite");
} else if(favorit == "fanta"){
    console.log("udskriver kun hvis favorit er fanta");
} else if(favorit == "vand"){
    console.log("udskriver kun hvis favorit er vand");
} else {
    console.log("udskriver hvis favorit er andet end sprite, fanta eller vand");
}


//Øvelse 4+5//
var favorit ="cola";
switch(favorit){
  case "cola":
    console.log("cola er godt");
    break;
  case "fanta":
    console.log("fanta er 2. priotet");
    break;
  case "sprite":
    console.log("sprite er nu også meget godt");
    break;
  case "vand":
    console.log("vand er naturligt");
}

