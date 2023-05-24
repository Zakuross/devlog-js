// you can write js here
/*console.log('exo-3');

var userChoice = prompt("rock, paper or scissors?")
var computerChoice = Math.random()
if (computerChoice < 0.33)
{
    computerChoice = "rock"
}
else if(computerChoice <= 0.33)
{
    computerChoice = "paper"
}
else
{
    computerChoice = "scissors"
}
 
console.log("Joueur 2 : " + computerChoice);
 
function Game(choice1,choice2) {

    if(choice1 === choice2)
    {
        return "The result is a tie!"
    }
    else
    {
        if(choice1==="rock")
        {
            if(choice2==="scissors")
            {
                return "Rock wins"
            }
            else
            {
                return "Paper wins"
            }
        }
        else
        {
            if(choice1==="paper")
            {
                if (choice2==="rock")
                {
                    return "paper wins"
                }
                else
                {
                    return "Scissors win"
                }
            }
            else if(choice1==="scissors")
            {
                if(choice2==="paper")
                {
                    return "scissors wins"
                }
                else
                {
                    return "rock wins"
                }
            }  
        }
    }
}
console.log(Game(computerChoice, userChoice))
//compare(userChoice,computerChoice)*/

// you can write js here
console.log('exo-3')
var playerInput = prompt("Your choice ( rock, paper, scissors) ?")
 

function getPlayerChoice(playerInput){
    playerInput = playerInput.toLowerCase()
    if (playerInput=="rock" || playerInput == "paper" || playerInput =="scissors" || playerInput=="bomb" || playerInput=="puit" || playerInput=="Mathieu"){
        //console.log(playerInput)
        return playerInput
    }else{
        console.log('Tu sais pas écrire recommence')
        throw new Error("Tu sais pas écrire")
    }
}
//getPlayerChoice(playerInput)
function getComputerChoice(){
    let Random = Math.floor(Math.random()*3)
    
    if(Random==0){
        console.log("rock")
        return "rock"
    }
    if(Random==1){
        console.log("paper")
        return "paper"
    }
    if(Random==2){
        console.log("scissors")
        return "scissors"
    }
}

function findWinner(playerChoice,computerChoice){

    if(playerChoice == computerChoice){
        //console.log("Tied")
        return "Tied"
    }
    if(playerChoice == "rock"){
        if(computerChoice == "scissors"){
            return "Won"
        }else {
            return "Lost"
        }
    }
    if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            return "Won"
        }else{
            return "Lost"
        }
    }
    if(playerChoice == "scissors"){
        if(computerChoice == "paper"){
            return "Won"
        }else{
            return "Lost"
        }
    }
    if (playerChoice == "bomb"){
        return "Génie supreme tu as gagné"
    }
    if (playerChoice == "puit"){
        if(computerChoice == "paper") {
            return "Lost"
        } else {
            return "Won"
        }
    }
    if(playerChoice == "mathieu"){
        return "cqui ce mec"
    }
}
//console.log(findWinner(getPlayerChoice(playerInput), getComputerChoice()))
function playGame(){
    let uChoice = getPlayerChoice(playerInput)
    let computerChoice= getComputerChoice()
    //console.log("choix humain:",uChoice,"choix ordi",computerChoice)
    console.log(findWinner(uChoice,computerChoice))
}
playGame()