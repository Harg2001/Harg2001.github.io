function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  const diceEl = document.getElementById("dice");
  diceEl.innerHTML = diceFace;
}

function getDiceFace(rollResult) {
  switch (rollResult) {
	case 1:
	  return "⚀";
	case 2:
	  return "⚁";
	case 3:
	  return "⚂";
	case 4:
	  return "⚃";
	case 5:
	  return "⚄";
	case 6:
	  return "⚅";
	default:
	  return "";
  }
}

fetch('https://harg2001.github.io/common/dice.html')
  .then(response => response.text())
  .then(data => {
	document.getElementById('dice-placeholder').innerHTML = data;
  });
