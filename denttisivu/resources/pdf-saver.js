function downloadPrices() {

	var doc = new jsPDF();
	// You can use html:

	console.log("Write table...");

	doc.autoTable({html: '#pricetable'});

	doc.save('hinnasto.pdf');

	console.log("DONE!")
}