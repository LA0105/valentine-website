function revealMessage() {
  const msg = document.getElementById('hiddenMessage');
  msg.style.display = msg.style.display === 'none' ? 'block' : 'none';
  fillLoveMeter();
}

function fillLoveMeter() {
  document.getElementById('loveFill').style.width = '100%';
}

const countdownDate = new Date("Mar 19, 2026 00:00:00").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const dist = countdownDate - now;
  const days = Math.floor(dist/(1000*60*60*24));
  const hours = Math.floor((dist%(1000*60*60*24))/(1000*60*60));
  const mins = Math.floor((dist%(1000*60*60))/(1000*60));
  const secs = Math.floor((dist%(1000*60))/1000);
  document.getElementById('countdown').innerText = `${days}d ${hours}h ${mins}m ${secs}s`;
}
setInterval(updateCountdown,1000);

function createHeart() {
  const heart = document.createElement('div');
  heart.className='heart';
  heart.style.left=Math.random()*innerWidth+'px';
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
}
setInterval(createHeart,500);
