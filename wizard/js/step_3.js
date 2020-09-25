

var q4map = new Map();

function replay_step_3(clicked_id,id) {
	
//	document.getElementById("step-3").innerHTML="";
	
//	document.getElementById("s3").innerHTML ="3 Struktur und Orientierung";
	
	
	var button1 = "<button id='1' class='textfild' onClick='queryById(4,this.id)'>Die Struktur ist einfach und übersichtlich. Der Lehr- bzw. Lernablauf kann jederzeit unterbrochen werden. Auf alle (zuvor dargestellten) Lehr- bzw. Lerninhalte kann jederzeit zugegriffen werden. (5)</button>" ;
	
//	var button2 = "<button id='2' class='textfild' onClick='replay_step_4(this.id, 3)'>Die Struktur ist weitgehend übersichtlich. Zumindest an einigen Stellen besteht die Möglichkeit den Lehr- bzw. Lernablauf zu unterbrechen bzw. zu vorher dargestellten Inhalten zurückzukehren. (3)</button>" ;
//	
//	var button3 = "<button id='3' class='textfild' onClick='replay_step_4(this.id, 3)'>Die Struktur ist unübersichtlich bzw. unverständlich oder die Lehr- bzw. Lernsequenz kann nicht unterbrochen und an der gleichen Stelle fortgesetzt werden. (1)</button>" ;
//	
	document.getElementById("step-3").innerHTML +="</br></br>"+ button1;
	$('#smartwizard').smartWizard("next");
}



//	function remove1(clicked_id, id,seit){
//	 
//	 $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
//		 if(stepDirection === 'backward'){
//			 
//			 document.getElementById("download").disabled = true;
//			 
//			 if(stepNumber == 2 && id != 3){ 
////				 result.delete(clicked_id);
//				 fildsText = [];
//			 }
//			 if(stepNumber == 1){ 
//				 result.clear();
//				 fildsText = [];
//				 
//			 }
////			 if(stepNumber == 3 && id === 3 || stepNumber == 3 && id === 4){ 
////				 document.getElementById("step-5").innerHTML ="";
////			 }	
//		 }
//	 });
//
//}
	
//	 function remove(clicked_id){
//		 document.getElementById("download").disabled = true; 
//		 $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
//			 if(stepDirection === "forward"){
//				 
//			 }
//			 if(stepDirection === 'backward'){
//				 if(stepNumber == 0){ 
//					 document.getElementById("footer").innerHTML = "<span style= 'color: &#10141; font-size: 20px;'>" +
//						"<b>Ihre Auswahl:</b> " +" Noch nichts ausgewählt!";
//				 }
//				 if(stepNumber == 1){ 
//					 document.getElementById("footer").innerHTML = "<span style= 'color: &#10141; font-size: 20px;'>" +
//						"<b>Ihre Auswahl:</b> " +navigation.get("nav1").toUpperCase();
//					 result.clear(); 
//				 } 
//				 if(stepNumber == 2){ 
//					 document.getElementById("footer").innerHTML = "<span style= 'color: &#10141; font-size: 20px;'>" +
//						"<b>Ihre Auswahl:</b> " +navigation.get("nav1").toUpperCase()+
//						" &#10141; "+navigation.get("nav3").toUpperCase();
//				 }
//				 if(stepNumber == 3){ 
//					 document.getElementById("footer").innerHTML = "<span style= 'color: #0A1F40; font-size: 20px;'>" +
//						"<b>Ihre Auswahl:</b> " +navigation.get("nav1").toUpperCase()+
//						" &#10141; "+navigation.get("nav3").toUpperCase()+" &#10141; "+navigation.get("nav4").toUpperCase();
//				 }
//			 }
//			 
//		 });
//	} 