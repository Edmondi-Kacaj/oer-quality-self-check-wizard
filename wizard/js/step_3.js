
var message_Q4 = "<div class='textfild'>Planen Sie in Ihrer Bildungsressource fremde Materialien/Inhalte zu verwenden?</div><br/><br/>"; 
var q4map = new Map();

function replay_step_3(clicked_id,id) {
	
	q4map.set("q3","Ja, ich möchte fremde Materialien vermischen/zusammenstellen und wiederveröffentlichen")
	q4map.set("q2","Ja, ich möchte fremde Materialien 1 zu 1 verwenden/einbinden und wiederveröffentlichen")
	q4map.set("q4","Ja, ich möchte fremdes Material verändern und wiederveröffentlichen")
	q4map.set("q1","Nein, ich werde ausschließlich eigene Materialien verwenden")
	//q4map.set("q5","Ja, ich möchte fremdes Material verändern.")

    	var par = "step-"+id;
		var seit = "s"+id;
		remove1(clicked_id, id, seit)
		
			//getTextfeldFormat(clicked_id);
		remove();
		
		if(button1.size > 0 && button1.get(clicked_id) != undefined){
			setData(clicked_id)
			}
		 if(button2.size > 0 && button2.get(clicked_id) != undefined){
			 setData(clicked_id)
				}
		 if(button3.size > 0 && button3.get(clicked_id) != undefined){
			 //setData(clicked_id)
			 
				}
		 if(button4.size > 0 && button4.get(clicked_id) != undefined){
			 //setData(clicked_id)
				}
		
	
    	var buttonselect = queryId(clicked_id);

	    $('#smartwizard').smartWizard("next");
	    
	    document.getElementById(par).innerHTML = message_Q4;
	    document.getElementById(seit).innerHTML = id+ " Urheberrechtsbestimmungen";
		
		for (const [key, value] of q4map.entries()) {
			
			if(id == 3){
				
				var button = "<button id="+ key+ " onClick='replay_step_4(this.id, 4)' " +
					" text='"  +key +
					" buttontext='"  +value.split(":")[0] +
					"' class='button3'> " +value.split(":")[0] +"</button></br></br></br>"

			}else{ 
				
				var button = "<button id="+ key+ " onClick='replay_step_4(this.id, 5)' " +
					"text='" +key +
					"'  buttontext='"  +value.split(":")[0] +
					"' class='button3'> " +value.split(":")[0] +"</button></br></br></br>"
			}
			document.getElementById(par).innerHTML += button;
		}
		
			navigation.set("nav3", document.getElementById(clicked_id).getAttribute("text"));
			document.getElementById("footer").innerHTML = "<span style= 'color: #0A1F40; font-size: 20px;'>" +
					"<b>Ihre Auswahl:</b> " +navigation.get("nav1").toUpperCase()+" &#10141; "+navigation.get("nav3").toUpperCase();
	}	

  function setData(clicked_id){
	  
		var button1_select = queryId(clicked_id);
		
		var b1_text = button1_select.getAttributeNode("dataformat").value;
		var b1_tool = button1_select.getAttributeNode("tool").value;
		var b1_heading = button1_select.getAttributeNode("heading").value;
		var b1_intro = button1_select.getAttributeNode("intro").value;

		result.set("dataformat", b1_text);
		result.set("tool", b1_tool);
		result.set("heading", b1_heading);
		result.set("intro", b1_intro);
  }

	function remove1(clicked_id, id,seit){
	 
	 $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
		 if(stepDirection === 'backward'){
			 
			 document.getElementById("download").disabled = true;
			 
			 if(stepNumber == 2 && id != 3){ 
				 result.delete(clicked_id);
				 fildsText = [];
			 }
			 if(stepNumber == 1){ 
				 result.clear();
				 fildsText = [];
				 
			 }
			 if(stepNumber == 3 && id === 3 || stepNumber == 3 && id === 4){ 
				 document.getElementById("step-5").innerHTML ="";
			 }	
		 }
	 });

}
	
	 function remove(clicked_id){
		 document.getElementById("download").disabled = true; 
		 $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
			 if(stepDirection === "forward"){
				 
			 }
			 if(stepDirection === 'backward'){
				 if(stepNumber == 0){ 
					 document.getElementById("footer").innerHTML = "<span style= 'color: &#10141; font-size: 20px;'>" +
						"<b>Ihre Auswahl:</b> " +" Noch nichts ausgewählt!";
				 }
				 if(stepNumber == 1){ 
					 document.getElementById("footer").innerHTML = "<span style= 'color: &#10141; font-size: 20px;'>" +
						"<b>Ihre Auswahl:</b> " +navigation.get("nav1").toUpperCase();
					 result.clear(); 
				 } 
				 if(stepNumber == 2){ 
					 document.getElementById("footer").innerHTML = "<span style= 'color: &#10141; font-size: 20px;'>" +
						"<b>Ihre Auswahl:</b> " +navigation.get("nav1").toUpperCase()+
						" &#10141; "+navigation.get("nav3").toUpperCase();
				 }
				 if(stepNumber == 3){ 
					 document.getElementById("footer").innerHTML = "<span style= 'color: #0A1F40; font-size: 20px;'>" +
						"<b>Ihre Auswahl:</b> " +navigation.get("nav1").toUpperCase()+
						" &#10141; "+navigation.get("nav3").toUpperCase()+" &#10141; "+navigation.get("nav4").toUpperCase();
				 }
			 }
			 
		 });
	} 