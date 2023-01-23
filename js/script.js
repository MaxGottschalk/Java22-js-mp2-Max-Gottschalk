let playerPoint = 0;
let computerPoint = 0;
const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const playerSelect = document.querySelectorAll(".choice");

const playerScore = document.querySelector("#playerPoint");
const computerScore = document.querySelector("#computerPoint");
const roundWinner = document.querySelector("#roundWinner");

const playerName = document.querySelector("#playerName");
let inputName = document.querySelector("#inputName");

let randomNr = getRandomNr();
const option = ["Rock", "Paper", "Scissor"];

alert("Please Enter a name before playing");

document.querySelector("#startGame").addEventListener("click", event => {
    event.preventDefault();

    playerName.innerText = inputName.value;
    console.log(inputName.value);
    playerSelect[0].addEventListener("click", checkSelect);
    playerSelect[1].addEventListener("click", checkSelect);
    playerSelect[2].addEventListener("click", checkSelect);
});

console.log(option[randomNr]);
console.log(randomNr);

function checkSelect(event) {
    if (playerPoint < 3 && computerPoint < 3) {

        if (event.target.value === option[0] && option[randomNr] === option[2]) {
            playerPoint++;
            playerChoice.innerText = event.target.value;
            computerChoice.innerText = option[randomNr];
            roundWinner.innerText = inputName.value + " point!";
            playerScore.innerText = inputName.value + " Score:" + playerPoint;
            randomNr = getRandomNr();
            console.log('comp', option[randomNr]);
        } else if (event.target.value === option[1] && option[randomNr] === option[0]) {
            playerPoint++;
            playerChoice.innerText = event.target.value;
            computerChoice.innerText = option[randomNr];
            roundWinner.innerText = inputName.value + " point!";
            playerScore.innerText = inputName.value + " Score:" + playerPoint;
            randomNr = getRandomNr();
            console.log('comp', option[randomNr]);
        } else if (event.target.value === option[2] && option[randomNr] === option[1]) {
            playerPoint++;
            playerChoice.innerText = event.target.value;
            computerChoice.innerText = option[randomNr];
            roundWinner.innerText = inputName.value + " point!";
            playerScore.innerText = inputName.value + " Score:" + playerPoint;
            randomNr = getRandomNr();
            console.log('comp', option[randomNr]);
        } else if (event.target.value === option[randomNr]) {
            playerChoice.innerText = event.target.value;
            computerChoice.innerText = option[randomNr];
            roundWinner.innerText = "Tie!";
            randomNr = getRandomNr();
            console.log('random nummer', randomNr);
        } else {
            computerPoint++;
            playerChoice.innerText = event.target.value;
            computerChoice.innerText = option[randomNr];
            computerScore.innerText = "Computer Score:" + computerPoint;
            roundWinner.innerText = "Computer point!";
            console.log('comp', option[randomNr]);
        }
    }

    setTimeout(() => {
        if (playerPoint == 3) {
            alert(inputName.value + " Won the game");
            location.reload();
        } else if (computerPoint == 3) {
            alert("Computer Won the game");
            location.reload();
        }
    }, 20);


    event.preventDefault();
}

function getRandomNr() {
    return Math.floor(Math.random() * 3);
}



