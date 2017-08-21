<h1>Operatorer</h1>

<p> = Lighedstegnet bruger man til at definere en varibels værdi.<p>

<h2>Eksempel</h2>
<p>var tal = 1;<p>

<h1></h1>
<p>== To ligheds tegn betyder at noget er samme værdi og type. Man bruger det til at definere at noget andet er samme værdi og samme type som eks. her.<p>

<h2>Eksempel</h2>
<p>var navn = "Rasmus"<p>
<p>navn == "Albert"<p>

<h1></h1>
<p>=== Tre lighedstegn betyder at noget er samme værdi og samme type.<p>

<h2>Eksempel</h2>
<p>5 === 5<p>

<h1></h1>
<p>! Udråbstegn betyder not, og det vil sige at noget ikke er rigtig.<p>

<h2>Eksempel</h2>
<p>var tal = 10<p>
<p>if (tal = ! 10) <p>

<h1></h1>
<p>!= Udråbstegn og ligmed betyder at noget er not equal. Det bruges til at definere noget som er ikke lige med.<p>

<h2>Eksempel</h2>
<p>var x = 7<p>
<p> if(tal = != 4)<p>

<h1></h1>
<p>!== Udråbstegn og to ligmed tegn betyder at noget ikke er samme værdi eller ikke samme type. <p>

<h2>Eksempel</h2>
<p>var y = "Martin"<p>
<p>if (y = !== 8)<p>

<h1></h1>
<p> < mindre end tegnet bruger man til at definere at noget er mindre end et tal.<p>

<h2>Eksempel</h2>
<p>while (counter < 25){<p>
    console.log(counter);
    counter++
}<p>

<h1></h1>
<p> > større end bruger mana til at definere at noget er større end et tal.<p>

<h2>Eksempel</h2>
<p>while (counter > 25){<p>
    console.log(counter);
    counter++
}<p>

<p>Dette eksempel betyder at 25 er større end counter, og vil derfor ikke tælle op til 25. <p>

<h1></h1>
<p> <= mindre end og ligmed, bruger man til at definere noget der mindre end et tal og at også er det samme som den varibel man skriver. <p>

<h2>Eksempel</h2
<p>var x <= 5; <p>

<h1></h1>
<p> >= større end og ligemed, bruger man til at defindere noget der er større end et tal og at også er det samme som den varibel man skriver. <p>

<h2></h2>
<p>var y >= 7; <p>

<h1></h1>
<p>+ Plus tegnet bruger man til at lægge to variabler sammen.<p>

<h2>Eksempel</h2>
<p>var x = 2;<p>
<p>var y = 4;<p>
<p>var sum = x + y;<p>

<h1></h1>
<p>- minus tegnet bruger man til at trække to variabler fra hinanden.<p>

<h2>Eksempel</h2>
<p>var x = 6;<p>
<p>var y = 8; <p>
<p>var sum = x - y;<p>

<h1></h1>
<p>* Stjerne tegnet betyder gange, og man bruger det til gange to variabler sammen.<p>

<h2>Eksempel</h2>
<p>var x = 4;<p>
<p>var y = 4;<p>
<p>var sum = x * y;<p>

<h1></h1>
<p>/ Skråstreg betyder at dividere, og det bruger man til at dividere to variabler.<p>

<h2>Eksempel</h2>
<p>var x = 8;<p>
<p>var y = 2;<p>
<p>var sum = x / y;<p>

<h1></h1>
<p>% Procent tegnet bruger man til at finde ud af hvad forskellen er på de to variabler ud fra hvordan de lægges sammen.<p>

<h2>Eksempel</h2>
<p>var x = 5;<p>
<p>var y = 4;<p>
<p>var sum = x % y;<p>
<p>Det den gør er at den finder hvad er forskellen for de to variabler, og her vil resultatet f.eks. være 1 fordi det er så meget forskellen er på de to variabler. Men hvis den f.eks. var 5 % 6, så vil resultatet være 5.<p>

<h1></h1>
<p>&& Og tegnene bruger man til at retunere et true argument hvis der er to argumenter der er sande, ellers vil den retunere false.<p>

<h2></h2>
<p>var x = 7;<p>
<p>var y = 5;<p>
<p>(x < 10 && y > 1)<p>
<p>Her vil den retunere true fordi det er rigtig det den siger.<p>
<p>(x < 10 && y < 1);<p>
<p>Her vil den retunere false fordi det er forkert det den siger.<p>

<h1></h1>
<p>|| To streger bruger man finde ud om der er et eller to argumenter der er true, ellers så vil den retunere false.<p>

<h2>Eksempel</h2>
<p>var x = 5;<p>
<p>var y = 3;<p>
<p>(x == 5 || y == 5)<p>
<p>Her vil den retunere false da det den siger ikke er rigtigt.<p>
<p>(x == 6 || y == 0<p>
<p>Her vil den retunere true fordi den siger er rigtigt.<p>