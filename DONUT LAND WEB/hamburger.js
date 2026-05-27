const navToggle = document.querySelector('.nav-toggle');
const navPill = document.querySelector('.nav-pill');

if (navToggle && navPill) {

  navToggle.addEventListener('click', () => {

    navPill.classList.toggle('active');

    const isOpen = navPill.classList.contains('active');

    navToggle.textContent = isOpen ? '×' : '☰';

    navToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close menu' : 'Open menu'
    );
  });

  navPill.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      navPill.classList.remove('active');

      navToggle.textContent = '☰';

      navToggle.setAttribute('aria-label', 'Open menu');
    });
  });
}