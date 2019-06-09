function downloadPrices() {

	var doc = new jsPDF();
	// You can use html:

	console.log("Write table...");

	doc.autoTable({html: '#pricetable'});

	var r = confirm("Ladataanko hinnasto?");
	if (r == true) {
	  doc.save('hinnasto.pdf');
	}

	console.log("DONE!")
}