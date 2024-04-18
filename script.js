  // Display and hide the rule 
  var pcChoice = '';
  const nextButton = document.getElementById("next");     
  const ruleBoard = document.getElementById("Rules");
  var button = document.getElementById('playagain'); 

  
  function displayRules(){
      // let x = document.getElementById("Rules");
      if(ruleBoard.style.visibility === 'visible'){
         ruleBoard.style.visibility = 'hidden';
      }
      else{
          ruleBoard.style.visibility = 'visible';
      }    
     }
  
  function minimize(){ruleBoard.style.visibility = 'hidden';      }
  // randamize a number from 1 to 3
  function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
      }
      



  function functionToExecute(id) {

      const playerChoice = id;
      console.log(pcChoice);
      console.log(playerChoice);
      let winner = document.getElementById("result_text");
      const resultText = document.getElementById("against");
      document.querySelector(".triangle-section").classList.toggle("hidden");
      document.querySelector(".results").classList.toggle("hidden");
      displayResults(playerChoice,pcChoice);
      if (playerChoice === pcChoice) {
           console.log("Draw");
           winner.innerText="TIE UP";

           return "It's a tie!";
      }
      else if ((playerChoice === "rock" && pcChoice === "scissors") ||
               (playerChoice === "paper" && pcChoice === "rock") ||
               (playerChoice === "scissors" && pcChoice === "paper")) {
          console.log("you win !!");
          winner.innerText="YOU WIN";
          return "You win!";
      } 
      else {
          console.log("PC win !!!");
          winner.innerText="YOU LOST";
          return "Computer wins!";

      }   

  }
  //function player card
  function playerbanner(playerChoice){
      const playerCard = document.getElementById('player');
      const borderColor = document.getElementById("playerBanner");
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
      const cardBorder =document.getElementById("computerBanner");
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
     
      nextButton.style.visibility=("visible"); 
      // const change = document.getElementById('pop-up');

  }
  
  button.addEventListener('click', () => { 
    setTimeout(()=>{
      document.querySelector(".triangle-section").classList.toggle("hidden");
      document.querySelector(".results").classList.toggle("hidden");
      nextButton.style.visibility=("hidden");

    },500)
  });
      

