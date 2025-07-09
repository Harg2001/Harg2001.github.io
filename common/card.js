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

	  var rotateX = -(y - centerY);
	  var rotateY = (x - centerX);
	  rotateX = Math.min(-60, Math.max(60, Math.round(rotateX))); // clamp
	  rotateY = Math.min(-60, Math.max(60, Math.round(rotateY))); // clamp
	  
	  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(2)`;
	  
	  // Supposons que rotateX varie entre -50 (vers le haut) et +50 (vers le bas)
	  const brightness = 1 + rotateX / 150; // varie entre 0.66 et 1.33
	  card.style.filter = `brightness(${brightness})`;

	  const boxShadowOffsetX = 0
	  const boxShadowOffsetY = 15* (1 + rotateX / 150)
	  const boxShadowBlurRadius = 15* (1 + rotateX / 150)
	  var boxShadowColor = 125* (1 + rotateX / 50) // varie entre 0 et 2
	  boxShadowColor = Math.min(255, Math.max(0, Math.round(boxShadowColor))); // clamp 0-255
	  
	  card.style.boxShadow = `${boxShadowOffsetX}px ${boxShadowOffsetY}px ${boxShadowBlurRadius}px rgba(${boxShadowColor}, ${boxShadowColor}, ${boxShadowColor}, 0.3)`;
	  
	});

	card.addEventListener('mouseleave', () => {
	  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
	  card.style.filter = ``;
	  card.style.boxShadow = '0px 10px 10px rgba(0,0,0,0.3)';
	});

    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true });


