// Mobile Menu & Smooth Scrolling
(function() {
  const btn = document.querySelector('.menu-btn');
  const list = document.getElementById('primary-nav');
  const links = list.querySelectorAll('a[href^="#"]');
  
  // Close menu helper function
  const closeMenu = () => {
    if (getComputedStyle(btn).display !== 'none') {
      list.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  };
  
  // Toggle mobile menu
  if (btn) {
    btn.addEventListener('click', () => {
      const open = list.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  }
  
  // Smooth scroll for anchor links
  links.forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMenu();
      }
    });
  });
  
  // Set current year in footer
  const y = document.getElementById('year');
  if (y) {
    y.textContent = new Date().getFullYear();
  }
})();

