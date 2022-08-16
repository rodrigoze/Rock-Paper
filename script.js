let computer;
let playerSelection;
let co ;
let po;
const score = document.getElementById('score-p');
const result = document.getElementById('result');


//Event Listener  /Rock
const rock = document.getElementById('rock');
rock.addEventListener('click', function() {
    computer = getComputerChoice().toLowerCase();
    playerSelection = 'rock'
    console.log(playerSelection)
    console.log(computer)
    result.textContent = 'as';
    playRound(playerSelection, computer);
    update();
    })

//Event Listener  /paper
    const paper = document.getElementById('paper');
    paper.addEventListener('click', function() {
        computer = getComputerChoice().toLowerCase();
        playerSelection = 'paper'
        console.log(playerSelection)
        console.log(computer)
        playRound(playerSelection, computer);
        update();
        })
    
//Event Listener  /scissors
        const scissors = document.getElementById('scissors');
        scissors.addEventListener('click', function() {
            computer = getComputerChoice().toLowerCase();
            playerSelection = 'scissors'
            console.log(playerSelection)
            console.log(computer)
            playRound(playerSelection, computer);
            update();
            })

function update(po,co){
    score.textContent = `| ${po} : ${co} |`;
}


function getComputerChoice(){
    let randomNum =  Math.floor(Math.random()*3) + 1;
    let result;
    if(randomNum === 1)
    {
        result ='Paper';
    }
    else if (randomNum === 2)
    {
        result = 'Rock';
    }
    else 
    {
        result = 'Scissors';
    }
    return result;
 

}

function playRound (player,computer) {

    if (player === 'rock' && computer === 'rock')
    {
        result.textContent = "tie";
        checkWinner();
    }
    else if(player === 'rock' && computer === 'scissors'){
        result.innerText = "rock won scissors!";
  po++;
    }
    else if(player === 'rock' && computer === 'paper'){
        result.innerText = "rock won paper!";
        co++;
        checkWinner(); 
    }
    else if(player === 'scissors')
    {
        if(computer === 'scissors')
        {
            result.innerText = "TIE!";
            checkWinner(); 
        }
        else if( computer === 'rock')
        {
            result.innerText = "computer won! scissors losing to rock";
            co++;
            checkWinner(); 
        }
        else {
            result.innerText = "you won! scissors against rock";
            po++;
            checkWinner(); 
        }
    }
    else if(player === 'paper')
    {
        if(computer ==='paper')
        {
            result.innerText = "TIE!";
            checkWinner(); 
        }
        else if(computer ==='rock')
        {
            result.innerText = "you win!paper against rock";
            po++;
            checkWinner(); 
        }
        else {
            result.innerText = "you lost!paper against scissors";
            co++;
            checkWinner(); 
        }
    }
}
function update(){
    score.innerText = `SCORE: ${po} / ${co}`;
}

function checkWinner(){
    if (po < 5 && co < 5){
    }else{
        declareWinner();
        po = 0;
        co = 0;
    }  
}
function declareWinner(){
    if (po===5){
        result.innerText = "Yay! You won the game!!!\nLet's play another one!";
    } else if (co===5){
        result.innerText = "Sorry, it seems that you lost the game...\nLet's play another one!";
        
    }
}