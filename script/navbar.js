document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown-magic');
    
    dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('.dropdown-toggle');
      
      toggle.addEventListener('show.bs.dropdown', () => {
        dropdown.classList.add('animating');
        setTimeout(() => {
          dropdown.classList.add('show');
        }, 10);
      });
      
      toggle.addEventListener('hide.bs.dropdown', () => {
        dropdown.classList.remove('show');
        setTimeout(() => {
          dropdown.classList.remove('animating');
        }, 300);
      });
    });
  });