var varArr = [] //new variables placed inside arrays
var goodToGo; //validation
var variable; //variable

function validateVariables(){
   variable=document.getElementById("textIn").value;//get input from text box
   for(var i = 0; i <varArr.length; i++){//loop through the array to check if value exists

	   if(variable.match(varArr[i])){
	   		document.getElementById("textIn").style.color="red";
	   		document.getElementById("textIn").style.background="yellow";
	   		goodToGo=true;
	   	}
	   	else{
	   		document.getElementById("textIn").style.color="black";
	   		document.getElementById("textIn").style.background="none";
	   		goodToGo = false;
   		}

   }
}

function addVariables(){
	
	var rand = 0;
	validateVariables();

   if(goodToGo == true){
   	//create a ul element
        var el = document.createElement("li");                 
		var textNode = document.createTextNode(variable);         
		el.appendChild(textNode);                              
		document.getElementById("newVariables").appendChild(el);
       }
   }

}