function search(){
			
				var textIn = document.getElementById("textInput").value; //get input from text area
				var regexV = document.getElementById("regexTest").value; // get input for regex
				var regexModif = document.getElementById("regexMod").value; //get wanted pattern input
				var count = 0;

				if (textIn =="") {
					var outString = "No Strings"
				}
				else{
					var splitElement = document.getElementById("splitChar").value;
					var arrayChar = textIn.split(splitElement);
					var regex = new RegExp(regexV, regexModif);
						for (var i = 0; i <= arrayChar.length - 1; i++) {
							if(regex.test(arrayChar[i]) == true)
								count++;
						}
						//testing the regex for the elements in the split string


					var outString = "there are " + arrayChar.length + " words and " + count + " matching the regex"; 
				}
				document.getElementById("newParag").innerHTML = outString;
		}