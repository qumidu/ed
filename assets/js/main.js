// navbar
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

// popular courses
const swiper = new Swiper(".mySwiper", {
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

// faq section
document.addEventListener(`DOMContentLoaded`, function () {
  const faqHeaders = document.querySelectorAll(`.faq_header`);
  let currentlyOpenedContent = null;
  let currentlyOpenedIcon = null;
  faqHeaders.forEach((faqHeader) => {
    faqHeader.addEventListener(`click`, () => {
      const faqContent = faqHeader.nextElementSibling;
      const currentDisplay = window.getComputedStyle(faqContent).display;
      const faqIcon = faqHeader.querySelector(`.faq_icon`);
      if (currentlyOpenedContent && currentlyOpenedContent !== faqContent) {
        currentlyOpenedContent.style.display = `none`;
        currentlyOpenedIcon.textContent = `+`;
      }
      if (currentDisplay === `block`) {
        faqContent.style.display = `none`;
        currentlyOpenedContent = null;
        currentlyOpenedIcon = null;
        faqIcon.textContent = `+`;
      } else {
        faqContent.style.display = `block`;
        currentlyOpenedContent = faqContent;
        currentlyOpenedIcon = faqIcon;
        faqIcon.textContent = `-`;
      }
    });
  });
});

// testimonials section
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
