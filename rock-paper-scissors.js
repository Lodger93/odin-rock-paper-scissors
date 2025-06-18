

function getComputerChoice(){
    let guess = 3*Math.random()

    if (guess < 1){
        choice = "rock";
    }
    else if (guess > 2){
        choice = "paper";
    }
    else{
        choice = "scissors";
    }

    return choice;
}

function getHumanChoice(){
    let guess = prompt("Choose: 1) Rock 2) Paper 3) Scissors")

    if (guess == "1" || guess=="Rock"){
        choice = "Rock";
    }
    else if (guess == "2" || guess=="Paper"){
        choice = "Paper";
    }
    else if (guess == "3" || guess=="Scissors"){
        choice = "Scissors";
    }
    else{
        console.error("Pick better")
        return
    }

    return choice.toLowerCase(); 
}


let humanScore = 0
let computerScore = 0

function capitalize(word){
    output = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    return output
}





function playGame(){

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice){

    let win = 0

    if (humanChoice == computerChoice){
        console.log("It's a draw, you both picked "+ capitalize(humanChoice))
        return
    }
    else if ((humanChoice == "rock" && computerChoice == "paper") 
        || (humanChoice == "paper" && computerChoice == "scissors") 
        || (humanChoice == "scissors" && computerChoice == "rock") ){
            console.log("You lose, loser, " + capitalize(computerChoice) + " beats " + capitalize(humanChoice))
            computerScore+=1;
            return

    }
    else {
        console.log(`You win, ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`)
        humanScore+=1;
        return
    }

    }

    for (i=0; i<5; i++){
        playRound(getHumanChoice(),getComputerChoice())
    }

    console.log(`Score = ${humanScore} to ${computerScore}`)
}


playGame()