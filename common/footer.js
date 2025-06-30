// Charger et insérer le footer dynamiquement
	fetch('https://harg2001.github.io/common/footer.html')
	  .then(response => response.text())
	  .then(data => {
		document.getElementById('footer-placeholder').innerHTML = data;
	  });