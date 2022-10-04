//Initialize Variables
var possibleWords = ["JavaScript", "CSS", "HTML", "GitHub"];
var word = "";
var wordArray = [];
var wordBlank = "";
var wordBlankArray = new Array();
var gameStarted = false;
var endText = '';

//Gameplay Variables
var wins = localStorage.setItem("wins", 0);
var losses = localStorage.setItem("losses", 0);
var timeLeft = 5;

//HTML Elements
var startButton = document.querySelector("#start-game");
var resetButton = document.querySelector("#reset-button");
var timeElement = document.querySelector("#timer");
var wordElement = document.querySelector("#word-view");
var winElement = document.querySelector("#wins");
var loseElement = document.querySelector("#losses");
var endTextElement = document.querySelector("#end-text");

//Event Listeners
startButton.addEventListener("click", InitializeGame);
resetButton.addEventListener("click", ResetScore);
document.addEventListener("keydown", KeyDownAction);

ResetGame();
//Initializes the game
//!WORKING
function InitializeGame(){
    ResetGame();
    winElement.textContent = wins;
    loseElement.textContent = losses;

    if(!gameStarted){

    //Logs when button is pressed 
    //!(working)
    console.log('Game initializing');
    gameStarted = true;

    //gets a random number and assigns 'word' to a random word in 'possible words' array
    //!Working
    var randomNumber = Math.floor(Math.random() * possibleWords.length);
    word = possibleWords[randomNumber];
    console.log(word);

    //Turns the chosen word to an array and logs it 
    //!Working
    wordArray = Array.from(word.toLowerCase());

    //Adds a blank space to 'blank array' for each letter in 'word array' and logs it 
    //!Working
    for(var i = 0; i < wordArray.length; i++){
        wordBlankArray.push("_");
    }

    //Joins the array using blank spaces, rather than commas, and logs it
    //!Working
    wordBlank = wordBlankArray.join(" ");
    console.log(wordBlank);

    wordElement.textContent = wordBlank;

    SetTime();
    }
    else {
        alert("Game has already started!");
    }
    
}

//Sets the timer and adds lose condition
//!WORKING
function SetTime(){
    //creates an interval
    //!Working
    var timerInterval = setInterval(function(){
        //updates timeLeft and updates the page
        //!Working
        timeLeft--;
        timeElement.textContent = timeLeft + "s";

        //checks for if time = 0 and ends the game
        //!Working
        if(timeLeft === 0){
            clearInterval(timerInterval);
            EndGame();
        }
    },1000);
}

//reads keydown and checks if the key pressed is in the word
//!WORKING
function KeyDownAction(event){

    //Stops players from guessing when the game hasn't started
    if(gameStarted){

        //gets the key and key code from the event
        var key = event.key.toLowerCase();

        //Checks the array if the key pressed is present
        for (var i = 0; i < wordArray.length; i ++){
            //if the key is present, then it will add it to an array
            if(wordArray[i] === key){
                console.log("letter detected at " + i + " index.");
                wordBlankArray[i] = key;
            }
        }
        wordBlank = wordBlankArray.join(" ");
        wordElement.textContent = wordBlank;
    }
    //when the player tries to press a key before the game started
    else {
        alert("Game Hasn't Started!");
    }
}
//Ends the game and checks win or loss
//!WORKING
function EndGame(){

    var correctWord = word.toLowerCase();
    wordBlank = wordBlank.replace(/ /g, "");

    wins = localStorage.getItem("wins");
    losses = localStorage.getItem("losses");

    if(correctWord === wordBlank){
        wins++;
        winElement.textContent = wins;
        endText = "You Won!"
   } 
    else {
        losses++;
        loseElement.textContent = losses;
        endText = "You Lose!"
   }

    localStorage.setItem("wins", wins);
    localStorage.setItem("losses", losses);

    endTextElement.textContent = endText;
}

function ResetGame(){
    word = "";
    wordArray = [];
    wordBlank = "";
    wordBlankArray = new Array();
    gameStarted = false;
    timeLeft = 5;
    timeElement.textContent = timeLeft + "s";
    endText = "";
    endTextElement.textContent = endText;
}

function ResetScore(){
    localStorage.setItem("wins", 0);
    localStorage.setItem("losses", 0);

    wins = localStorage.getItem("wins");
    winElement.textContent = wins;

    losses = localStorage.getItem("losses");
    loseElement.textContent = losses;
}