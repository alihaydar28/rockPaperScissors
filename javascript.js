

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    choice=["paper","rock","scissors"];
    randomNumber=getRandomInt(3);
    return choice[randomNumber];
}

function playRound(userSelection , computerSelection){
    let nb=0;
    if(userSelection === computerSelection){
        console.log("tie");
        description.textContent=" it's a TIE !";
    }
    else if(userSelection==="paper"){
        if(computerSelection==="rock"){
            console.log("You wins");
            userScore++;
            nb=userScoreUI.textContent;
            nb=parseInt(nb);
            nb=nb+1;
            userScoreUI.textContent=nb;
            description.textContent="paper beats rock, user wins!";
        }
        else if(computerSelection==="scissors"){
            console.log("computer wins");
            compScore++;
            nb=computerScoreUI.textContent;
            nb=parseInt(nb);
            nb=nb+1;
            computerScoreUI.textContent=nb;
            description.textContent="scissors beats paper, computer wins!";
        }
    }
    else if(userSelection==="rock"){
        if(computerSelection==="paper"){
            console.log("computer wins");
            compScore++;
            nb=computerScoreUI.textContent;
            nb=parseInt(nb);
            nb=nb+1;
            computerScoreUI.textContent=nb;
            description.textContent="paper beats rock, computer wins!";
        }
        else if(computerSelection==="scissors"){
            console.log("You wins");
            userScore++;
            nb=userScoreUI.textContent;
            nb=parseInt(nb);
            nb=nb+1;
            userScoreUI.textContent=nb;
            description.textContent="rock beats scissors, user wins!";
        }
    }
    else if(userSelection==="scissors"){
        if(computerSelection==="paper"){
            console.log("You wins");
            userScore++;
            nb=userScoreUI.textContent;
            nb=parseInt(nb);
            nb=nb+1;
            userScoreUI.textContent=nb;
            description.textContent="scissors beats paper, user wins!";
        }
        else if(computerSelection==="rock"){
            console.log("computer wins");
            compScore++;
            nb=computerScoreUI.textContent;
            nb=parseInt(nb);
            nb=nb+1;
            computerScoreUI.textContent=nb;
            description.textContent="rock beats scissors, computer wins!";
        }
    }
    console.log("Scores: user:"+userScore+"  || computer:"+compScore);
    return [userScore, compScore];
}




    let userChoice1="";
    let userScore=0;
    let compScore=0;
    let counter=0;
    const btnRock = document.querySelector("#rockbtn");
    const btnSci = document.querySelector(".sci");
    const btnPaper = document.getElementsByClassName("pap")[0];
    const userScoreUI=document.getElementById("playerScore");
    const computerScoreUI=document.getElementById("computerScore");
    const roundNb=document.getElementById("rnd");
    const description=document.getElementById("desc");

    btnRock.addEventListener('click', () => {
        if(counter !=5){
        comChoice=getComputerChoice();
        [userScore, compScore] = playRound("rock",comChoice);
        counter++;
        roundNb.textContent="Round: "+counter;
        }else{
            alert ("game over");
        }
    });

    
    btnSci.addEventListener('click', () => {
        if(counter !=5){
        comChoice=getComputerChoice();
        [userScore, compScore] = playRound("scissors",comChoice);
        counter++;
        roundNb.textContent="Round: "+counter;
        }else{
            alert ("game over");
        }
    });

   
    btnPaper.addEventListener('click', () => {
        if(counter !=5){
        comChoice=getComputerChoice();     
        [userScore, compScore] = playRound("paper",comChoice);
        counter++;
        roundNb.textContent="Round: "+counter;
        }else{
            alert ("game over");
        }
    });








