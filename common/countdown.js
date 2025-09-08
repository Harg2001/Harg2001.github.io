// --- Configuration ---
// Set your contest end date/time here (ISO 8601 or any Date-parsable string)
// Example: 7 days from now
const END_AT = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
// Or set a fixed time: new Date('2025-12-01T23:59:59Z');

// --- Helpers ---
const clampZero = n => Math.max(0, n);
const pad2 = n => String(n).padStart(2, '0');

function getParts(ms){
  ms = clampZero(ms);
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

document.addEventListener('DOMContentLoaded', () => {

  // --- Elements ---
  const el = {
    d: document.getElementById('days'),
    h: document.getElementById('hours'),
    m: document.getElementById('minutes'),
    s: document.getElementById('seconds'),
    status: document.getElementById('statusMsg'),
    joinBtn: document.getElementById('joinBtn'),
    signIn: document.getElementById('signInLink')
  };
  
  function renderEnded(){
    el.d.textContent = '00';
    el.h.textContent = '00';
    el.m.textContent = '00';
    el.s.textContent = '00';
    el.status.textContent = 'This contest has ended.';
    el.status.classList.add('status--ended');
    el.joinBtn.setAttribute('disabled', 'true');
  }

  function tick(){
    const now = new Date();
    const diff = END_AT - now;

    if (diff <= 0){
      renderEnded();
      clearInterval(timer);
      return;
    }

    const { days, hours, minutes, seconds } = getParts(diff);
    el.d.textContent = pad2(days);
    el.h.textContent = pad2(hours);
    el.m.textContent = pad2(minutes);
    el.s.textContent = pad2(seconds);
    el.status.textContent = 'This contest ends in:';
    el.status.classList.remove('status--ended');
    el.joinBtn.removeAttribute('disabled');
}

  // Fire initial tick and start interval
  tick();
  const timer = setInterval(tick, 1000);

  const token = localStorage.getItem("auth_token");
  // Simuler récupération avec un token
  // token = 123
  if (token) {
    document.getElementById("cta-row").innerHTML = '<button id="joinBtn" class="btn">Join Now</button>'
  } else {
    document.getElementById("cta-row").innerHTML = 'You should <a href="#" id="signInLink">sign in</a> first.'
  }

  // Demo actions (replace with your own handlers)
  el.joinBtn.addEventListener('click', () => {
    if (el.joinBtn.hasAttribute('disabled')) return;
    alert('Thanks for joining! This feature is not yet completed.');
  });
  el.signIn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "https://harg2001.github.io/account/signin.html";
    alert('Sign-in clicked. This feature is not yet completed.');
  });

  // Progressive enhancement: reduce motion preference
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq.matches){
    document.documentElement.style.setProperty('--blur', 'saturate(120%) blur(0px)');
  }
  
})