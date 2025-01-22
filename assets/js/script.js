// header section js fetures

window.onload = () => {
  // GSAP Animations for Header
  gsap.from("header", {
    y: -100,
    duration: 1,
  });

  const images = document.querySelectorAll(".hero_image");
  const titles = [
    "Welcome to Ice Cream Paradise",
    "Cool Down with Our Flavors",
    "Sweeten Your Day",
    "Discover Delicious Treats",
  ];
  const subtitles = [
    "Indulge in our delightful collection of flavors and enjoy the coolest treats of the season!",
    "Explore the rich, creamy, and unique flavors we have in store for you.",
    "Treat yourself to the finest ice creams made with love and care.",
    "Find your favorite scoop and make your day extra sweet!",
  ];
  const buttons = [
    "Shop Now",
    "Explore Flavors",
    "Discover Treats",
    "Browse Collection",
  ];
  const heroTitle = document.getElementById("hero_title");
  const heroSubtitle = document.getElementById("hero_subtitle");
  const heroButton = document.querySelector("#hero_button a");

  let currentIndex = 0;

  function updateHeroSection() {
    // Update images
    images.forEach((img, idx) => {
      img.classList.toggle("opacity-100", idx === currentIndex);
      img.classList.toggle("opacity-0", idx !== currentIndex);
    });

    // Update text content
    heroTitle.textContent = titles[currentIndex];
    heroSubtitle.textContent = subtitles[currentIndex];
    heroButton.textContent = buttons[currentIndex];

    // Trigger GSAP animation for the content
    gsap.from(".animate-2", {
      opacity: 0,
      y: 100,
      stagger: 0.3,
      duration: 1.1,
    });

    // Update index
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Cycle through content every 6 seconds
  setInterval(updateHeroSection, 6000);

  // Initial GSAP animation on page load
  gsap.from(".animate", {
    opacity: 0,
    y: 100,
    stagger: 0.3,
    duration: 1,
  });

  // GSAP for Hero Section Animation on Load
  //   gsap.from(".hero-content", {
  //     opacity: 0,
  //     x: -400,
  //     duration: 1.5,
  //     ease: "ease-out",
  //     stagger: 0.5,
  //   });
  //   gsap.from(".hero-img", {
  //     opacity: 0,
  //     x: 400,
  //     duration: 1.5,
  //     ease: "ease-out",
  //     stagger: 0.5,
  //   });
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
