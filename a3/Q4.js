function calculateTotal(){
//=================================flowers=================================
	//amt of flowers
	var roseUnit = document.getElementById("rose").value;
	var lilyUnit = document.getElementById("lily").value;
	var scallaUnit = document.getElementById("scalla").value;
	var orchidUnit = document.getElementById("orchid").value;
	var daisyUnit = document.getElementById("daisy").value;

	var flowerTotalPrice;

// if no input in any box
	if (roseUnit == "" || lilyUnit == "" || scallaUnit == "" || orchidUnit == "" || daisyUnit == "" ){
		alert("All Unit Boxes have to be filled.");
	}
//if inputs are not numbers
	else if (isNaN(roseUnit)||isNaN(lilyUnit)||isNaN(scallaUnit) || isNaN(orchidUnit)||isNaN(daisyUnit)) {
		alert("Input must be numbers.");
	}

//price for flowers
	else {
		var rosePrice = roseUnit* 5.5;
		var lilyPrice = lilyUnit* 7.5;
		var scallaPrice = scallaUnit * 4.0;
		var orchidPrice = orchidUnit * 8.00;
		var daisyPrice = daisyUnit * 7.00;

		flowerTotalPrice = rosePrice + lilyPrice + scallaPrice + orchidPrice + daisyPrice;
	}
//=================================flowers end=================================

//=================================delivery=================================
//delivery price
	var deliveryPrice;

//standard delivery

	if (document.getElementById("standardD").checked == true) {
		deliveryPrice = 2;
	}
//premium delivery
	else {
		deliveryPrice = 6;
	}
//=================================delivery end =================================

//display calclations

	var totalPrice = flowerTotalPrice + deliveryPrice;
	var textResult;

	textResult = "Red Roses(units = " + roseUnit + "):$" + rosePrice + "<br/>";

	textResult = textResult + "Yellow Lily (units = " + lilyUnit + "):$" + lilyPrice + "<br/>";

	textResult = textResult + "White Mini Calla (units = " + scallaUnit + "): $" + scallaPrice + "<br/>";

	textResult = textResult + "Pink Orchid (units = " + orchidUnit + "): $" + orchidPrice + "<br/>";

	textResult = textResult + "Orange Daisy (units = " +daisyUnit + "): $" + daisyPrice + "<br/>";

	textResult = textResult + "Delivery: $" + deliveryPrice + "<br/><br/>";

	textResult = textResult + "Final Total: $" + totalPrice;

	//display details on the div

	document.getElementById("info").innerHTML=textResult;

}
