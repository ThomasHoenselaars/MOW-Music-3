const fullPage = new fullpage('#fullpage', {
	//options here
    autoScrolling:true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
    menu: '#menu',
    scrollHorizontally: true,
    sectionsColor: ['#ffffff', '#1BBC9B', '#7E8F7C','#C63D0F', ''],
    navigation: true,
    navigationTooltips: ['Home', 'About', 'Music', 'Book A Studio', 'Contact'],
    controlArrows: true,
    responsiveWidth: 900
    
});

// MOBILE MENU

const mobileHamburger = document.querySelector('.mobile-hamburger');
const mobileMenu = document.getElementById('mobile-menu');

mobileHamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-active');
});

mobileMenu.addEventListener('click', (e) => {
    if(e.target.nodeName === 'A') {
    mobileMenu.classList.remove('menu-active');
    }
});

// DOWN ARROW



