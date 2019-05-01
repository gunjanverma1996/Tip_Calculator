
//reading input and assigning a variable to it
function calculateTip(){
	
	var billamt = document.getElementById("billamt").value;
	var billService = document.getElementById("billService").value;
	var billppl = document.getElementById("billppl").value;

//validations on input
	if (billamt == "" || billService == 0) {
		alert("Please Enter Values");
		return;
	}

	if (billppl == "" || billppl <=1) {
		alert("Please Enter Number Of People");
		return;
	}

//Calculate calculateTip
	var total = (parseInt(billamt) * parseInt(billService)) / parseInt(billppl);

	total = Math.round(total) / 100;

	document.getElementById("totalAmt").style.fontSize = "25px";
	document.getElementById("totalAmt").style.color = "black";
	document.getElementById("totalAmt").style.marginBottom = "1rem !important";
	document.getElementById("totalAmt").innerHTML = total + " each";

}
