var dom;

function getElementAmpersandPipe(){ 
	dom = document.getElementById("field"); //get input
	dom.addEventListener("blur",convertAmpersandPipe, false);// step 2. of question
	}

function convertAmpersandPipe(){ 
	var text = dom.value;//get input
	var string = "";
	
	for (var i = 0; i < text.length; i++) { //loop through every character
	   if(text.charAt(i) == "&"){ //if character is &
			string = string + "and";
	   }else if(text.charAt(i) == "|"){ //if character is |
			string = string + "or";
	   }else{
	   		string = string + text.charAt(i);
	   }
	}
	document.getElementById("output").value = string;
}

window.addEventListener( "load", getElementAmpersandPipe, false );
