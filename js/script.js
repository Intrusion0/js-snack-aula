/* Jsnack #1:
Creare un array di 7 oggetti:
Ogni oggetto descriverà una bici  con le seguenti proprietà:
nome, peso e brand.
log in console dell’oggetto 
*/

/*

--DONE  1. Creo un array di oggetti => let bike = [{}]
    --DONE  1.2 Inserisco le 3 proprietà negli oggetti. => 'nome', 'peso', 'brand';

*/

let resultTest = document.querySelector(".result");
let viewBike = document.getElementById('bike');

const bike = [
    {
        'name' : 'Mario' ,
        'weigth' : '21 kg',
        'brand' : 'bmw'
    },
    {
        'name' : 'Filippo' ,
        'weigth' : '19 kg',
        'brand' : 'lomabardo'
    },
    {
        'name' : 'Martina' ,
        'weigth' : '37 kg',
        'brand' : 'giulia'
    },
    {
        'name' : 'Giulia' ,
        'weigth' : '12 kg',
        'brand' : 'ferrari'
    },
    {
        'name' : 'Giuseppe' ,
        'weigth' : '27 kg',
        'brand' : 'audi'
    },
    {
        'name' : 'Simone' ,
        'weigth' : '7 kg',
        'brand' : 'volvo'
    },
    {
        'name' : 'Flavio' ,
        'weigth' : '15 kg',
        'brand' : 'golf'
    }
];

// prima soluzione
console.log(bike);

// seconda soluzione
// for (let key in bike) {
//     console.log(bike[key]);
// }



/* Jsnack #2:

--DONE  Creare un nuovo oggetto,
--DONE  crearne una copia con la proprietà “numeroMarce” aggiunta
--DONE  pushare il nuovo oggetto copia nell’array di oggetti
--DONE  log in console dell’oggetto originale + log in console dell’oggeto copia
--DONE  log in console dell’array di oggetti
*/

let newBike = {
    'name' : 'Barbara',
    'weigth' : '20 kg',
    'brand' : 'Fiat'
};

let copyNewBike = {...newBike, 'numeroMarce' : '8'};

bike.push(copyNewBike); // push dell'oggetto copia

console.log(newBike); // oggetto originale
console.log(copyNewBike); // oggetto copia 
console.log(bike); // array di oggetti



/* snack #3:
stampare a schermo l’elenco delle bici con tutte le info, principali (numero delle marce no);
[html super base senza o con css super grezzo, l’importante che si capisca dove finisce un blocco bc e dove inizia l’altro, solo quello (quindi bastan dei margini grossolani)]
*/


for (let key in bike) {
    const {name, weigth, brand} = bike[key];

    viewBike.innerHTML += `
    <div id="bike">
        <ul>
            <li>
                ${key}
                ${name}
                ${weigth}
                ${brand}
            </li>
        </ul>
    </div>`
}