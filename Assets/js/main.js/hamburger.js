document.addEventListener('DOMContentLoaded', function () {
    var navUl = document.querySelector('nav ul');
    var menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', function () {
      navUl.classList.toggle('show');
    });
  });

