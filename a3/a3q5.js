function expertSuggestion(){
	var option = document.getElementById("priceRange");
	var wantedPrice = option.options[option.selectedIndex].value;

	if(wantedPrice > 50 && wantedPrice<100 && document.getElementById("downtown").checked == true){
		document.getElementById("q5").hidden = false;
	}

}