$(document).ready(function() {
  $(".title").lettering();
});

$(document).ready(function() {
  animation();
	jQuery.get('text/fin/intro-text.txt', function(data) {
	console.log(data);
	$("#intro-text").html(data);
});

}, 10);


function animation() {
  console.log("moi");
  var title1 = new TimelineMax();
  title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".title span", 0.5, 
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.075);
  title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
}
