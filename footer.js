// Charger et insérer le footer dynamiquement
	fetch('footer.html')
	  .then(response => response.text())
	  .then(data => {
		document.getElementById('footer-placeholder').innerHTML = data;
	  });