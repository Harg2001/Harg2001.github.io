// Charger et insérer le footer dynamiquement
	fetch('common/footer.html')
	  .then(response => response.text())
	  .then(data => {
		document.getElementById('footer-placeholder').innerHTML = data;
	  });