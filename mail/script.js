//create an array
let email = [
    "mongi@mail.com",
    "marco@mail.com",
    "luca@mail.com",
    "pasquale@mail.com",
    "danilo@mail.com",
    "alessandra@mail.com",
];

console.log(email);
//crate a prompt for user to insert an email address
let itemToFind = prompt ("inserisci un indirizzo email");

console.log("indirizzo email inserito dall'utente:" + ' ' + itemToFind);

//dichiaro una variabile per tracciare lo status della ricerca
let found = false;

//create a for cicle to verify if the inserted email is present inside the array
for (i = 0; i < email.length; i++) {
    if (email[i] === itemToFind) {
        found = true;
        break;
    }
}

//stampo l'esito
if (found){
    alert ("la mail è presente nell'array")
} else {
    alert ("la tua mail non è presente nell'array" )
}