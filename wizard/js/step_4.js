
var message11a = "<div class='textfild'>Welche Nutzungsrechte möchten Sie anderen einräumen?</div></br></br>"; 
var message11b = "<div class='textfild'>Welche Nutzungsrechte werden bei dem fremden Material, auf das Sie zurückgreifen, eingeräumt?</div></br>";
var q5map = new Map();

var q6map = new Map();



function replay_step_4(clicked_id, id) {
	licenseTolltip();
	
	document.getElementById("download").disabled = true; 
	q5map.set("l1", license_1)
	q5map.set("l2", license_2)
	q5map.set("l3", license_3)
	q5map.set("l4", license_4)
	q5map.set("l5", license_5)
	q5map.set("l6", license_6)
	q5map.set("l7", license_7)
	q5map.set("l8", license_8)
	q5map.set("l9", license_9)
	
	
	
	q6map.set("l10", license_10)
	q6map.set("l11", license_11)
	q6map.set("l12", license_12)
	q6map.set("l13", license_13)
	q6map.set("l14", license_14)
	q6map.set("l15", license_15)
	q6map.set("l16", license_16)
	
	if(clicked_id == "q1"){	 
		result.set("c1", copyright_1)
	}else if(clicked_id == "q2"){
		result.set("c2", copyright_2)
	}else if(clicked_id == "q3"){	 
		result.set("c3", copyright_3)
	}else if(clicked_id == "q4"){	 
		result.set("c4", copyright_4)}
	

	
    	var buttonselect = queryId(clicked_id);
		var par = "step-"+id;
		var seit = "s"+id;
		
	    $('#smartwizard').smartWizard("next");
		
	    if(clicked_id == "q1"){	
	    	document.getElementById(par).innerHTML = message11a;
	    	document.getElementById(seit).innerHTML = id + " Nutzungsrechte";

			for (const [key, value] of q6map.entries()) {
		
				var button = "<button id="+ key+ " onClick='replay_step_5(this.id, 1)' "+
				"lic="+value['l1'] + " class='button2'> " +value['l1'] +"</button>";
				document.getElementById(par).innerHTML += button;
			}
			navigation.set("nav4", q4map.get(clicked_id).toUpperCase())
	    }
	    
	    else if(clicked_id == "q2" || clicked_id == "q3" || clicked_id == "q4"){	
	    	document.getElementById(par).innerHTML = message11b;
	    	document.getElementById(seit).innerHTML = id + " Nutzungsrechte";

			for (const [key, value] of q5map.entries()) {
		       
				if(clicked_id == "q2" ){
					
					var button = "<button id="+ key+ " onClick='replay_step_5(this.id, 2)' "+
					"lic="+value['l1'] + " class='button2'> " +value['l1'] +"</button>";
					
				} else if(clicked_id == "q3" ){
					var button = "<button id="+ key+ " onClick='replay_step_5(this.id, 3)' "+
					"lic="+value['l1'] + " class='button2'> " +value['l1'] +"</button>";
					
				} else if(clicked_id == "q4" ){
					
					var button = "<button id="+ key+ " onClick='replay_step_5(this.id, 4)' "+
					"lic="+value['l1'] + " class='button2'> " +value['l1'] +"</button>";
					}
				document.getElementById(par).innerHTML += button;
			}
			navigation.set("nav4", q4map.get(clicked_id).toUpperCase())
			
	    }
	    document.getElementById("footer").innerHTML = "<span style= 'color: #0A1F40; font-size: 20px;'>" +
		"<b>Ihre Auswahl:</b> " +navigation.get("nav1")+ " &#10141; " +navigation.get("nav3").toUpperCase()+
		" &#10141; " +navigation.get("nav4").toUpperCase();
	    
//	    else {
//
//			result.delete('license')
//		
//	          var buttonplus="";
//
//	    	  document.getElementById(seit).innerHTML = id + " kein Lizenbestimmungen";
//	    	  
//	    	  var heading = "<div style='font-size: 30px; color:#F38C3E;'>" +
//	    	  		"<center>"+result.get("heading")+"</center></div>";
//	    	  
//	    	  var intro = "<div style='font-size: 20px;'>" + result.get("intro").split("•").join("")+"</div>";
//	    	  
//	    	  buttonplus = "<div class='col-md-4'>" +
//		  		"<button class='button1'>"+ result.get("tool").split("•").join("")+"</button></br>"+
//		  		"<button class='button1'>"+ result.get("dataformat").split("•").join("")+"</button></div></br>"
//
//
//		  		document.getElementById(par).innerHTML = "</br>"+heading+"</br>"+intro+"<div class='row'>" + buttonplus+"</div>"; 
//	    
//	    	  	document.getElementById("footer").innerHTML = "<span><b>Ihre Aswahl:</b> " +document.getElementById(clicked_id).getAttribute("buttontext");
//	  		
// 
//	    	  	document.getElementById("download").disabled = false;
//
//		}
}

