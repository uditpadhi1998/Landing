/**
 * Animation utilities for the landing page
 */

// Initialize IntersectionObserver for fade-in grid animations
export const initAnimation = () => {
  // Fade-in grid items as they enter viewport
  const gridItems = document.querySelectorAll('.grid-fade-in > *');
  if (gridItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // Optional: Remove class when element leaves viewport
          // entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px' // Triggers slightly before element enters viewport
    });
    
    gridItems.forEach(item => {
      observer.observe(item);
    });
  }
  
  // Initialize other custom animations here
};

// Smooth scroll to section
export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};