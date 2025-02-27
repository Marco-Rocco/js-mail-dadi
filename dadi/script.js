//generate a random number between 1 and 6
let computerGuess = Math.floor (Math.random() * 6) + 1;
console.log('scelta computer: ' + computerGuess);

//allow the user to choose his own number
let userGuess = parseInt (prompt ('inserisci un numero tra 1 e 6'));
console.log('scelta user: ' + userGuess);

//alert message of result
if (userGuess > computerGuess) {
    alert ('Hai vinto!')
} else if (userGuess === computerGuess){
    alert ('Pareggio')
} else {
    alert ('Hai perso!')
}
