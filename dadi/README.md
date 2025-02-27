# Dadi

## Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

#### Bonus
Invece di generare il numero random per l'utente, chiedilo con un prompt!
---

## soluzione

- genera un numero random da 1 a 6
    - utilizza la funzione math.random() e assegna il risultato al computer tramite una variabile

- crea un prompt che dia la possibilità allo user di inserire il suo numero

- stabilisci un vincitore (numero più alto)
    - trasforma il valore inserito in numero usando parseInt
    - SE il numero dell'utente è più alto
        - crea un alert di vittoria
    - ALTRIMENTI SE il numero del computer è più alto
        - crea un messaggio di sconfitta
    - ALTRIMENTI in caso di pareggio
        - crea alert di pareggio
