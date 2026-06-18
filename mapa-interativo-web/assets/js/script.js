const menuToggle = document.getElementById('menuToggle');
const sidebarMenu = document.getElementById('sidebarMenu');

// Escuta tanto o 'click' quanto o 'touchstart' (otimizado para totens/telas touch)
const toggleEvent = (e) => {
  e.preventDefault(); // Evita comportamento duplo em algumas telas touch
  menuToggle.classList.toggle('open');
  sidebarMenu.classList.toggle('open');
};

menuToggle.addEventListener('click', toggleEvent);
menuToggle.addEventListener('touchstart', toggleEvent);