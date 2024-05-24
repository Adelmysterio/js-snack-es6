SNACK 1
<!-- Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto. -->

creo un array di oggetti ospiti con chiavi tableName guestName
con un ciclo foreach per l array di oggetti 
    aggiungo chiave place come indice del ciclo 
stampo i segnaposto

<!-- SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Buon pomeriggio e buon lavoro !!! :faccia_nerd:
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Giuseppina della Rovere 78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84 -->

creo un array di oggetti studenti con i dati forniti

dichiaro un array vuoto nomeStudentiUppercase mappo studenti e creo un array che includa solo il valore di name ma scritto in maiuscolo

dichiaro un array vuoto votoStudenti
dichiato un array vuoto idVotoStudenti

creo un ciclo foreach su studenti 
     se voto studenti > 70 pusho element in VotoStudenti

     se voto studenti > 70 && id > 120 pusho element in idVotoStudenti

stampo i risultati

<!-- SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal -->

creo un array di oggetti arrayBici 
dichiaro una variabile biciLeggera all'oggetto all'indice 0 di arrayBici
creo un ciclo foreach per arrayBici
     se element.peso < biciLeggera.peso allora biciLeggera = element
stampo in console usando destruring e template literal

<!-- SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. -->

creo una funzione getRandomInt che generi un numero random tra min e max
creo un array di oggeti squadre dove imposto le chiavi nome punti e falliSubiti
creo un ciclo foreach per squadre
     invoco la funzione getRandomInt per associare un valore a punti e falliSubiti
dichiaro una variabile nomiEFalli e mappo squadre con le chiavi nome, fallisubiti
stampo nomiEFalli

<!-- BONUS 1: SNACK 5
Abbiamo questa lista di articoli di moda:
name        type      color
Poppy       tshirt    red
Jumping     occhiali  blue
CrissCross  scarpe    black
Jenny       borsa     pink
Questi articoli sono inseriti in un array di oggetti.
Dobbiamo attaccare a ognuno un cartellino position con una lettera dell'alfabeto generata casualmente e inserire gli oggetti così modificati in un nuovo array di oggetti. -->

creo un array di oggetti con i dati forniti 
creo un funzione che generi una lettera casuale generaLetteraRandom
    dichiaro una const alfabeto con all'interno le lettere dell'alfabeto
    creo un a const randomIndex
    return il carattere alla posizione generata dal indice casuale
dichiaro una variabile cardedItems mappo su items
    invoco la fuznione generaLetteraRandom per associare un valore alla chiave card

<!-- BONUS 2
Stampare in pagina oltre che in console! -->

dichiaro una costante output che selezione nel dom
creo un ciclo foreach 
     creo un elemento h2
     creo un elemento p * 3
     appendo gli elementi ad output 
     appendo ai vari elementi il valore delle varie chiavi