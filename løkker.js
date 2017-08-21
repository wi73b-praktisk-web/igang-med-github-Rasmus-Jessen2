//Øvelse 1//
// do{
//   console.log('dette kører igen og igen, men mindst 1 gang');
// } while(true);


//Øvelse 2//

//1. gang//
var counter = 1;

while (counter < 25){
    console.log(counter);
    counter++
}

//2. gang//
do {
    console.log(counter); 
    counter++
} while(counter < 25);

//3. gang//
for (var counter = 1; counter < 25; counter++){
    console.log(counter);
}


//Øvelse 3//
var år = 2017;

for (var år = 2017; år > 1917; år--){
    console.log(år);
}


