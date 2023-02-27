/* Opgave 1*/


// din kode her
const person = {
    name: 'Keld',
    years: 3
}

const message = document.getElementById('message');
message.innerHTML = `<h2>Hej ${person.name}</h2><p>Du har nu arbejdet i vores virsomhed i ${person.years} år`




/* Opgave 2*/


// din kode her
const myData = [
    {
        "navn": "T-shirt",
        "beskrivelse": "En t-shirt lavet af bomuld",
        "pris": 99
    },
    {
        "navn": "Jeans",
        "beskrivelse": "Blå denim jeans med straight fit",
        "pris": 299
    },
    {
        "navn": "Hættetrøje",
        "beskrivelse": "En grå hættetrøje med lynlås",
        "pris": 199
    }
]

const productList = document.getElementById('produktListe');

myData.map(element =>
    productList.innerHTML += `<article class="produkt">
            <h2>${element.navn}</h2>
            <p>${element.beskrivelse}</p>
            <p>Pris: ${element.pris} kr.</p>
        </article>`
)









/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];


// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');
const personName = document.getElementById('personName');
const personAge = document.getElementById('personAge');


submitButton.addEventListener('click', e => {
    e.preventDefault()
    myPersons.push({
        navn: personName.value,
        alder: personAge.value
    })
    console.log(myPersons);

    const sorteretMyPersons = sorterEfterAlder(myPersons);

    showList(sorteretMyPersons);
})



function sorterEfterAlder(myPersons) {
    return myPersons.sort((a, b) => a.alder - b.alder);

}

function showList(sorteretMyPersons) {
    let html = '';
    sorteretMyPersons.map((person) => {
        // html template.
        html += `<li>${person.navn} er ${person.alder} år gammel.</li>`;
    });
    personList.innerHTML = html;
}