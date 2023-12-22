document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('main section');
  
    function showSection(sectionId) {
      sections.forEach(section => {
        if (section.id === sectionId) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    }
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
        const sectionId = this.getAttribute('href').substring(1);
        showSection(sectionId);
  
        // Additional content specific to the Contact section
        if (sectionId === 'contact') {
          const contactContent = `
            <h2>Contact Me</h2>
            <p>Feel free to reach out to me via email at example@email.com.</p>
            <!-- Additional contact information or a contact form can be added here -->
          `;
          document.getElementById('contact').innerHTML = contactContent;
        }
      });
    });
  
    // Show the 'Home' section by default when the page loads
    showSection('home');
  });
  