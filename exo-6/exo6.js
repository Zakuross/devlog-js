// Cours 8 de Codecademy
console.log("exo-6");

/*var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length)

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1
console.log(joeInfo.bathrooms)

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true
console.log(joeInfo.garage)*/


var team = {
    players: [{
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11,
    }],
    games: [{
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27,
    }],
    addPlayer(firstName, lastName, age) {
        this.players.push({
            firstName,
            lastName,
            age,
        })

    },
    addGames(opponent, teamPoints, opponentPoints) {
        this.games.push({
            opponent,
            teamPoints,
            opponentPoints,
        })

    }
    
};
var max = 0
team.addPlayer("Mathieu", "Sukuna", 1200)
team.addPlayer("Hicham", "SS2", 15)
team.addPlayer("Bastien", "Bouftou", 25)
team.addPlayer("Ugh", "Jackman", 58)
team.addPlayer("Lucas", "Hernandez", 35)
team.addPlayer("Kyks", "Mbwebe", 6)
team.addGames(" Equipe Zeus", 25, 12)
team.addGames("Gojo", 48, 100)
team.addGames("Conseil 4", 60, 120)
team.addGames("Cell jr. Team", 99, 88)
//team.addPlayer(prompt("Ajoutez un prénom : "), prompt("Ajoutez un nom: "), prompt("Ajoutez un age: "))
//team.addGames(prompt("Ajoutez un opponent : "), prompt("Ajoutez un nombre de points: "), prompt("Ajoutez un nombre de points: "))
let total = 0
let totalA = 0
function old() {
    let max
    for (let i = 0; i < team.players.length; i++) {
        if(!max){
            max = team.players[i]
        }
        if (max.age<team.players[i].age) {
            max = team.players[i]
        }
    }
    return max
}

team.games.forEach(mat =>{
    total+= mat.teamPoints
});
team.games.forEach(mat =>{
    totalA+= mat.teamPoints
});
let moy = totalA/team.games.length
console.log(team.players)
console.log(team.games)
console.log(total, moy, "Le joueur le plus agé est : ", old())

