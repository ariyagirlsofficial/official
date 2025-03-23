// Member Bio Modal Functionality
const memberCards = document.querySelectorAll('.member-card');
const modal = document.getElementById('memberModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close-modal');

// Member data with actual band information
const memberData = {
    member1: {
        name: 'vocalist rapper (정나리)',
        instrument: 'Vocal',
        bio: 'Nari Jung (정나리) Born: March 12, 2003 Nationality: Brazilian / South Korean Profile: Nari Jung is the rapper of the group, standing out with her powerful rhymes and striking stage presence. With long blue hair and purple streaks, she combines her bold style with impactful and attitude-filled lyrics. From a young age, Nari always dreamed of being in the spotlight, and her rapping skills reflect her determination and confidence.'
    },
    member2: {
        name: 'Haeun Lee (이해은)',
        instrument: 'supporting vocalist',
        bio: 'Haeun Lee (이해은) Born: April 21, 2006 Nationality: South Korean / Japanese Profile: With her long pink hair, Haeun is the group’s supporting vocalist. Her soft voice perfectly complements the more delicate moments in their songs, and she is known for her ability to harmonize beautifully with the other members. Despite being the youngest in the group, Haeun brings artistic maturity to her performances, charming fans with her sweetness and captivating presence.'
    },
    member3: {
        name: 'Miyu Takahashi (高橋 美優) ',
        instrument: 'main vocalist',
        bio: 'Miyu Takahashi (高橋 美優) Born: November 5, 2004 Nationality: Brazilian / Japanese Profile: Miyu is the group’s main vocalist, known for her versatile and emotional voice. Her vibrant red hair complements her unique presence, and her ability to hit high notes and convey deep emotions makes her one of the most beloved members among fans. In addition to her vocal skills, Miyu is also a talented dancer, contributing choreography that captures the audience’s attention.'
    },
    // member4: {
    //     name: 'Julia Martins',
    //     instrument: 'Keyboards & Synth',
    //     bio: 'Julia\'s masterful keyboard work and innovative synth sounds add depth and atmosphere to Harmonic Pulse\'s music. Her classical background and electronic music expertise bring a unique dimension to the band\'s compositions.'
    // }
};

// Modal event listeners
memberCards.forEach(card => {
    card.addEventListener('click', () => {
        const memberId = card.getAttribute('data-member');
        const member = memberData[memberId];
        modalContent.innerHTML = `
            <h2>${member.name}</h2>
            <h3>${member.instrument}</h3>
            <p>${member.bio}</p>
        `;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});




// Gallery filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 50);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 500);
            }
        });
    });
});

// Form Handling
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    // Here you would typically send the form data to a server
    alert('Soon');
    contactForm.reset();
});

// newsletterForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const email = newsletterForm.querySelector('input[type="email"]').value;
    // Here you would typically handle newsletter subscription
//     alert('Thanks for subscribing! You\'ll receive our updates soon.');
//     newsletterForm.reset();
// });

// Menu Toggle Functionality
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});


// Fechar menu quando um item de navegação for clicado
const navLinks = document.querySelectorAll('.nav-menu li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Verifica se o menu está ativo (no modo mobile)
        if (navMenu.classList.contains('active')) {
            // Remove as classes active para fechar o menu
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});