// Charger et insérer le header dynamiquement
	fetch('https://harg2001.github.io/common/header.html')
	  .then(response => response.text())
	  .then(data => {
		document.getElementById('header-placeholder').innerHTML = data;
	  });