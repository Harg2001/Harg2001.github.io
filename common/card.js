function pickCard() {
	var cards = [
		"🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂬", "🂭", "🂮", // ♠
		"🂱", "🂲", "🂳", "🂴", "🂵", "🂶", "🂷", "🂸", "🂹", "🂺", "🂻", "🂼", "🂽", "🂾", // ♥
		"🃁", "🃂", "🃃", "🃄", "🃅", "🃆", "🃇", "🃈", "🃉", "🃊", "🃋", "🃌", "🃍", "🃎", // ♦
		"🃑", "🃒", "🃓", "🃔", "🃕", "🃖", "🃗", "🃘", "🃙", "🃚", "🃛", "🃜", "🃝", "🃞", // ♣
		"🃟" // Joker
	];
	
	const redSuits = [
		..."🂱🂲🂳🂴🂵🂶🂷🂸🂹🂺🂻🂼🂽🂾", // ♥
		..."🃁🃂🃃🃄🃅🃆🃇🃈🃉🃊🃋🃌🃍🃎"  // ♦
	];
	
	const pickone = cards[Math.floor(Math.random()*cards.length)];
	const cardEl = document.getElementById("card");
  
	cardEl.textContent = pickone;
	cardEl.className = redSuits.includes(pickone) ? "card red" : "card";
}

const observer = new MutationObserver((mutationsList, observer) => {
  const card = document.querySelector('.card');
  if (card) {
	// L'élément est présent !
	card.addEventListener('mousemove', (e) => {
	  const rect = card.getBoundingClientRect();
	  const x = e.clientX - rect.left; // position souris X dans l'élément
	  const y = e.clientY - rect.top;  // position souris Y dans l'élément

	  const centerX = rect.width / 2;
	  const centerY = rect.height / 2;

	  const rotateX = -(y - centerY);
	  const rotateY = (x - centerX);
	  
	  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(2)`;
	  
	  // Supposons que rotateX varie entre -30 (vers le haut) et +30 (vers le bas)
	  const brightness = 1 - rotateX / 90; // varie entre 0.66 et 1.33
	  card.style.filter = `brightness(${brightness})`;

	  const boxShadow-offset-x = 0
	  const boxShadow-offset-y = 15* (1 + rotateX / 90)
	  const boxShadow-blur-radius = 15* (1 + rotateX / 90)
	  const boxShadow-color = 125* (1 + rotateX / 30) // varie entre 0 et 2
	  
	  card.style.boxShadow = '${boxShadow-offset-x}px ${boxShadow-offset-y}px ${boxShadow-blur-radius}px rgba(${boxShadow-color},${boxShadow-color},${boxShadow-color},0.3)';
	  
	});

	card.addEventListener('mouseleave', () => {
	  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
	  card.style.filter = ``;
	  card.style.boxShadow = '0 10px 10px rgba(0,0,0,0.3)';
	});

    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true });


