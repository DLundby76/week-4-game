$(document).ready(function() {
	var wins,
	losses,
	targetNumber,
	userTotal,
	ruby,
	emerald,
	sapphire,
	diamond;

	wins = 0
	losses = 0

	var numberSelection = [1, 5, 10, 25];
	var clickSound = new Audio("assets/sounds/applause.mp3")

console.log("hello world")

function newGame(){
	resetVariables()
	updateGameboard()
}

function resetVariables(){
	targetNumber = Math.floor(Math.random() * 150);
	numberSelection = shuffle(numberSelection);

	ruby= numberSelection[0]
	sapphire= numberSelection [1]
	emerald= numberSelection [2]
	diamond= numberSelection [3]

	userTotal = 0;
}

function updateGameboard(){
	$("#target-number").text(targetNumber);
	$("#user-score").text(userTotal)
	$("#wins").text(wins)
	$("#losses").text(losses)
}

function userScoreIncrease(amount){
	userTotal += amount;
	$("#user-score").text(userTotal)
	console.log("newUserTotal", userTotal)

	if(targetNumber === userTotal){
		wins ++
		newGame()
	} else if(targetNumber < userTotal){
		losses ++
		newGame()
	} else{

	}


}



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


$("#ruby-click").on('click', function(event){
	event.preventDefault()
	userScoreIncrease(ruby)
	clickSound.play()
})

$("#sapphire-click").on('click', function(event){
	event.preventDefault()
	userScoreIncrease(sapphire)
})

$("#emerald-click").on('click', function(event){
	event.preventDefault()
	userScoreIncrease(emerald)
})

$("#diamond-click").on('click', function(event){
	event.preventDefault()
	userScoreIncrease(diamond)
})

newGame()




})