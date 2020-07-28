
var button1 = new Map();
var button2 = new Map();
var button3 = new Map();
var button4 = new Map();

let result = new Map();

var navigation = new Map();

function replay_step_1(clicked_id) {
	document.getElementById("step-2").innerHTML="";
	var buttonselect = queryId(clicked_id);
	
	document.getElementById("s2").innerHTML = "2 Design und Lesbarkeit";
	
	
		
		
		
		var button1 = "<button id='1' class='textfild' onClick='replay_step_3(this.id, 3)'>Die OER verfügt über ein einheitliches und den Inhalten angemessenes Design. Alle Texte sind gut lesbar und alle Grafiken gut erkennbar. (5)</button>" ;
		
		var button2 = "<button id='2' class='textfild' onClick='replay_step_3(this.id, 3)'>Die Struktur ist weitgehend übersichtlich. Zumindest an einigen Stellen besteht die Möglichkeit den Lehr- bzw. Lernablauf zu unterbrechen bzw. zu vorher dargestellten Inhalten zurückzukehren. (3)</button>" ;
		
		var button3 = "<button id='3' class='textfild' onClick='replay_step_3(this.id, 3)'>Die Struktur ist unübersichtlich bzw. unverständlich oder die Lehr- bzw. Lernsequenz kann nicht unterbrochen und an der gleichen Stelle fortgesetzt werden. (1)</button>" ;
		
		document.getElementById("step-2").innerHTML +="</br></br>"+ button1+"</br>"+button2+"</br>"+button3;
		


	$('#smartwizard').smartWizard("next");
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