// Charger et insérer le bloc dynamiquement
	fetch('https://harg2001.github.io/common/social.html')
	  .then(response => response.text())
	  .then(data => {
		document.getElementById('social-placeholder').innerHTML = data;
	  });