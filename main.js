
        // Get references to the navbar collapse element and all the navbar links
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

        // Add click event listeners to navbar links
        navbarLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Close the navbar after a short delay to allow the transition to complete
                setTimeout(() => {
                    navbarCollapse.classList.remove('show');
                }, 300); // Adjust delay as needed
            });
        });
