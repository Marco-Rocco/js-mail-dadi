# Mail

## Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email

---

## Soluzione 

- crea un array
    - inseriscici 5 mail fittizie sotto forma di stringa

- crea un  prompt per permettere all'utente di inserire una  mail

- crea un ciclo for per verificare che la mail inserita dall'utente sia nell' array
    - assegna una variabile all'input fornito dall'utente
    - inizializziamo un ciclo for, che grazie a "array.length" percorrerà tutto l'array
    - SE il valore inserito dall'utente è identico ad un valore nell'array
        - BREAK
    - ALTRIMENTI 
        - BREAK

- SE la mail è valida
    - stampa in console un messaggio di esitonpositivo
- ALTRIMENTI 
    - stampa in console un messaggio di esito negativo