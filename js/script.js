// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const persone = [
    {
        nome: 'Gina',
        cognome: 'Ginetti',
        eta: '16'
    },
    {
        nome: 'Pina',
        cognome: 'Linetti',
        eta: '14'
    },
    {
        nome: 'Rina',
        cognome: 'Finetti',
        eta: '19'
    },
    {
        nome: 'Lina',
        cognome: 'Fonetti',
        eta: '24'
    },
    {
        nome: 'Xena',
        cognome: 'Principessa Guerriera',
        eta: '50'
    },
    {
        nome: 'Annamaria',
        cognome: 'Franzoni',
        eta: '56'
    },
    {
        nome: 'Bill',
        cognome: 'Clinton',
        eta: '70'
    },
    {
        nome: 'Leornardo',
        cognome: 'Di Caprio',
        eta: '25'
    },
    {
        nome: 'Gesu',
        cognome: 'Cristo',
        eta: '33'
    },
    {
        nome: 'Dante',
        cognome: 'Alighieri',
        eta: '759'
    },
];

const personeModificate = persone.forEach(element => {
    if (parseInt(element.eta) >= 18) {
        console.log(element.nome, element.cognome, 'Può Guidare')
    }
    else {
    console.log(element.nome, element.cognome, 'Non può Guidare')}
});