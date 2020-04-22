console.log("LOAD PRICE LIST...");

var filepath = "../hinnasto.csv";

$("body").attr({
    "data-spy": "scroll",
    "data-target": ".navbar"
  }).scrollspy({
    offset: 150
  });


// Load prices to the HTML table from a CSV file
function updatePrices() {
	jQuery.get("hinnasto.csv", function(data) {
		//console.log(data);
		dataObject = $.csv.toObjects(data);
		//console.log(dataObject);

        for (var i = 0; i < dataObject.length; i++) {
        	//console.log(dataObject[i]);
            //console.log(dataObject[i]["FIN"]);

            row ="<tr>\n";
            row += "<td>" + dataObject[i]["FIN"].trim() + "</td>\n";
            row += "<td>" + dataObject[i]["PRICE"].trim() + "</td>\n";
            row += "<td>" + dataObject[i]["KELA"].trim() + "</td>\n";
            row += "<td>" + dataObject[i]["DUE"].trim() + "</td>\n";
            row += "</tr>";

            //console.log(row);

            $("#priceTable").append(row);
        }
	});
}

updatePrices();