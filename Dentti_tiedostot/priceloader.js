console.log("LOAD PRICE LIST...");

var filepath = "/denttisivu/user/csv/hinnasto-2.csv";
var filepath = "/denttisivu/user/csv/prices-fi-en-sv.csv";


// Load prices to the HTML table from a CSV file
function updatePrices() {
	jQuery.get(filepath, function(data) {
		//console.log(data);
        var options = { separator: ";"};
		dataObject = $.csv.toObjects(data, options);
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