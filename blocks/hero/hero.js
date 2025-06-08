document.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const heroText = document.querySelector('.hero-text');

  if (hero) {
    const scrollPosition = window.scrollY;
    // Parallax effect for background
    hero.style.backgroundPosition = `center ${scrollPosition * 0.25}px`; // Adjust multiplier for effect strength
  }

  if (heroText) {
    const scrollPosition = window.scrollY; // Define scrollPosition again for heroText
    // Parallax effect for text
    heroText.style.transform = `translateY(${scrollPosition * 0.1}px)`; // Adjust multiplier for effect strength
    heroText.style.opacity = 1 - scrollPosition / 1000; // Optional: Fade out text as you scroll
  }
});
