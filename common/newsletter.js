// Charger et insérer le bloc dynamiquement
	fetch('https://harg2001.github.io/common/newsletter.html')
	  .then(response => response.text())
	  .then(data => {
		document.getElementById('newsletter-placeholder').innerHTML = data;
	  });