// CONTROLLO EMAIL 

// creazione di un array con le email valide 
const emailRegistrate = ["boolean@gmail.com", "official.booleanògmail.com", "example@gmail.com"];

// input dell'utente della propria mail e creazione della variabile
const userMail = document.getElementById('email-utente');

document.getElementById('submit-button').addEventListener("click",   // aggiunto evento di click sul bottone che starta il ciclo
    function () {
        for (let i = 0; i < emailRegistrate.length; i++) {
            if (emailRegistrate[i] === userMail.value) {   // controllo se la mail è presente in lista
                alert("La tua email è valida, puoi accedere al sito!")   // stampo messaggio di esito positivo
                break
            } else {
                alert("Ci dispiace, la tua email non è registrata!")   // stampo messaggio di esito negativo
                break
            }
        }
    }
)


// GIOCO DEI DADI

// generazione numero random 1-6 per l'utente
// generazione numero random 1-6 per il pc
// controllo i valori per decidere il più alto
// stampo messaggio di esito (vittoria, sconfitta o pareggio)