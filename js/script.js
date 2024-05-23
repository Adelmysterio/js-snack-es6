/* Snack 1 */

const nominativi = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

const invitati = nominativi.map((element, i) => {
    return {guestName : nominativi[i],
        guestTable: 'Tavolo Vip',
        place: i+1
    }
});

console.log(invitati)


/* Snack 2 */

const studenti = [
    {
        id: 213,
        name: 'Giuseppina della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero dell Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    },
];

/* const nomiStudenti = studenti.map((element) => element.name); */
const nomiStudenti = [];
const votoStudenti = [];
const idVotoStudenti = [];

studenti.forEach(element => {
    nomiStudenti.push(element.name);

    if (element.grades > 70 && element.id > 120) {
        idVotoStudenti.push(element)
    };

    if (element.grades > 70) {
        votoStudenti.push(element)
    };
});

console.log(nomiStudenti);
console.log(votoStudenti);
console.log(idVotoStudenti);
