// --- Play Music Button ---
document.getElementById('playMusicBtn').addEventListener('click', () => {
  const music = document.getElementById('music');
  music.play();
  // Hide button after click
  document.getElementById('playMusicBtn').style.display = 'none';
});

// --- Interactive surprise ---
function revealMessage() {
  const msg = document.getElementById('hiddenMessage');
  msg.style.display = msg.style.display === 'none' ? 'block' : 'none';
  fillLoveMeter();
}

// Fill the love meter
function fillLoveMeter() {
  document.getElementById('loveFill').style.width = '100%';
}

// --- Personalized Countdown ---
// Set your exact special moment
const specialDate = new Date("Mar 19, 2026 17:00:00").getTime(); 

// Countdown function
function updateCountdown() {
  const now = new Date().getTime();
  const distance = specialDate - now;

  if(distance < 0) {
    // Show your personal message when countdown ends
    document.getElementById('countdown').innerText = "Can't wait to see you on Mar 19, 2026! 💌";
    
    // Auto-show hidden love message and fill love meter
    document.getElementById('hiddenMessage').style.display = 'block';
    fillLoveMeter();
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((distance % (1000*60)) / 1000);

  document.getElementById('countdown').innerText = 
    `Can't wait to see you: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// --- Floating hearts animation ---
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = 3 + Math.random()*3 + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);
