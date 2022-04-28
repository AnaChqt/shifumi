/* EXERCICE 1

Consigne : 
Créer une liste avec trois éléments (Pierre, Feuille, Ciseaux). 
Ajouter un bouton « Shifumi ! ». 
Lorsque l'on clique sur « Shifumi ! », choisir un élément au hasard (Pierre, Feuille ou Ciseaux). 
Le comparer à l'élément choisi par le joueur pour voir qui a gagné entre l'humain et la machine.

Bonus : Ajouter un compteur de victoires et de défaites et 
afficher le pourcentage de victoire contre l'ordinateur.*/

//dataset

let player;
let ia;
let playerChoice = document.querySelectorAll('.player')
let iaChoice = document.querySelectorAll('.ia')
let btn = document.querySelectorAll('button');
let resultat = ''
let countWinning = 0;

for (let i = 0; i < btn.length; i++) {
    playerChoice[i].addEventListener('click', () => {
        player = btn[i].innerHTML;
        ia = Math.floor(Math.random() * 3);
        let iaPicture = btn[ia].innerHTML;
        if (i == ia) {
            resultat = 'Egalité !';
        }
        else if
                ((i == 0 && ia == 1) ||
                (i == 1 && ia == 2) ||
                (i == 2 && ia == 0)) {
                resultat = 'Défaite';
        }
        else {
            resultat = 'Victoire !';
            countWinning++
            localStorage.setItem('countWinning', countWinning);
        }
        document.getElementById('result').innerHTML = `Vous avez choisi : ${player} et l'ordinateur a choisi : ${iaPicture} <br> ${resultat}`
    })
}