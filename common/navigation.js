// Charger et insérer le bloc dynamiquement
	fetch('https://harg2001.github.io/common/navigation.html')
	  .then(response => response.text())
	  .then(data => {
		document.getElementById('navigation-placeholder').innerHTML = data;
	  });