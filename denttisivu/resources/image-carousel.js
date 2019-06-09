function switchImage() {
	var img1 = "img/nalle-odottaa.jpg"
	var img2 = "img/hammasharja.jpg"
	var random_boolean = Math.random() >= 0.5;

	if (random_boolean) {
		console.log("nalle");
		$("#teddyimage").css({"background-image": "url("+img1+")"});
	} else {
		console.log("harja");
		$("#teddyimage").css({"background-image": "url("+img2+")"});
	}

	setTimeout(function() { switchImage(); }, 2000);
}

switchImage();