/* Snack 1 */

const invitati = [
    {
        tableName: 'Tavolo Vip',
        guestName: 'Brad Pitt',
    },
    {
        tableName: 'Tavolo Vip',
        guestName: 'Johnny Depp',
    },
    {
        tableName: 'Tavolo Vip',
        guestName: 'Lady Gaga',
    },
    {
        tableName: 'Tavolo Vip',
        guestName: 'Cristiano Ronaldo',
    },
    {
        tableName: 'Tavolo Vip',
        guestName: 'Georgina Rodriguez',
    },
    {
        tableName: 'Tavolo Vip',
        guestName: 'Chiara Ferragni',
    },
    {
        tableName: 'Tavolo Vip',
        guestName: 'George Clooney',
    },
    {
        tableName: 'Tavolo Vip',
        guestName: 'Amal Clooney',
    },
    {
        tableName: 'Tavolo Vip',
        guestName: 'Fedez',
    },
    {
        tableName: 'Tavolo Vip',
        guestName: 'Amadeus',
    },
    {
        tableName: 'Tavolo Vip',
        guestName: 'Fiorello',
    },
]

invitati.forEach((element, i) => {
    element.place = i + 1
    console.log(element)
});


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

const nomiStudenti = studenti.map((element) => element.name);

const votoStudenti = [];
const idVotoStudenti = [];

studenti.forEach(element => {
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
