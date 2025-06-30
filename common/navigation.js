// Charger et insérer le bloc dynamiquement
	fetch('/common/navigation.html')
	  .then(response => response.text())
	  .then(data => {
		document.getElementById('navigation-placeholder').innerHTML = data;
	  });