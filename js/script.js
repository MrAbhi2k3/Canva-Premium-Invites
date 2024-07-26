document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', function() {
        preloader.style.display = 'none';
    });

    // Hamburger Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // 3D Hover Effect for Links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'translateY(-5px)';
            link.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'translateY(0)';
            link.style.boxShadow = 'none';
        });
    });

    // Glitter Effect
    document.querySelectorAll('.glitter-target').forEach(target => {
        target.addEventListener('mousemove', createGlitter);
    });

    function createGlitter(e) {
        const glitter = document.createElement('div');
        glitter.classList.add('glitter');
        glitter.style.left = `${e.clientX}px`;
        glitter.style.top = `${e.clientY}px`;
        document.body.appendChild(glitter);

        setTimeout(() => {
            glitter.remove();
        }, 1500);
    }
});
