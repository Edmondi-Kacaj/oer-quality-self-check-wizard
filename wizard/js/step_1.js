var message2 = "<div class='textfild'>Welche Mediantypen möchten Sie erstellen?</div><br/>"
var message5 = "<div class='textfild'>Auf welche Lernhandlung für Studierende soll Ihr Matrial ziehen?</div><br/>"
var message6 = "<div class='textfild'>Auf Lern- Oder Lehreneinheit möchten Sie planen?</div><br/>"
var message7 = "<div class='textfild'>Welche Lehranzt möchten Sie folgen?</div><br/>"
	
var button1 = new Map();
var button2 = new Map();
var button3 = new Map();
var button4 = new Map();

let result = new Map();

var navigation = new Map();

function replay_step_1(clicked_id) {

	

	button1.set("b1_1", b1_1_array);
	button1.set("b1_2", b1_2_array);
	button1.set("b1_3", b1_3_array);
	button1.set("b1_4", b1_4_array);
	button1.set("b1_5", b1_5_array);
	button1.set("b1_6", b1_6_array);
	button1.set("b1_7", b1_7_array);
	//button1.set("b1_8", b1_8_array);
	button1.set("b1_9", b1_9_array);
	button1.set("b1_10", b1_10_array);
	button1.set("b1_11", b1_11_array);
	button1.set("b1_12", b1_12_array);


	var buttonselect = queryId(clicked_id);
	
	remove3(clicked_id)
	
	if (clicked_id == "step1-b1") {
		tooltip();
		document.getElementById("step-2").innerHTML = message2;
		document.getElementById("s2").innerHTML = "2 Format";

		for (const [key, value] of button1.entries()) {

			var button = "<button id="+ key+ " onClick='replay_step_3(this.id, 3)' " +
							   	  "  tool='"+value['tool'] +
							   	  "' heading='"+value['heading'] +
							   	  "' intro='"+value['intro'] +
							   	  "' dataformat='"+value['dataformat'] + 
							   	  "' text='"+value['b1_1'] +
							   	  "' class='button2'> " +value['b1_1'] +"</button>"
			  document.getElementById("step-2").innerHTML += button;
		}	
	}

	if (clicked_id == "step1-b2") {
		tooltip();
		button2.set("b2_1", b2_1_array);
		button2.set("b2_2", b2_2_array);
		button2.set("b2_3", b2_3_array);
		button2.set("b2_4", b2_4_array);
		button2.set("b2_5", b2_5_array);
		button2.set("b2_6", b2_6_array);
		button2.set("b2_7", b2_7_array);
		button2.set("b2_8", b2_8_array);
		//button2.set("b2_9", b2_9_array);
		
			
			document.getElementById("step-2").innerHTML = message5;
			document.getElementById("s2").innerHTML = "2 Lehrnhandlung";

			for (const [key, value] of button2.entries()) {
				
				var button = "<button id="+ key+ " onClick='replay_step_3(this.id, 3)' " +
			   	  "  tool='"+value['tool'] +
			   	  "' heading='"+value['heading'] +
			   	  "' intro='"+value['intro'] +
			   	  "' dataformat='"+value['dataformat'] +
			   	  "' text='"+value['b2_1'] +
			   	  "' class='button2'> " +value['b2_1'] +"</button>"
				  document.getElementById("step-2").innerHTML += button;
				
			}
			
	}
	
	if (clicked_id == "step1-b3") {
		
		button3.set("b3_1", b3_1_array);
		button3.set("b3_2", b3_2_array);
		button3.set("b3_3", b3_3_array);
		button3.set("b3_4", b3_4_array);
		button3.set("b3_5", b3_5_array);
		button3.set("b3_6", b3_6_array);
		button3.set("b3_7", b3_7_array);
		button3.set("b3_8", b3_8_array);
		button3.set("b3_9", b3_9_array);
		button3.set("b3_10", b3_10_array);
		button3.set("b3_11", b3_11_array);
		button3.set("b3_12", b3_12_array);

		tolltip1();
		document.getElementById("step-2").innerHTML = message6;
		document.getElementById("s2").innerHTML = "2 Lehrphasen";
		
		for (const [key, value] of button3.entries()) {

			var button = "<button disabled = true id="+ key+ " onClick='replay_step_3(this.id, 3)' " +
		   	  "  tool='"+value['tool'] +
		   	  "' heading='"+value['heading'] +
		   	  "' intro='"+value['intro'] +
		   	  "' dataformat='"+value['dataformat'] +
		   	  "' text='"+value['b3_1'] +
		   	  "' class='button2'> " +value['b3_1'] +"</button>"
			  document.getElementById("step-2").innerHTML += button;
			
		}
		
	}
	
	if (clicked_id == "step1-b4") {
		tolltip1();
		button4.set("b4_1", b4_1_array);
		button4.set("b4_2", b4_2_array);
		button4.set("b4_3", b4_3_array);
		button4.set("b4_4", b4_4_array);
		
		
		document.getElementById("step-2").innerHTML = message7;
		document.getElementById("s2").innerHTML = "2 Lehansatz";

		for (const [key, value] of button4.entries()) {
			
			var button = "<button disabled = true id="+ key+ " onClick='replay_step_3(this.id, 3)' " +
		   	  "  tool='"+value['tool'] +
		   	  "' heading='"+value['heading'] +
		   	  "' intro='"+value['intro'] +
		   	  "' dataformat='"+value['dataformat'] +
		   	  "' text='"+value['b4_1'] +
		   	  "' class='button2'> " +value['b4_1'] +"</button>"
			  document.getElementById("step-2").innerHTML += button;	
		}
	}
		
		navigation.set("nav1", document.getElementById(clicked_id).getAttribute("text"));
		document.getElementById("footer").innerHTML = "<span style= 'color: &#10141; font-size: 20px;'><b>Ihre Auswahl:</b> "
		+navigation.get("nav1").toUpperCase();
		
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