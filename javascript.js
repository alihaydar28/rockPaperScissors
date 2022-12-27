//console.log("hello world");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    choice=["paper","rock","scissors"];
    //randomNumber = Math.random();
    //console.log(typeof choice +" "+ typeof choice[0]);
    randomNumber=getRandomInt(3);
    //console.log(randomNumber);
    //console.log(choice[randomNumber]);
    return choice[randomNumber];
}

function game(userSelection , computerSelection){

    if(userSelection === computerSelection){
        console.log("tie");
    }
    else if(userSelection==="paper"){
        if(computerSelection==="rock"){
            console.log("user wins");
        }
        else if(computerSelection==="scissors"){
            console.log("computer wins wins");
        }
    }
    else if(userSelection==="rock"){
        if(computerSelection==="paper"){
            console.log("computer wins");
        }
        else if(computerSelection==="scissors"){
            console.log("user wins");
        }
    }
    else if(userSelection==="scissors"){
        if(computerSelection==="paper"){
            console.log("user wins");
        }
        else if(computerSelection==="rock"){
            console.log("computer wins");
        }
    }
}



comChoice=getComputerChoice();
console.log("computer choice :"+comChoice);
console.log("user choice : paper");
game("paper",comChoice);
