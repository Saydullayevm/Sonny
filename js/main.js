// ── Sticky nav shadow on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile hamburger
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('nav--open');
});
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => navbar.classList.remove('nav--open'));
});

// ── Live clock in mockup
function updateClock() {
  const el = document.getElementById('liveClock');
  if (!el) return;
  const now = new Date();
  let h = now.getHours(), m = now.getMinutes(), ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  el.textContent = `${h}:${String(m).padStart(2,'0')} ${ampm}`;
}
updateClock();
setInterval(updateClock, 30000);

// ── Scroll reveal (review cards excluded)
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.feature-card, .step, .pricing-card, ' +
  '.benefit-item, .about-stat-card, .value-item, ' +
  '.device-card, .map-card, .ifta-card, .trust-stat, .product-section__text > *'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ── Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Request Sent — We\'ll be in touch shortly.';
    btn.style.background = '#22c55e';
    btn.style.borderColor = '#22c55e';
    btn.style.color = '#fff';
    btn.disabled = true;
  });
}