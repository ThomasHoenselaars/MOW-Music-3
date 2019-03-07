const fullPage = new fullpage('#fullpage', {
	//options here
    autoScrolling:true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
    scrollHorizontally: true,
    sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C','#C63D0F', '#5f5f5f'],
    navigation: true,
    navigationTooltips: ['Home', 'About', 'Music', 'Book A Studio', 'Contact'],
	showActiveTooltip: false
});