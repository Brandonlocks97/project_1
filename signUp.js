"use strict"

addEventListener("load", function(){
	var coupon = "Coupon10"
	if (window.location.search.includes("?Coupon10")){
		document.getElementById("coupon").value = coupon;
		couponCheck();
	}
});



function couponCheck(){
if(document.getElementById("coupon").value == "Coupon10" 
|| document.getElementById("coupon").value == "coupon10" ){
document.getElementById("couponAccept").style.display = "block";
}
else{
	document.getElementById("couponAccept").style.display = "none";
}
};
	
document.getElementById("submit").addEventListener("click", verify);

function verify() {
	//error keeps track if a verification failed
	var error = 0;
	var fName = document.getElementById("fName");
	var lName = document.getElementById("lName");
	var email = document.getElementById("email");
	
	// checks if there is an @ symbol
	var emailREGX = /\@/; 
	var emailResult = emailREGX.test(email.value); 
	
	//checks if there is an @ symbol in email
	if(emailResult == false){
		email.value = "";
		email.classList.add("placeHolder");
		email.setAttribute("placeHolder", "Enter a valid email");
		error = 1;
	}


	
	//regex to check to see if there are symbols
	var nameREGX1 = /\W/;
	//checks to see if there are numbers
	var nameREGX2 = /\d/;
	
	//checks if first name has no symbols or number and is greater then 3
	if(nameREGX1.test(fName.value) == true || nameREGX2.test(fName.value) == true || fName.value.length < 3){
		fName.value = "";
		fName.classList.add("placeHolder");
		fName.setAttribute("placeHolder", "Eneter a valid name");
		error = 1;
	}	
	//checks if last name has no symbols or number and is greater then 3
	if(nameREGX1.test(lName.value) == true || nameREGX2.test(lName.value) == true || lName.value.length < 3){
		lName.value = "";
		lName.classList.add("placeHolder");
		lName.setAttribute("placeHolder", "Eneter a valid name");
		error = 1;
	}
	//if error is 0 all verifications passed and should submit page
	if(error == 0){
		//terribly optomised way to send data over to other page *TO BE FIXED*
		window.location.href = "main.html"+"?"+fName.value+"?"+lName.value;
	}
		
}