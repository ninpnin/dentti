console.log("Add collapse..");


function initialize_collapse() {

	var coll = document.getElementsByClassName("collapsible");
	var i;

	var contentElems = document.getElementsByClassName("collapsibleContent");

	for (i = 0; i < coll.length; i++) {
		console.log("Add collapse element");
		coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if (content.style.display === "block") {
			  content.style.display = "none";
			  scrollToServices();
			} else {
			  deactivateCollapsible(coll);
			  this.classList.add("active");
			  hideCollapsible(contentElems);
			  content.style.display = "block";

			  scrollTo(this);
			}
		});
	}

	externalLinks();

}

function hideCurrentLanguage() {
	var current = document.documentElement.lang;

	console.log("Current language: " + current);
	var linkId = current + "Navbar";
	console.log("Hide elem: #" + linkId);

	$("#" + linkId).hide();
}
function scrollToServices() {
	var navbarHeight = $("#header").height();
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#serviceStuff").offset().top - navbarHeight
	}, 500);
}

function scrollTo(elem) {
	var thisHeight = $(elem).height() * 2;
	var navbarHeight = $("#header").height();
	$([document.documentElement, document.body]).animate({
		scrollTop: $(elem).offset().top - navbarHeight - thisHeight
	}, 500);
}
function externalLinks() {
	console.log("Open external links in new tab...");
	$(document.links).filter(function() {
	    return this.hostname != window.location.hostname;
	}).attr('target', '_blank');
}

function deactivateCollapsible(elems) {
	var j;
	for (var j = 0; j < elems.length; j++) {
		console.log("Add collapse element");
		elems[j].classList.remove("active");
	}
}


function hideCollapsible(elems) {
	var j;
	for (var j = 0; j < elems.length; j++) {
		console.log("Add collapse element");
		elems[j].style.display = "none";
	}
}
window.addEventListener('load', 
  function() {
  	hideCurrentLanguage();
    initialize_collapse();

  }, false);