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


//  Pop Up Javascript Code withe Images and Text Links

document.addEventListener('DOMContentLoaded', () => {
    const images = [
      { src: 'https://i.postimg.cc/LXVZzp90/canvaa.png', link: 'https://mrabhi2k3.me/Canva-Premium-Invites/' },
      { src: 'https://i.postimg.cc/nrzMB9wC/deadpool.png', link: 'https://t.me/+IMxwMmBx89tkZDU1' },
      { src: 'https://i.postimg.cc/x8xJ43bv/githubpfp.png', link: 'https://github.com/MrAbhi2k3' },
      { src: 'https://i.postimg.cc/QM3tSyyL/kkiill.png', link: 'https://telegram.me/KDrama_Requests' }
      // { src: 'https://images.unsplash.com/photo-1602524811062-2949cbe1a9fb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D', link: 'https://unsplash.com/photos/photo-1602524811062-2949cbe1a9fb' },
      // { src: 'https://images.unsplash.com/photo-1701220909851-5bcf92c56198?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8', link: 'https://unsplash.com/photos/photo-1701220909851-5bcf92c56198' },
      // { src: 'https://images.unsplash.com/photo-1711264212281-17993e952e44?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8', link: 'https://unsplash.com/photos/photo-1711264212281-17993e952e44' },
      // { src: 'https://images.unsplash.com/photo-1718859899271-f75f71fc083e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8', link: 'https://unsplash.com/photos/photo-1718859899271-f75f71fc083e' },
      // { src: 'https://images.unsplash.com/photo-1536334211568-eaab419708f3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1MDYyMzV8fGVufDB8fHx8fA%3D%3D', link: 'https://unsplash.com/photos/photo-1536334211568-eaab419708f3' },
      // { src: 'https://images.unsplash.com/photo-1536420123302-59208ab773aa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w1MDYyMzV8fGVufDB8fHx8fA%3D%3D', link: 'https://unsplash.com/photos/photo-1536420123302-59208ab773aa' }
    ];

    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    const popupLink = document.getElementById('popupLink');
    const closeButton = document.getElementById('closeButton');

    // Function to show the pop-up with a random image and link
    const showPopup = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      popupImage.src = images[randomIndex].src;
      popupLink.href = images[randomIndex].link;
      popup.classList.remove('hidden');
    };

    // Function to close the pop-up
    const closePopup = () => {
      popup.classList.add('hidden');
    };

    closeButton.addEventListener('click', closePopup);

    showPopup();
  });
