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
	  
	  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	  
	  // Supposons que rotateX varie entre -30 (vers le haut) et +30 (vers le bas)
	  const brightness = 1 - rotateX / 90; // = 1 si vers le haut, <1 si vers le bas
	  card.style.filter = `brightness(${brightness})`;

	  if (rotateX < 0) {
	    card.style.boxShadow = '0 20px 40px rgba(255,255,255,0.3)';
	  } else {
	    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
	  }
	  
	});

	card.addEventListener('mouseleave', () => {
	  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
	});

    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true });


