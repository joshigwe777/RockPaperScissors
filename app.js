const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const sissors = document.getElementById("sissors");
const playerResults = document.getElementById("playerResults");
const computerResults = document.getElementById("computerResults");
var computerScore = 0;
var playerScore = 0;


//get computer selection 
function computerSelect() {
    var computerSelection = Math.floor(Math.random() * 3);
    console.log(computerSelection);
    if (computerSelection === 0) {
        let img = document.createElement("img");
        img.src = "images/rock.png";
        computerResults.appendChild(img);
        return 'rock';
        
    } else if (computerSelection === 1) {
        let img = document.createElement("img");
        img.src = "images/paper.png";
        computerResults.appendChild(img);
        return 'paper';
    } else if (computerSelection === 2) {
        let img = document.createElement("img");
        img.src = "images/scissors.png";
        computerResults.appendChild(img);
        return "scissors";
    }
    
}

// function to determine the score



//event listener on rock
rock.addEventListener('click', (e) => {
    let result = computerSelect();
    let img = document.createElement("img");
    img.src = "images/rock.png";
    playerResults.appendChild(img);
    if (result === 'paper') {
        computerScore+=1;
    } else if(result === 'scissors') {
        playerScore+=1;
    }
    var playerp = document.createElement("p");
    var computerp = document.createElement("p");
    playerp.textContent = playerScore;
    computerp.textContent = computerScore;
    playerResults.appendChild(playerp);
    computerResults.appendChild(computerp);



});

//event listener on paper
paper.addEventListener('click', (e) => {
    let result = computerSelect();
    let img = document.createElement("img");
    img.src = "images/paper.png";
    playerResults.appendChild(img);
    if (result === 'scissors') {
        computerScore+=1;
    } else if(result === 'rock') {
        playerScore+=1;
    }
    let playerp = document.createElement("p");
    let computerp = document.createElement("p");
    playerp.textContent = playerScore;
    computerp.textContent = computerScore;
    playerResults.appendChild(playerp);
    computerResults.appendChild(computerp);
    
});

//event listener on sissors
sissors.addEventListener('click', (e) => {
    let result = computerSelect();
    let img = document.createElement("img");
    img.src = "images/scissors.png";
    playerResults.appendChild(img);
    if (result === 'rock') {
        computerScore+=1;
    } else if(result === 'paper') {
        playerScore+=1;
    }
    let playerp = document.createElement("p");
    let computerp = document.createElement("p");
    playerp.textContent = playerScore;
    computerp.textContent = computerScore;
    playerResults.appendChild(playerp);
    computerResults.appendChild(computerp);  
});

//Objects for the player and computer









