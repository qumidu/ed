// blur navbar
const navbar = document.querySelector(`.navbar`);

window.addEventListener(`scroll`, () => {
  if (window.scrollY > 50) {
    navbar.classList.add(`blur-navbar`);
    hideNavbar();
  } else {
    navbar.classList.remove(`blur-navbar`);
  }
});

const navLinks = document.querySelectorAll(`.nav-link`);
const navbarCollapse = document.querySelector(`.navbar-collapse.collapse`);
const navbarToggler = document.querySelector(`.navbar-toggler`);
const main = document.querySelector(`main`);
const navbarBrand = document.querySelector(`.navbar-brand`);

function hideNavbar() {
  navbarCollapse.classList.remove(`show`);
  navbarToggler.classList.add(`collapsed`);
}

navLinks.forEach((navLink) => {
  navLink.addEventListener(`click`, hideNavbar);
});
main.addEventListener(`click`, hideNavbar);
navbarBrand.addEventListener(`click`, hideNavbar);
navbarToggler.addEventListener(`click`, () => {
  navbar.classList.add(`blur-navbar`);
  navbar.classList.add(`pb-0`);
});
