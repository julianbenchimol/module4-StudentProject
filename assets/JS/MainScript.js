//TODO: Start Game runs InitializeGame()
//!Done
//TODO: Initialize game renders the blanked out word
//!Done
//TODO: Create a timer for 20s that updates in real time
//!Done
//TODO: Get key down to check what key is pressed
//!Done
//TODO: Assign the key to a variabe and check if the variable is contained within the chosen word
//!DONE
//TODO: If the pressed key is in, reveal it
//!Done
//TODO: Update word-view, timer-element, wins & losses to reflect game choices
//TODO: Display a win/loss message when the word is guessed or the timer runs out/runs out of lives
//TODO: Track wins and losses in local storage

//Initialize Variables
var possibleWords = ["JavaScript", "CSS", "HTML", "GitHub"];
var word = "";
var wordArray = [];
var wordBlank = "";
var wordBlankArray = new Array();
var gameStarted = false;

//Gameplay Variables
var wins = localStorage.getItem("wins");
var losses = localStorage.getItem("losses");
var timeLeft = 20;
var guessedLetters = Array();
var playerWord = Array();


//HTML Elements
var startButton = document.querySelector("#start-game");
var timeElement = document.querySelector("#timer");
var wordElement = document.querySelector("#word-view");
var winElement = document.querySelector("#wins");
var loseElement = document.querySelector("#losses");

startButton.addEventListener("click", InitializeGame);

//Gets key Input and displays it on the page
document.addEventListener("keydown", KeyDownAction);

//Initializes the game
//!WORKING
function InitializeGame(){
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

function EndGame(){

    var correctWord = word.toLowerCase();
    wordBlank = wordBlank.replace(/ /g, "");

    wins = localStorage.getItem("wins");
    losses = localStorage.getItem("losses");

    if(correctWord === wordBlank){
        console.log("correct word!")
        wins++;
        winElement.textContent = wins;
    } 
    else {
        console.log("wrong word!");
        losses++;
        loseElement.textContent = losses;
    }

    localStorage.setItem("wins", wins);
    localStorage.setItem("losses", losses);
}