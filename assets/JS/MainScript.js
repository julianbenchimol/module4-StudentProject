//TODO: Start Game runs InitializeGame()
//TODO: Initialize game renders the blanked out word
//TODO: Get key down to check what key is pressed
//TODO: Assign the key to a variabe and check if the variable is contained within the chosen word
//TODO: If the pressed key is in, reveal it, otherwise take a life
//TODO: Update word-view, timer-element, wins & losses to reflect game choices
//TODO: Create a timer for 20s that updates in real time
//TODO: Display a win/loss message when the word is guessed or the timer runs out/runs out of lives
//TODO: Track wins and losses in local storage

var possibleWords = ["JavaScript", "CSS", "HTML"];

var chosenWord = "";

var blankedWord = [];
var chosenWordArray = [];


InitializeGame();

//initializes the game
function InitializeGame(){
    ChooseWord();
    SetBlanks();
}

//chooses a random word based on a random number 
function ChooseWord(){
    var randomNumber = Math.floor(Math.random(possibleWords.length));
    chosenWord = possibleWords[randomNumber];
    console.log(chosenWord);
}

//sets a blanked out version of the word in the array
function SetBlanks(){
    chosenWordArray = Array.from(chosenWord);
    for(var i = 0; i < chosenWordArray.length; i++){
        blankedWord.push("_");
    }
}