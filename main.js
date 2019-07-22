"use strict"

var getName = window.location.search;
if(!getName){
	//*TO DO* Will show login button instead of name
}
else{
	/* if getName */
	//*somehow* removes all ? in a string of text
	var formatName = /.([\?]\?)|\?/;
	//should remove all ? from text although its removing one each time *temp fix* *TO BE FIXED LATER* 
	getName = getName.replace(formatName, "");
	getName = getName.replace(formatName, " ");

	//pulls out lName from getName leaving only fName left withing getName
	var formatlName = /^.*(?=(\ ))/;

	var lName = getName.replace(formatlName,"");
	//removes front spaceing from lName
	fName = lName.replace(/\ /, "");
	var fName = getName.replace(lName, "");
	//Adds name to header
	document.getElementById("welcome").innerHTML += fName;
	
	document.getElementById("account").innerHTML += fName +" "+ lName;
}


