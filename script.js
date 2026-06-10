(function(){ emailjs.init("-JAYxloFqKRQn4m7Q"); })();

// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX - 5 + 'px';
  cursor.style.top = e.clientY - 5 + 'px';
  ring.style.left = e.clientX - 18 + 'px';
  ring.style.top = e.clientY - 18 + 'px';
});

// Navbar scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact form
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    emailjs.sendForm('service_3bc1p3i','template_53llp29',this)
      .then(()=>{ alert('✅ Message sent!'); form.reset(); })
      .catch(()=>{ alert('❌ Failed to send.'); });
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if(t) window.scrollTo({ top: t.offsetTop - 80, behavior: 'smooth' });
  });
});