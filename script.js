   var pcChoice = '';
  const nextButton = document.getElementById("next"); 
  const ruleButton = document.getElementById("pop-up");    
  const ruleBoard = document.getElementById("Rules");
  var button = document.getElementById('playagain'); 
  const playerScore = document.getElementById('yourScore');
  const computerScore = document.getElementById('computerScore');
  const resetGame =document.getElementById('reset');
  const borderColor = document.getElementById("playerBanner");
  const cardBorder =document.getElementById("computerBanner");

  var p = 0;
  var pc =0;

  // display and hides the rules 
  function displayRules(){
      if(ruleBoard.style.visibility === 'visible'){
         ruleBoard.style.visibility = 'hidden';
      }
      else{
          ruleBoard.style.visibility = 'visible';
      }    
     }
    
  // mininizes the rule board    
  function minimize(){ruleBoard.style.visibility = 'hidden';      }
  
  // randamize a number from 1 to 3
  function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
      }

  // function which executes after the clicking the rock paper scissors button      
  function functionToExecute(id) {

      const playerChoice = id;
      let winner = document.getElementById("result_text");
      const againstText = document.querySelector(".against");
      document.querySelector(".triangle-section").classList.toggle("hidden");
      document.querySelector(".results").classList.toggle("hidden");
      displayResults(playerChoice,pcChoice);
      if (playerChoice === pcChoice) {
           
           winner.innerText="TIE UP";
           againstText.innerText="  ";
           button.innerText='REPLAY';
         
      }
      else if ((playerChoice === "rock" && pcChoice === "scissors") ||
               (playerChoice === "paper" && pcChoice === "rock") ||
               (playerChoice === "scissors" && pcChoice === "paper")) {
                
          addNextbutton();
          winner.innerText="YOU WIN";
          againstText.innerText="AGAINST PC";
          button.innerText= "PLAY AGAIN";
          p++;
          changeScore();
          borderColor.style.boxShadow="0 0 0 35px rgba(46, 154, 37, 0.5), 0 0 0 60px rgba(46, 154, 37, 0.4), 0 0 0 80px rgba(46, 154, 37, 0.2)";
    
      } 
      else {
          console.log("PC win !!!");
          winner.innerText="YOU LOST";
          againstText.innerText="AGAINST PC";
          button.innerText= "PLAY AGAIN";
          pc++;
          changeScore();
          cardBorder.style.boxShadow="0 0 0 35px rgba(46, 154, 37, 0.5), 0 0 0 60px rgba(46, 154, 37, 0.4), 0 0 0 80px rgba(46, 154, 37, 0.2)";
          

      }   

  }
  function changeScore(){
    playerScore.innerText=p;
    computerScore.innerText=pc;
  }
  function addNextbutton(){
    ruleButton.style.right="12rem"; 
    nextButton.style.visibility=("visible");
    nextButton.style.right="3rem";
   
  }
  //function player card
  function playerbanner(playerChoice){
      const playerCard = document.getElementById('player');
     
      if(playerChoice == 'rock'){
          playerCard.src="images/icons8-fist-67 1.svg";
          borderColor.style.borderColor ="rgba(0, 116, 182, 1)";

      }
      else if(playerChoice == 'paper'){
          playerCard.src="images/icons8-hand-64 1.svg";
          borderColor.style.borderColor ="rgba(255, 169, 67, 1)";
      }
      else if(playerChoice == 'scissors'){
          playerCard.src= "images/17911 1.svg";
          borderColor.style.borderColor ="rgba(189, 0, 255, 1)";
          
      }
  }
  //computer's turn 
  
  function computerTurn(){
      var y = getRandomInt(3); 
      const pcCard = document.getElementById('computer');
          switch (y) {
          case 0:
           pcChoice = 'rock';
           pcCard.src="images/icons8-fist-67 1.svg";
           cardBorder.style.borderColor ="rgba(0, 116, 182, 1)";
           break;
          case 1:
           pcChoice = 'paper';
           pcCard.src="images/icons8-hand-64 1.svg";
           cardBorder.style.borderColor ="rgba(255, 169, 67, 1)";
           break;
          case 2:
           pcChoice = 'scissors' ;
           pcCard. src="images/17911 1.svg";
           cardBorder.style.borderColor ="rgba(189, 0, 255, 1)";
           break;
          }

  }
  function displayResults(playerChoice,pcChoice) {
      playerbanner(playerChoice);
      computerTurn();
     
  }
  
  button.addEventListener('click', () => { 
    setTimeout(()=>{
      document.querySelector(".triangle-section").classList.toggle("hidden");
      document.querySelector(".results").classList.toggle("hidden");
      nextButton.style.visibility=("hidden");
      ruleButton.style.right="3rem";
      cardBorder.style.boxShadow="none";
      borderColor.style.boxShadow="none";

    },500)
  });

  nextButton.addEventListener('click', () => {
    document.querySelector(".winner_result").classList.toggle("hidden");
    document.querySelector(".results").classList.toggle("hidden");
    document.querySelector("header").classList.toggle("hidden");
    nextButton.style.visibility=("hidden");
    ruleButton.style.right="3rem";
    const winner = document.getElementById('winner');
    const heading = document.getElementById('heading');
          if(p == pc){
            heading.innerText="DRAW!!";
            winner.innerText="";
          }
          else if(pc>p){
            heading.innerText=" ";
            winner.innerText="COMPUTER WON THE GAME";
          }
          else{
            heading.innerText="HURRAY!! ";
            winner.innerText="YOU WON THE GAME";
          }
  });
 
  resetGame.addEventListener('click',()=>{
    document.querySelector(".winner_result").classList.toggle("hidden");
    document.querySelector(".triangle-section").classList.toggle("hidden");
    document.querySelector("header").classList.toggle("hidden");
    p=0
    pc=0
    playerScore.innerText=p;
    computerScore.innerText=pc;
    cardBorder.style.boxShadow="none";
    borderColor.style.boxShadow="none";
 });
  
      

