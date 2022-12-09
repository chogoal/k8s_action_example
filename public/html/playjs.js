window.onload = pageLoad;

function pageLoad() {
	var guessbutton1 = document.getElementById("guessbutton");
	var ng1 = document.getElementById("ng");
	guessbutton1.onclick = guessLetter;
	ng1.onclick = newGame;
}


var POSSIBLE_WORDS = ["obdurate" , "verisimilitude" , "defenestrate" , "obsequious" , "dissonant" , "today" , "idempotent"];
var MAX_GUESSES = 6;

var guesses = "";
var guessCount = MAX_GUESSES;
var word = "";

function newGame() {
	var index = Math.floor(Math.random() * 7);
	word = POSSIBLE_WORDS[index];
	guessCount = MAX_GUESSES; guesses = "";
	document.getElementById("guessbutton").disabled = false;
	updatePage();
}

function guessLetter() {
	var letter = document.getElementById("hguess").value;
	var clueString = document.getElementById("clue").innerHTML;
	if(guesses.indexOf(letter) >= 0 || clueString.indexOf("_") < 0) {
		return;
	}
	guesses += letter;
	if(word.indexOf(letter) < 0) {
		guessCount--;
	}
	updatePage();
}

function updatePage() {

	var clueString = "";
	for(var i = 0; i < word.length; i++) {
		var wwordd = word.charAt(i);
		if(guesses.indexOf(wwordd) >= 0) {
			clueString += wwordd + " ";
		}
		else {
			clueString += "_ "
		}
	}

	// var chanceArea = document.getElementById("chances");
	// chanceArea.innerHTML = "You have " + guessCount + " chances to guess";

	document.getElementById("clue").innerHTML = clueString;
	
	var guessArea = document.getElementById("guessstr");
	if(guessCount == 0) {
		guessArea.innerHTML = "you lose";
	}
	else if(clueString.indexOf("_") < 0) {
		guessArea.innerHTML = "you win";
	}
	else {
		guessArea.innerHTML = "Guesses : " + guesses;
	}

	var imgname = "hangman" + guessCount + ".gif";
	document.getElementById("hangmanpic").src = imgname;
}