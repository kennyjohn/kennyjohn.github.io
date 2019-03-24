var numSquares = 3;
var colors = [];
var pickedColor; // winning Color
var squares = document.querySelectorAll(".square");
var rgb = document.getElementById("rgb");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var resetScore = document.getElementById("resetScore");
var modeButtons = document.querySelectorAll(".mode");
var p1score = document.getElementById("score_p1");
var p2score = document.getElementById("score_p2");
var indicateTurn = document.getElementById("indicate-turn");
var gameOver = false;
var winCondition = 0; // goes up to 2, then resets to 0
var currentPlayer = "Player 1";
var players = [
    {
        name: "Player 1",
        score: 0,
        tries: 0
    },
    {
        name: "Player 2",
        score: 0,
        tries: 0
    }
];

// returns the current Player object
function currentPlayerObject() {
    return currentPlayer === players[0].name ? players[0]: players[1];
}

function otherPlayerObject(player) {
    return player === players[0] ? players[1]: players[0];
}

function switchTurns() {
    if (currentPlayer === players[0].name) {
        currentPlayer = "Player 2";
    }
    else if (currentPlayer === players[1].name) {
        currentPlayer = "Player 1";
    }
}

function determineWinner() {
    winCondition++;
    if (winCondition > 0 && winCondition % 2 === 0) {
        if (players[0].tries < players[1].tries) {
            players[0].score++;
        }
        else if (players[1].tries < players[0].tries) {
            players[1].score++;
        }
        p1score.textContent = players[0].score;
        p2score.textContent = players[1].score;
        players[0].tries = 0;
        players[1].tries = 0;
        winCondition = 0;
    }
}

resetScore.addEventListener("click", function() { // changes the score back to 0
    p1Score = 0;
    players[0].score = p1Score;
    p2Score = 0;
    players[1].score = p2Score;
    p1score.textContent = p1Score;
    p2score.textContent = p2Score;
});

init();
function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){ //
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3:
            this.textContent === "Medium" ? numSquares = 6:
            numSquares = 9; // else "Hard"
			reset();
		});
	}
}

function setupSquares() { // game logic, register clicks
    for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
            var bg = this.style.background;
            if(bg === pickedColor) {
                gameOver = true;
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again?";
                changeColors(bg);
                h1.style.background = bg;
            }
            else {
                if (currentPlayerObject().name === "Player 1") {
                    players[0].tries++;
                }
                else {
                    players[1].tries++;
                }
                this.style.background = "#232323";
                messageDisplay.textContent = "Please try again!";
            }
        });
    }
}

function reset() {
    console.log("The current player is: " + currentPlayerObject().name);
    indicateTurn.textContent = currentPlayerObject().name;
    gameOver = false;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    rgb.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
    //change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
    var cpj = currentPlayerObject(); // players[0], players[1]
    var opj = otherPlayerObject(cpj);
    console.log("players[0].tries: " + players[0].tries);
    console.log("players[1].tries: " + players[1].tries);
    if (!gameOver) {
        opj.score++;
        if (opj.name === "Player 1") {
            p1score.textContent = opj.score;
        }
        else if (opj.name === "Player 2") {
            p2score.textContent = opj.score;
        }
        winCondition = 0;
    }
    else {
        determineWinner();
    }
    switchTurns();
	reset();
})

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
