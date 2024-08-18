const navbar = document.querySelector(`.navbar`);
const navLinks = document.querySelectorAll(`.nav-link`);
const navbarCollapse = document.querySelector(`.navbar-collapse.collapse`);
const navbarToggler = document.querySelector(`.navbar-toggler`);
const main = document.querySelector(`main`);
const navbarBrand = document.querySelector(`.navbar-brand`);

function hideNavbar() {
  navbarCollapse.classList.remove(`show`);
  navbarToggler.classList.add(`collapsed`);
}

function hideMenuToggle() {
  if (navbar.classList.contains(`blur-navbar`)) {
    navbar.classList.remove(`blur-navbar`);
    navbar.classList.add(`blur-navbar-2`);
    main.classList.add(`blur-main`);
  } else if (navbar.classList.contains(`blur-navbar-2`)) {
    navbar.classList.remove(`blur-navbar-2`);
    navbar.classList.add(`blur-navbar`);
    main.classList.remove(`blur-main`);
  } else {
    navbar.classList.add(`blur-navbar-2`);
    main.classList.add(`blur-main`);
  }
}

function scrollAndChoose() {
  navbar.classList.add(`blur-navbar`);
  navbar.classList.remove(`blur-navbar-2`);
  main.classList.remove(`blur-main`);
}

window.addEventListener(`scroll`, () => {
  if (window.scrollY > 50) {
    scrollAndChoose();
    hideNavbar();
  } else {
    navbar.classList.remove(`blur-navbar`);
  }
});

navLinks.forEach((navLink) => {
  navLink.addEventListener(`click`, () => {
    hideNavbar();
    scrollAndChoose();
  });
});

main.addEventListener(`click`, () => {
  hideNavbar();
  scrollAndChoose();
});

navbarBrand.addEventListener(`click`, hideNavbar);

navbarToggler.addEventListener(`click`, hideMenuToggle);
