

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    choice=["paper","rock","scissors"];
    randomNumber=getRandomInt(3);
    return choice[randomNumber];
}

function playRound(userSelection , computerSelection, userScore, compScore){
    
    if(userSelection === computerSelection){
        console.log("tie");
    }
    else if(userSelection==="paper"){
        if(computerSelection==="rock"){
            console.log("You wins");
            userScore++;
        }
        else if(computerSelection==="scissors"){
            console.log("computer wins");
            compScore++;
        }
    }
    else if(userSelection==="rock"){
        if(computerSelection==="paper"){
            console.log("computer wins");
            compScore++;
        }
        else if(computerSelection==="scissors"){
            console.log("You wins");
            userScore++;
        }
    }
    else if(userSelection==="scissors"){
        if(computerSelection==="paper"){
            console.log("You wins");
            userScore++;
        }
        else if(computerSelection==="rock"){
            console.log("computer wins");
            compScore++;
        }
    }
    console.log("Scores: user:"+userScore+"  || computer:"+compScore);
    return [userScore, compScore];
}

function game(){ 
   
    let userScore=0;
    let compScore=0;
    for(let i=0; i<5;i++){
        number= String(prompt("enter a choice"));
        comChoice=getComputerChoice();
        console.log("round: "+ parseInt(i+1) );
        console.log("computer choice :"+comChoice);
        console.log("Your choice : "+number);
        [userScore, compScore] = playRound(number,comChoice,userScore,compScore);
        console.log("*********************");
    }
    console.log("*********************");
    console.log("final Score :  user:"+userScore+"  computer:"+compScore+"." );
    if(userScore>compScore){
    console.log("winner is user ");
    }else if(userScore<compScore){
        console.log("winner is computer");
    }else{
        console.log("tie!");
    }
}

game();

