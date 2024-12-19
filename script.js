let navItems = document.querySelectorAll(".nav-link");
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    // Remove 'active' class from all nav items
    navItems.forEach((item) => item.classList.remove("active"));

    // Add 'active' class to the clicked nav item
    navItem.classList.add("active");
  });
});

// Hero Section Animation (No ScrollTrigger, direct fade-in)
gsap.from("#hero h1", {
  opacity: 0,
  x: -50,
  duration: 2,
  delay: 0.5,
  ease: "power4.out",
});
gsap.from(".navbar", {
  opacity: 0,
  y: -50,
  duration: 3,
  ease: "power4.out",
});
gsap.from("#hero p", {
  opacity: 0,
  y: 50,
  duration: 2,
  delay: 0.5,
  ease: "power4.out",
});
gsap.from("#hero h2", {
  opacity: 0,
  x: 50,
  duration: 3,
  delay: 0.5,
  ease: "power4.out",
});
