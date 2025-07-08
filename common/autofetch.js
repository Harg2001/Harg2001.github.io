  document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelectorAll('[id$="-placeholder"]'); // récupère tous les élément dont id se finit par -placeholder
    
    list.forEach(el => {
      const name = el.id.replace(/-placeholder$/, '');
      if (!name) return;
	  
      const url = `https://harg2001.github.io/common/${name}.html`;
      
      fetch(url)
        .then(response => {
          if (!response.ok) throw new Error(`Erreur de chargement : ${url}`);
          return response.text();
        })
        .then(html => {
          el.innerHTML = html;
        })
        .catch(err => {
          console.error(err);
          el.innerHTML = '<!-- Échec de chargement -->';
        });
    });
  });
