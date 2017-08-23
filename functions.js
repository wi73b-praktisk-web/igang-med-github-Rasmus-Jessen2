//Øvelse 1//

//A Udskriv profil// 
function info(fornavn, efternavn, fødselsdag){
    console.log(fornavn, efternavn, fødselsdag);
}
info("Rasmus", "Jessen", "21 Marts");


//B Regnefunktioner//
function plus(tal1, tal2){
    console.log(tal1 + tal2);
}
plus (3, 5);

function minus(tal3, tal4){
    console.log(tal3 - tal4);
}
minus(8, 4);

function gange(tal5, tal6){
    console.log(tal5 * tal6);
}
gange(6, 7);

function dividere(tal7, tal8){
    console.log(tal7 / tal8);
}
dividere(10, 2);

var result = 0; 
function plus(tal1, tal2){
  result = result + tal1, tal2;
}

plus(3);
plus(5);

console.log(result);


//Øvelse 2//
var tekst = "Jeg hedder Rasmus og jeg er 18 år gammel";

function afkortstreng(tekst){
    return tekst.substring(0, 30);
    // return tekst
}

console.log(afkortstreng(tekst));


//Øvelse 3//
var info = function (p){
    return p[0] + " " + p[1] + ": Født " + p[2] + " " + " Alder:"+ " " + p[3];
}

var idol = ["Rasmus", "Jessen", "21 Marts 1999", "18 år"]; 

console.log(info(idol));


//Øvelse 4//
function calculator() {
    var result = 0;
    return {
        add: function (x) {
            result += x;
        },
        sub: function (x) {
            result -= x;
        },
        gange: function (x) {
            result *= x;
        },
        dividere: function (x) {
            result /= x;
        },
        result: function () {
            return result;
        }
    }
}

var calc = calculator();
calc.add(2);
calc.add(5);
calc.add(3);
calc.sub(4);
calc.gange(5);
calc.dividere(4);
console.log(calc.result());
