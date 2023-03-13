/*!
 * Start Bootstrap - New Age v6.0.6 (https://startbootstrap.com/theme/new-age)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  const screen = document.querySelector(".screen-app");
  document
    .getElementById("organisation-tab")
    .addEventListener("click", function (e) {
      screen.classList.add("screen-organisation");
      screen.classList.remove("screen-donor");
    });

  document.getElementById("donor-tab").addEventListener("click", function (e) {
    screen.classList.remove("screen-organisation");
    screen.classList.add("screen-donor");
  });

  const testimonialClick = (e) => {
    let target = e.target;

    if (!e.target.classList.contains("testimonial")) {
      target = e.target.parentElement;
    }

    const testimonialTexts = Array.from(
      document.getElementsByClassName("testimonialText")
    );
    const selectedButton = document.querySelector(".testimonial.active");
    selectedButton.classList.remove("active");
    target.classList.add("active");

    const shownTestimonial = document.querySelector(
      `#${selectedButton.id.split("-")[0]}`
    );
    const targetTestimonial = document.querySelector(
      `#${target.id.split("-")[0]}`
    );

    shownTestimonial.classList.add("testimonialHide");
    targetTestimonial.classList.remove("testimonialHide");
  };

  const testimonialButtons = Array.from(
    document.getElementsByClassName("testimonial")
  );

  testimonialButtons.forEach((button) => {
    button.addEventListener("click", (e) => testimonialClick(e));
  });
});
