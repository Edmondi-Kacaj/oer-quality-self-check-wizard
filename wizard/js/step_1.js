
var button1 = new Map();
var button2 = new Map();
var button3 = new Map();
var button4 = new Map();

let result = new Map();

var navigation = new Map();

function replay_step_1(clicked_id) {

	var buttonselect = queryId(clicked_id);
	
		
		var button1 = "<button id='1' class='textfild' onClick='queryById(3,this.id)'>Die OER verfügt über ein einheitliches und den Inhalten angemessenes Design. Alle Texte sind gut lesbar und alle Grafiken gut erkennbar. (5)</button>" ;

		document.getElementById("step-2").innerHTML +="</br></br>"+ button1;
		


//	$('#smartwizard').smartWizard("next");
}

	function queryId(clicked_id){
		var id = "#" + clicked_id;
	    var buttonselect = document.querySelector(id);
	    return buttonselect;
	}
	
	

		
	

	function remove3(clicked_id){
		 
		 $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
			 if(stepDirection === 'backward'){
				 if(stepNumber == 0){

					 fildsText = [];
					 result.clear();
					 button1.clear();
					 button2.clear();
					 button3.clear();
					 button4.clear();
				 }
			 }
		 });
	}