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