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

	  const boxShadowOffsetX = 0
	  const boxShadowOffsetY = 15* (1 + rotateX / 90)
	  const boxShadowBlurRadius = 15* (1 + rotateX / 90)
	  const boxShadowColor = 125* (1 + rotateX / 30) // varie entre 0 et 2
	  boxShadowColor = Math.min(255, Math.max(0, Math.round(boxShadowColor))); // clamp 0-255
	  
	  card.style.boxShadow = `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(${shadowColorValue}, ${shadowColorValue}, ${shadowColorValue}, 0.3)`;
	  
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


