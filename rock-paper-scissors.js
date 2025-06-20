

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



function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase()
    let win = 0

    if (humanChoice == computerChoice){
        console.log("It's a draw, you both picked "+ capitalize(humanChoice))
        return ("It's a draw, you both picked "+ capitalize(humanChoice))
    }
    else if ((humanChoice == "rock" && computerChoice == "paper") 
        || (humanChoice == "paper" && computerChoice == "scissors") 
        || (humanChoice == "scissors" && computerChoice == "rock") ){
            console.log("You lose, loser, " + capitalize(computerChoice) + " beats " + capitalize(humanChoice))
            computerScore+=1;
            return "You lose, loser, " + capitalize(computerChoice) + " beats " + capitalize(humanChoice)

    }
    else {
        console.log(`You win, ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`)
        humanScore+=1;
        return `You win, ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`
    }

}

buttons = document.querySelectorAll("button")


function button_callback(btn){
    const result = playRound(btn.textContent, getComputerChoice())

    result_statement = document.createElement('p');
    result_statement.textContent = result 
    result_statement.setAttribute("id","statement")
    const score = "\n Score: " + humanScore + ' to '+ computerScore;
    const score_statement = document.createElement('p')
    score_statement.setAttribute("id","statement")
    score_statement.textContent=score;

    if (humanScore>=5){
        score_statement.textContent = "YOU WIN THE GAME!"
        score_statement.style.fontWeight="bold"
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore>=5){
        score_statement.textContent = "YOU LOSE THE GAME!"
        score_statement.style.fontWeight="bold"
        humanScore = 0;
        computerScore = 0;
    }

    document.querySelector("body").appendChild(result_statement);
    document.querySelector("body").appendChild(score_statement);
}


buttons.forEach( button =>  button.addEventListener("click", e => button_callback(button)) );

