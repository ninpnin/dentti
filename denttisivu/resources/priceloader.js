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