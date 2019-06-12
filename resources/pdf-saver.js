function convertTable() {
	var doc = new jsPDF();
	doc.autoTable({html: '#pricetable'});
  	doc.save('hinnasto.pdf');
  	console.log("DONE!")
}

function downloadPrices() {
	// Check whether user wants to download the price list
	var r = confirm("Ladataanko hinnasto?");
	if (r == true) {
		console.log("Write table...");
	  	
	  	setTimeout(function() { convertTable(); } , 300);
	}
}

function highlightService(a) {
	console.log("view service section");
	console.log(a);
	$('.service-section').each(function () {
		console.log($(this));
	    $(this).hide("slow"); //log every element found to console output
	});

	$(a).slideDown();//('slide', {direction: 'left'}, 1400);
}

$( document ).ready(function() {
    highlightService("#palvelumme-intro");
});