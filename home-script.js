"use strict";
addEventListener("load",function(){
	if(window.location.search == "?logout"){
		window.alert("You have sucsessfully been logged out!");
		window.location.search = "";
	}
});
//scrolls into view of next part of page
document.getElementById("scrollBtn1").addEventListener("click", function(){
	document.getElementById("secondHeader").scrollIntoView({behavior: 'smooth'});
});
//scrolls into view of next part of page
document.getElementById("scrollBtn2").addEventListener("click", function(){
	document.getElementById("thirdHeader").scrollIntoView({behavior: 'smooth'});
});

/* //on click of hamburger icon, display nav bar
var hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", function(){
hamburger.style.display = "none";
document.getElementById("navBar").style.display = "block";
});

//on click of exit icon display hamburger
var exit = document.getElementById("exit");
exit.addEventListener("click", function(){
hamburger.style.display = "block";
document.getElementById("navBar").style.display = "none";
});
 */
 
 // Left nav bar on second Scroll page buttons to change out text in center
 var about = document.getElementById("secondAbout");
 var pricing = document.getElementById("secondPricing");
 var contact = document.getElementById("secondContact");
 var more = document.getElementById("secondMore");
 
 var aboutText = document.getElementById("aboutText");
 var pricingText = document.getElementById("pricingText");
 var contactText = document.getElementById("contactText");
 var moreText = document.getElementById("moreText");
 
about.addEventListener("click", function(){
	aboutText.setAttribute("style", "display: block");
	pricingText.setAttribute("style", "display: none");
	contactText.setAttribute("style", "display: none");
	moreText.setAttribute("style", "display: none");
	});
pricing.addEventListener("click", function(){
	pricingText.setAttribute("style", "display: block");
	aboutText.setAttribute("style", "display: none");
	contactText.setAttribute("style", "display: none");
	moreText.setAttribute("style", "display: none");
});
contact.addEventListener("click", function(){
	contactText.setAttribute("style", "display: block");
	pricingText.setAttribute("style", "display: none");
	aboutText.setAttribute("style", "display: none");
	moreText.setAttribute("style", "display: none");
});
more.addEventListener("click", function(){
	moreText.setAttribute("style", "display: block");
	contactText.setAttribute("style", "display: none");
	pricingText.setAttribute("style", "display: none");
	aboutText.setAttribute("style", "display: none");
	
});
