console.log("LOAD PRICE LIST...");

var csv = "../hinnasto.csv";
var ex = "h1, h2\nmo,mo\nko,lo"
var data = $.csv.toObjects(ex);

console.log(data);
console.log("DONE!");

$("body").attr({
    "data-spy": "scroll",
    "data-target": ".navbar"
  }).scrollspy({
    offset: 150
  });


// Load prices to the HTML table from a CSV file
function updatePrices() {
	jQuery.get('mock-prices.csv', function(data) {
		//console.log(data);
		dataObject = $.csv.toObjects(data);
		//console.log(dataObject);

        for (var i = 0; i < dataObject.length; i++) {
        	//console.log(dataObject[i]);
            //console.log(dataObject[i]["FIN"]);

            row ="<tr>\n";
            row += "<td>" + dataObject[i]["FIN"]+ "</td>\n";
            row += "<td>" + dataObject[i]["PRICE"]+ "</td>\n";
            row += "<td>" +dataObject[i]["KELA"]+ "</td>\n";
            row += "<td>" +dataObject[i]["DUE"]+ "</td>\n";
            row += "</tr>";

            //console.log(row);

            $("#priceTable").append(row);
        }
	});
}

updatePrices();