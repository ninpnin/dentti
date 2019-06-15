// A function for rotating the images in the services section
function switchImage() {
	var img1 = "img/nalle-odottaa.jpg"
	var img2 = "img/hammasharja.jpg"
	var img3 = "img/cerec.jpg"
	var img4 = "img/hammasharja2.jpg"

	// Randomize; TODO: make deterministic
	// TODO: adjust placing differently for each image
	var random_boolean = Math.random() >= 0.666;
	if ($( document ).width() < 1081) {
		console.log("harja 2");
		$("#teddyimage").css({"background-image": "url("+img4+")"});
	} else {
		if (random_boolean) {
			console.log("nalle");
			$("#teddyimage").css({"background-image": "url("+img1+")"});
		} else if (Math.random() >= 0.50) {
			console.log("harja");
			$("#teddyimage").css({"background-image": "url("+img2+")"});
		} else {
			console.log("cerec");
			$("#teddyimage").css({"background-image": "url("+img3+")"});
		}
	}

	// Set 8 second timeout for changing the image
	setTimeout(function() { switchImage(); }, 8000);
}

// Push down the first domino piece
switchImage();