let uScore=0,cScore=0;

// generate computer choice
const genComputerChoice=()=>{
    // rock paper scissor
    const options=["rock","paper","scissor"];
    // generate random number Math..random() generate random value between 0 to 1
    const idx=Math.floor(Math.random()*3); 
    return options[idx];
}
// draw case
const drawGame=()=>{
    // console.log("Game was drawn");
    msg.innerText="GAME DRAW";
    msg.style.backgroundColor="grey";
    msg.style.color="white";
}


// to display result on screen
   // 1. access msg
const msg=document.querySelector("#msg");
   // 2. access user score
const userScore=document.querySelector("#your-score");
   // 3. access computer score
const computerScore=document.querySelector("#computer-score");

// show winner
const showWinner=(userWin)=>{
    if(userWin){
        // console.log("You Win !");
        // change when user win
        uScore++;
        userScore.innerText=uScore;
        msg.innerText="YOU WIN!";
        msg.style.backgroundColor="Green";
        msg.style.color="white";
    }
    else{

        // console.log("You Loss");
        cScore++;
        computerScore.innerText=cScore;
        msg.innerText="YOU LOSE";
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
};




// playing game
const playGame=(inputId)=>{
    // console.log("User Choice =",inputId);
    // generate computer choice
    const compChoice=genComputerChoice();
    // console.log("Computer Choice =",compChoice);


    // case result
    if(inputId==compChoice){
        // draw case
        drawGame();
    }
    else {
        // user winner
        let userWin=true;
        if(inputId==="rock"){
            userWin= compChoice==="paper" ? false : true;
        }
        else if(inputId==="paper"){
            userWin= compChoice==="scissor" ? false : true;
        }
        else{
            userWin= compChoice==="rock" ? false : true; 
        }
        showWinner(userWin);
    }
   
};




const input=document.querySelectorAll(".choice img");
input.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const inputId=choice.getAttribute("id");
        playGame(inputId);
    });
});
