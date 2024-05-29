document.addEventListener("DOMContentLoaded", function() {
    const researchNavbarLinks = document.querySelectorAll('#ReasearchNavbar1 a');
  
    researchNavbarLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });