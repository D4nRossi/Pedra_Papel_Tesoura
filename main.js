const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const paper = 'papel';
const rock = 'pedra';
const scissors = 'tesoura';
let userChoice;
let computerChoice;

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);
    if(randomNumber === 1){
        computerChoice = paper;
    }else if(randomNumber === 2){
        computerChoice = rock;
    }else if(randomNumber === 3){
        computerChoice = scissors;
    }
    computerChoiceDisplay.innerHTML = ` ${computerChoice}`;
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = ` ${userChoice}`;
    generateComputerChoice();
    getResult();
}));

function getResult(){
    if(computerChoice === userChoice){
        result = `empate`
    }
    if(computerChoice === 'pedra' && userChoice === 'papel'){
        result = `vitoria`
    }
    if(computerChoice === 'pedra' && userChoice === 'tesoura'){
        result = `perdeu`
    }
    if(computerChoice === 'papel' && userChoice === 'tesoura'){
        result = `vitoria`
    }
    if(computerChoice === 'papel' && userChoice === 'pedra'){
        result = `perdeu`
    }
    if(computerChoice === 'tesoura' && userChoice === 'pedra'){
        result = `vitoria`
    }
    if(computerChoice === 'tesoura' && userChoice === 'papel'){
        result = `perdeu`
    }

    resultDisplay.innerHTML = ` ${result}`;
}