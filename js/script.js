/* Snack 1 */

const nominativi = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

const invitati = nominativi.map((element, i) => {
    return {
        guestName: nominativi[i],
        guestTable: 'Tavolo Vip',
        place: i + 1
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
    nomiStudenti.push(element.name.toUpperCase());

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

/* Snack 3  */

const arrayBici = [
    {
        nome: "Bici1",
        peso: 10
    },
    {
        nome: "Bici2",
        peso: 11
    },
    {
        nome: "Bici3",
        peso: 5
    },
    {
        nome: "Bici4",
        peso: 12
    },
    {
        nome: "Bici5",
        peso: 14
    },
    {
        nome: "Bici6",
        peso: 11
    },
    {
        nome: "Bici7",
        peso: 16
    },
    {
        nome: "Bici8",
        peso: 10
    },
    {
        nome: "Bici9",
        peso: 9
    },
    {
        nome: "Bici10",
        peso: 19
    }
];

let biciLeggera = arrayBici[0];

arrayBici.forEach(element => {
    if (element.peso < biciLeggera.peso) {
        biciLeggera = element
    }
});

const { nome, peso } = biciLeggera
console.log(nome, peso)
console.log(`${biciLeggera.nome} ${biciLeggera.peso}`)

/* SNACK 4 */

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const squadre = [
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Juve", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Bologna", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 }
];

squadre.forEach(squadra => {
    squadra.puntiFatti = getRandomInt(0, 100);
    squadra.falliSubiti = getRandomInt(0, 50);
});

/*   const nomiEFalli = squadre.map((element, i) => {
      return{
          nome: squadre[i].nome,
          falliSubiti: squadre[i].falliSubiti
    }
}); */

const nomiEFalli = squadre.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

console.log(nomiEFalli);