function downloadPrices() {
	// Check whether user wants to download the price list
	var r = confirm("Ladataanko hinnasto?");
	if (r == true) {
		console.log("Write table...");
		var doc = new jsPDF();
		doc.autoTable({html: '#pricetable'});
	  	doc.save('hinnasto.pdf');
	  	console.log("DONE!")
	}
}