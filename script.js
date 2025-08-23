function openMenu() {
  document.getElementById('NavMenu').classList.add('active');
}

function closeMenu() {
  document.getElementById('NavMenu').classList.remove('active');
}

// Optional: Close menu when clicking outside (mobile UX)
document.addEventListener('click', function (e) {
  const navMenu = document.getElementById('NavMenu');
  if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !e.target.classList.contains('icon-class')) {
    closeMenu();
  }
});

