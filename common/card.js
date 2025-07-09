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

	  const rotateX = -(y - centerY) / 10;
	  const rotateY = (x - centerX) / 10;

	  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	});

	card.addEventListener('mouseleave', () => {
	  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
	});

    observer.disconnect();
  }
});
    console.log(document.body);
observer.observe(document.body, { childList: true, subtree: true });


