document.addEventListener('DOMContentLoaded', function() {
    var burgerMenu = document.querySelector('.burger-menu');
    var navMenu = document.querySelector('header nav ul');
  
    burgerMenu.addEventListener('click', function() {
      if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'flex';
      }
    });
  });
  