  // Hover effect for hobbies/projects/experience sections
  const hobbies = document.querySelectorAll('.hobby, .project-card, .experience-item');

  hobbies.forEach(hobby => {
    hobby.addEventListener('mousemove', (e) => {
      const rect = hobby.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      hobby.style.setProperty('--x', `${x}px`);
      hobby.style.setProperty('--y', `${y}px`);
    });
  });

// Hamburger menu logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function adjustMenu() {
  const width = window.innerWidth;

  // Show hamburger and manage nav-links visibility based on screen width
  if (width < 768) {
    hamburger.style.display = 'flex';
    navLinks.classList.remove('expanded'); 
  } else {
    hamburger.style.display = 'none';
    navLinks.classList.remove('expanded'); 
  }
}

// Toggle menu visibility on hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('expanded');
});

// Adjust menu on page load and window resize
window.addEventListener('load', adjustMenu);
window.addEventListener('resize', adjustMenu);

