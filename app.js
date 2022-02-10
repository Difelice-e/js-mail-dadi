// CONTROLLO EMAIL 

// creazione di un array con le email valide 
const emailRegistrate = ["boolean@gmail.com", "official.booleanògmail.com", "example@gmail.com"];

// input dell'utente della propria mail e creazione della variabile
const userMail = document.getElementById('email-utente');

let emailConfirm = false

document.getElementById('submit-button').addEventListener("click",   // aggiunto evento di click sul bottone che starta il ciclo
    function () {
        for (let i = 0; i < emailRegistrate.length; i++) {
            
            if (emailRegistrate[i] === userMail.value) {
                emailConfirm = true;
                break
            }    
        }
    
        if (emailConfirm === true) {   // controllo se la mail è presente in lista
            alert("La tua email è valida, puoi accedere al sito!");   // stampo messaggio di esito positivo
            
        } else {
            alert("Ci dispiace, la tua email non è registrata!");   // stampo messaggio di esito negativo
            
        }
    }
);






// GIOCO DEI DADI

document.getElementById('dice-button').addEventListener("click",   // evento di click sul bottone
    function () {
        const userDice = Math.floor(Math.random() * 6) + 1;   // generazione numero random 1-6 per l'utente
        const botDice = Math.floor(Math.random() * 6) + 1;   // generazione numero random 1-6 per il pc
        let diceResult = document.getElementById('dice-result');
        diceResult.innerHTML = `Il tuo numero è ${userDice} mentre il computer ha tirato un ${botDice}`;   // stanpo i valori dei dadi (dovessero pensare che sono truccati!)
        if (userDice > botDice) {   // controllo se l'utente ha vinto
            diceResult.innerHTML += " - Hai vinto!";   // stampo messaggio di vittoria!
        } else if (userDice < botDice) {  // controllo se l'utente ha perso
            diceResult.innerHTML += " - Oh no, hai perso!";   // stampo messaggio di sconfitta
        } else {  // caso di pareggio
            diceResult.innerHTML += " - Pareggio! Ritenta";   // stampo messaggio di pareggio
        }
    }
);
