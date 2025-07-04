// Charger et insérer le bloc dynamiquement
	fetch('https://harg2001.github.io/common/countdown.html')
	  .then(response => response.text())
	  .then(data => {
		document.getElementById('countdown-placeholder').innerHTML = data;
	  });