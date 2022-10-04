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