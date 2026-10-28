// Show popup after a short delay
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('popup').style.display = 'flex';
  }, 800);
});

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function claimPrize() {
  alert('🎉 Congratulations!\n\nYou have won a FREE domain name + hosting for 1 year!\n\nJust share your credit card details to claim...\n\n(Just kidding — this is a parody site 😄)');
  closePopup();
}

// Make the counter look "live"
let count = 1000000;
setInterval(() => {
  // Occasionally flicker
  if (Math.random() > 0.7) {
    const display = document.querySelector('.counter-display');
    if (display) {
      display.style.opacity = '0.3';
      setTimeout(() => {
        display.style.opacity = '1';
      }, 100);
    }
  }
}, 2000);

// Cursor trail effect for extra 2000s vibe (optional fun)
document.addEventListener('mousemove', (e) => {
  // Only occasionally create a trail
  if (Math.random() > 0.92) {
    const star = document.createElement('div');
    star.textContent = '✨';
    star.style.position = 'fixed';
    star.style.left = e.clientX + 'px';
    star.style.top = e.clientY + 'px';
    star.style.pointerEvents = 'none';
    star.style.fontSize = '14px';
    star.style.zIndex = '9999';
    star.style.transition = 'all 0.8s ease-out';
    document.body.appendChild(star);
    
    setTimeout(() => {
      star.style.opacity = '0';
      star.style.transform = 'translateY(-30px) scale(0)';
    }, 50);
    
    setTimeout(() => star.remove(), 900);
  }
});
