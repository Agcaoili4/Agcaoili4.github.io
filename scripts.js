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
  if (width < 768) {
    hamburger.style.display = 'flex';
    navLinks.classList.remove('desktop'); 
  } else {
    hamburger.style.display = 'none';
    navLinks.classList.remove('active');  
    navLinks.classList.add('desktop');    
  }
}

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Adjust menu on page load and window resize
window.addEventListener('load', adjustMenu);
window.addEventListener('resize', adjustMenu);
