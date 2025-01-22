// header section js fetures

window.onload = () => {
  // GSAP Animations for Header
  gsap.from("header", {
    y: -100,
    duration: 1,
  });

  gsap.from("header div", {
    opacity: 0,
    y: 100,
    stagger: 0,
    duration: 1,
  });

  // GSAP for Hero Section Animation on Load
  gsap.from(".hero-content", {
    opacity: 0,
    x: -200,
    duration: 1.5,
    ease: "ease-out",
    stagger: 0.5,
  });
  gsap.from(".hero-img", {
    opacity: 0,
    x: 200,
    duration: 1.5,
    ease: "ease-out",
    stagger: 0.5,
  });

};

//   // GSAP for Scroll Animation
//   gsap.from(".hero-content", {
//     scrollTrigger: {
//       trigger: ".hero-content",
//       start: "top bottom",
//       end: "bottom top",
//       scrub: true,
//     },
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     ease: "ease-out",
//   });

//   // GSAP for Scroll Animation
//   gsap.from(".hero-img", {
//     scrollTrigger: {
//       trigger: ".hero-img",
//       start: "top bottom",
//       end: "bottom top",
//       scrub: true,
//     },
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     ease: "ease-out",
//   });
// };

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuClose = document.getElementById("menu-close");
const closedMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
});
closedMenu.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
});
