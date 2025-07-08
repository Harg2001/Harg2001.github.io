// Charger et insérer le bloc dynamiquement
	fetch('https://harg2001.github.io/common/chess.html')
	  .then(response => response.text())
	  .then(data => {
		document.getElementById('chess-placeholder').innerHTML = data;
	  });
