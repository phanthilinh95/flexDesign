var slider = document.getElementById('slider');
var wNumb;
noUiSlider.create(slider, {
	start: [0,100],
	connect: true,
	tooltips: true,
	// format: wNumb({
 // 	decimals: 0
 // 	}),
	range: {
		'min': 0,
		'max': 100
	}

});

