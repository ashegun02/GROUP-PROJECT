document.addEventListener('DOMContentLoaded', function() {
  const navMenu = document.getElementById('NavMenu');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');

  function showIcons() {
    if (window.innerWidth <= 480) {
      if (navMenu.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    } else {
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'none';
      navMenu.classList.remove('active');
    }
  }

  menuIcon.addEventListener('click', function() {
    navMenu.classList.add('active');
    showIcons();
  });

  closeIcon.addEventListener('click', function() {
    navMenu.classList.remove('active');
    showIcons();
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      showIcons();
    });
  });

  window.addEventListener('resize', showIcons);

  // Initial state
  showIcons();
});

