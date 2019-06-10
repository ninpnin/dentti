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