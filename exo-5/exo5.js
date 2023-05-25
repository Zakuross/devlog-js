// you can write js here

/*console.log('exo-5');

let input = "jehzfgzjefldsfza"

var vowels = ["a", "e", "i", "o", "u", "y"]

let resultArray = []


for (let i = 0; i < input.length; i++) {
    console.log(input[i]) 
}

for (const el of str.toLowerCase()) {
    if(el == 'a' || el == 'e' || el == 'u' || el == 'i' || el == 'o'){
        console.log("voyelle")
        i++
    }
    
}


/*function compterNbVoyelles(mot) {
    let nbVoyelles = 0;
    let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let lettre of mot) {
        if (voyelles.includes(lettre.toLowerCase())) {
            nbVoyelles ++;
        }
    }
    return nbVoyelles;
}

console.log("Il y a : ", compterNbVoyelles(vowels, input) + "de voyelles")*/


var input = prompt('mot : ')
//var vowels = ["a", "e", "i", "o", "u", "y"]

/*initialisation des Variable*/
var nb_voyelles = 0
let resultArray = []
for (let i = 0; i < input.length; i++) {
    console.log(input[i])
    for (let j= 0; j <= input.length; j++){
        if('bcdfghjklmnpqrstvwxz'.search(input[i][j]) < 0){
            resultArray.push(input[i][j])
            nb_voyelles++
        }

    }
}
//fin du FOR//

/*affichage*/
console.log("nombre de voyelles : " + nb_voyelles)
console.log(resultArray.join("").toUpperCase())
