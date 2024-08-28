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

document.addEventListener(`DOMContentLoaded`, function () {
  // popular courses
  const swiper = new Swiper(`.mySwiper`, {
    freeMode: true,
    loop: true,
    pagination: {
      el: `.swiper-pagination`,
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

  // testimonials section
  const swiper2 = new Swiper(`.mySwiper2`, {
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

  // faq section
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

// scroll reveal
const sb = ScrollReveal({
  duration: 2500,
  delay: 800,
  mobile: false,
  origin: `bottom`,
  distance: `60px`,
  // reset: true,
});

// from left
sb.reveal(
  `
  .hero_section .row .col-lg-6:nth-of-type(1),
  .faq_section .faq_content_container .row .col-lg-6:nth-of-type(1),
  .about_hero_section .row .col-lg-6:nth-of-type(1),
  .contact_section .row .col-lg-6:nth-of-type(1)`,
  { origin: `left` }
);

// from right
sb.reveal(
  `
  .hero_section .row .col-lg-6:nth-of-type(2),
  .faq_section .faq_content_container .row .col-lg-6:nth-of-type(2),
  .about_hero_section .row .col-lg-6:nth-of-type(2),
  .contact_section .row .col-lg-6:nth-of-type(2)`,
  { origin: `right` }
);

// from top
sb.reveal(`.header_section .navbar`, { origin: `top` });

// from bottom
sb.reveal(
  `
  .categories_section .categories_content_container .card,
  .popular_courses_section .popular_courses_content_container,
  .testimonials_section .testimonials_content,
  .footer_section,
  .footer_section .col-lg-3,
  .about_team_section .content_container .col-md-6,
  .courses_section .courses_content_container .col-md-6,
  .pagination_container .col-12,
  .map_section .map`,
  { origin: `bottom` }
);

// title
sb.reveal(`.section_header_container`, { origin: `bottom`, delay: 900 });
sb.reveal(`.section_header_container .sub-head`, {
  origin: `bottom`,
  delay: 900,
});
sb.reveal(`.section_header_container .main-head`, {
  origin: `bottom`,
  delay: 800,
});

// back to top
document.addEventListener(`DOMContentLoaded`, function () {
  const backToTop = document.getElementById(`back-to-top`);

  window.addEventListener(`scroll`, function () {
    if (window.scrollY > 200) {
      backToTop.classList.add(`active`);
    } else {
      backToTop.classList.remove(`active`);
    }
  });

  backToTop.addEventListener(`click`, function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
  });

  // shake arrow
  function shakeElement() {
    backToTop.classList.add("shake");

    setTimeout(() => {
      backToTop.classList.remove("shake");
    }, 1000);
  }

  setTimeout(() => {
    shakeElement();

    setInterval(() => {
      shakeElement();
    }, 5000);
  }, 1000);
});
