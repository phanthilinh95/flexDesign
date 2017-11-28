var slider = document.getElementById('slider-st');
noUiSlider.create(slider, {
	start: [0 , 100],
	connect: true,
	tooltips: true,
	range: {
		'min': 0,
		'max': 100
	}

});
