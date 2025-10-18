// Typing effect
const typingElement = document.querySelector(".typing-text");
const roles = ["I’m Precious Usman_", "I’m a Web Developer_", "UI/UX Designer_"];
let roleIndex = 0, charIndex = 0;

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex][charIndex++];
    setTimeout(typeEffect, 100);
  } else setTimeout(eraseEffect, 2000);
}
function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, --charIndex);
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 300);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Sidebar toggle
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => sidebar.classList.add("active"));
closeBtn.addEventListener("click", () => sidebar.classList.remove("active"));
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => sidebar.classList.remove("active"));
});
// Animate counting numbers
const counters = document.querySelectorAll(".stat-box h3");
const speed = 200; // lower is faster

const animateCount = (counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText.replace(/\D/g, ""); // remove + or k

    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target.toLocaleString(); // format with commas if needed
    }
  };
  updateCount();
};

// Intersection Observer
const aboutSection = document.querySelector(".about");
let animated = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !animated) {
      counters.forEach(counter => animateCount(counter));
      animated = true; // run only once
    }
  });
}, { threshold: 0.5 });

observer.observe(aboutSection);
 
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projectCards.forEach(card => {
          card.classList.add("hidden");
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.classList.remove("hidden");
          }
        });
      });
    });
  document.addEventListener("DOMContentLoaded", () => {
  const skillCircles = document.querySelectorAll(".skill-circle");

  skillCircles.forEach(circle => {
    const percent = circle.getAttribute("data-percent");
    const label = circle.getAttribute("data-label");

    // Create SVG
    circle.innerHTML = `
      <svg width="120" height="120">
        <circle class="bg" cx="60" cy="60" r="50"></circle>
        <circle class="progress" cx="60" cy="60" r="50"></circle>
      </svg>
      <div class="percent-text">${percent}%</div>
      <div class="label-text">${label}</div>
    `;

    const progress = circle.querySelector(".progress");
    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = `${circumference}`;
    progress.style.strokeDashoffset = circumference;

    // Animate
    setTimeout(() => {
      const offset = circumference - (percent / 100) * circumference;
      progress.style.strokeDashoffset = offset;
    }, 500);
  });
});

