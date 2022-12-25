console.log("hello world");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    choice=["paper","rock","scissors"];
    //randomNumber = Math.random();

    randomNumber=getRandomInt(3);
    console.log(randomNumber);
    console.log(choice[randomNumber]);
    
}
getComputerChoice();