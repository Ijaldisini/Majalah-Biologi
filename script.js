// 1. Scroll Progress Bar & Navbar Effect
window.onscroll = function () {
  scrollLogic();
};

function scrollLogic() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  // Navbar transparent to solid logic
  var navbar = document.getElementById("navbar");
  if (winScroll > 50) {
    navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
}

// 2. Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  },
  {
    root: null,
    threshold: 0.1, // Trigger when 10% visible
    rootMargin: "0px",
  }
);

revealElements.forEach((el) => revealObserver.observe(el));
