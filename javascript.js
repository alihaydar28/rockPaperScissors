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

const imagePlay = document.getElementById('imagePlayer');
const imageComp = document.getElementById('imageComputer');

const container = document.querySelector('#btnToAdd');
const content = document.createElement('button');
content.classList.add('restartBtn');
content.textContent = 'Restart';



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
        imagePlay.src = 'images/'+userSelection+'.png';
        imageComp.src = 'images/'+userSelection+'.png';

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
            imagePlay.src = 'images/paper.png';
            imageComp.src = 'images/rock.png';
        }
        else if(computerSelection==="scissors"){
            console.log("computer wins");
            compScore++;
            nb=computerScoreUI.textContent;
            nb=parseInt(nb);
            nb=nb+1;
            computerScoreUI.textContent=nb;
            description.textContent="scissors beats paper, computer wins!";
            imagePlay.src = 'images/paper.png';
            imageComp.src = 'images/scissors.png';
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
            imagePlay.src = 'images/rock.png';
            imageComp.src = 'images/paper.png';
        }
        else if(computerSelection==="scissors"){
            console.log("You wins");
            userScore++;
            nb=userScoreUI.textContent;
            nb=parseInt(nb);
            nb=nb+1;
            userScoreUI.textContent=nb;
            description.textContent="rock beats scissors, user wins!";
            imagePlay.src = 'images/rock.png';
            imageComp.src = 'images/scissors.png';
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
            imagePlay.src = 'images/scissors.png';
            imageComp.src = 'images/paper.png';
        }
        else if(computerSelection==="rock"){
            console.log("computer wins");
            compScore++;
            nb=computerScoreUI.textContent;
            nb=parseInt(nb);
            nb=nb+1;
            computerScoreUI.textContent=nb;
            description.textContent="rock beats scissors, computer wins!";
            imagePlay.src = 'images/scissors.png';
            imageComp.src = 'images/rock.png';
        }
    }
    console.log("Scores: user:"+userScore+"  || computer:"+compScore);
    return [userScore, compScore];
}

    

btnRock.addEventListener('click', () => {
    if(counter !=5){
    comChoice=getComputerChoice();
    [userScore, compScore] = playRound("rock",comChoice);
    counter++;
    roundNb.textContent="Round: "+counter;
    }else{
        container.appendChild(content);
        if(userScore>compScore){
        alert ("user wins");
        }else if(userScore<compScore){
        alert ("comp wins");
        }else{
        alert("tie!");
        }
    }
});


btnSci.addEventListener('click', () => {
    if(counter !=5){
    comChoice=getComputerChoice();
    [userScore, compScore] = playRound("scissors",comChoice);
    counter++;
    roundNb.textContent="Round: "+counter;
    }else{
        container.appendChild(content);
        if(userScore>compScore){
        alert ("user wins");
        }else if(userScore<compScore){
        alert ("comp wins");
        }else{
        alert("tie!");
        }
    }
});


btnPaper.addEventListener('click', () => {
    if(counter !=5){
    comChoice=getComputerChoice();     
    [userScore, compScore] = playRound("paper",comChoice);
    counter++;
    roundNb.textContent="Round: "+counter;
    }else{
        container.appendChild(content);
        if(userScore>compScore){
        alert ("user wins");
        }else if(userScore<compScore){
        alert ("comp wins");
        }else{
        alert("tie!");
        }
    }
});


function restart(){

    userScoreUI.textContent=0;
    computerScoreUI.textContent=0;
    imagePlay.src = 'images/question.png';
    imageComp.src = 'images/question.png';
    roundNb.textContent="Round: "+0;
    description.textContent="Press any button to start Game!";
    
}





