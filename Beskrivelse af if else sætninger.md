<h1>if else sætninger</h1>

<p> En if else sætning bruges til at lave forskellige handlinger baseret på forskellige betingelser.<p>

<p>Der mange tegn man skal huske i en if else sætning. Man bruger "()" til at skrive "true" eller false. "true" og "false" bruger man til at få sætningerne til at fungere. "true" bruger du til at sige den er sand, det får den til at fungere og "false" bruger du til at sige den falsk, og derfor vil den ikke fungere.<p>

<p>Else bruger du til at gøre sætter noget ind, som kommer frem hvis sætningen er noget andet. Man bruger det til at sige hvis der er andet der måske også kan udføres.<p>

<h2>Eksempel</h2>
var tal = 6;

if (true){
    console.log('højere end 5');  
} <p>else {
    console.log('lavere end 5');
}<p>
console.log(tal);  

<p>{} Krølleparenteser bruges til at lukke sætningen, så alt hvad der foregår inde i det er skal være koden.<p>

<p>Else if bruger du til at udskrive de ting inde i hvis koden hvis variablen er noget andet.<p>

<h2>Eksempel</h2>
var favorit = "cola";

<p>if (favorit == "sprite"){
    console.log("udskriver kun hvis favorit er sprite");<p>
} <p>else if(favorit == "fanta"){
    console.log("udskriver kun hvis favorit er fanta");<p>
} <p>else if(favorit == "vand"){
    console.log("udskriver kun hvis favorit er vand")<p>
}  <p>else {
    console.log("udskriver hvis favorit er andet end sprite, fanta eller vand");<p>
}