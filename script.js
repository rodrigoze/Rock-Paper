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

let playRound = (player,computer) => {
    player = prompt('rock,paper or scissors').toLowerCase();
    computer = getComputerChoice().toLowerCase();
    let po = 0;
    let co = 0;
    if (player === 'rock' && computer === 'rock')
    {
        console.log('its a tie. rock and rock')
        return 'tie';
    }
    else if(player === 'rock' && computer === 'scissors'){
         console.log('win for you. rock against scissors');
  return 'win';
    }
    else if(player === 'rock' && computer === 'paper'){
        console.log('you loss. rock against scissors')
        return 'loss';
    }
    else if(player === 'scissors')
    {
        if(computer === 'scissors')
        {
            console.log('tie. scissors and scissors')
            return 'tie' ;
        }
        else if( computer === 'rock')
        {
            console.log('you lose. scissors agaisnt rock')
            return 'loss';
        }
        else {
            console.log('you win. scissors agaisnt rock')
            return 'win';
        }
    }
    else if(player === 'paper')
    {
        if(computer ==='paper')
        {
            console.log('tie. paper against papar')
            return 'tie';
        }
        else if(computer ==='rock')
        {
            console.log('you win. paper against rock')
            return 'win';
        }
        else {
            console.log('you lose. paper against scissors');
            return 'loss';
        }
    }
}

function game(){
    let co=0;
    let po=0;
    for (let i=0;i<=5;i++)
    {
    let score = playRound();
    if(score === 'tie')
    {
        po++;
        co++;
    }

else if(score === 'win')
{
po++;
}   
else if (score ==='loss')
{
    co++;
}
    }
    console.log('yourscore is:' + po + 'computer score is: ' + co);
}

game();