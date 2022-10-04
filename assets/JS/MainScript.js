//TODO: Start Game runs InitializeGame()
//!Done
//TODO: Initialize game renders the blanked out word
//!Done
//TODO: Get key down to check what key is pressed
//TODO: Assign the key to a variabe and check if the variable is contained within the chosen word
//TODO: If the pressed key is in, reveal it, otherwise take a life
//TODO: Update word-view, timer-element, wins & losses to reflect game choices
//TODO: Create a timer for 20s that updates in real time
//TODO: Display a win/loss message when the word is guessed or the timer runs out/runs out of lives
//TODO: Track wins and losses in local storage

//Initialize Variables
var possibleWords = ["JavaScript", "CSS", "HTML", "GitHub"];
var word = "";
var wordArray = [];

var wordBlank = "";
var wordBlankArray = new Array();

//Gameplay Variables
var wins = 0;
var losses = 0;
var lives = 5; 
var timeLeft;

//HTML Elements
var startButton = document.querySelector("#start-game")

startButton.addEventListener("click", InitializeGame);

function InitializeGame(){
    //Logs when button is pressed 
    //!(working)
    console.log('Game initializing');

    //gets a random number and assigns 'word' to a random word in 'possible words' array
    var randomNumber = Math.floor(Math.random() * possibleWords.length);
    word = possibleWords[randomNumber];
    //logs the random word chosen 
    //!(working)
    console.log(word);

    //Turns the chosen word to an array and logs it 
    //!(working)
    wordArray = Array.from(word);
    console.log(wordArray);

    //Adds a blank space to 'blank array' for each letter in 'word array' and logs it 
    //!(working)
    for(var i = 0; i < wordArray.length; i++){
        wordBlankArray.push("_");
    }
    console.log(wordBlankArray);

    //Joins the array using blank spaces, rather than commas, and logs it
    //!Working
    wordBlankArray = wordBlankArray.join(" ");
    console.log(wordBlankArray);
}
