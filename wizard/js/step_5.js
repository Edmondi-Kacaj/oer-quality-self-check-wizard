var knowledge = "Di e Gitlab Kursvorlage der TIB Hannover kann für die Erstellung von offenen  Bildungsressourcen genutzt werden. Vorteile ergeben sich in der Darstellung  der  Bildungsressourcen  (ebook,  PDF,  HTML)  sowie  der  Einbindung  und  Einbettung anderer Format";
var cc0map = new Map();

function replay_step_5(clicked_id, co) {

		  document.getElementById("s5").innerHTML = "5" + " Ergebnis";
	
	 	  document.getElementById("download").disabled = false;
    	  var buttonselect = queryId(clicked_id);
    	  var attr = buttonselect.getAttributeNode("lic").value;
    	  
    	  cc0map.clear()
    	 
    	  if(clicked_id == "l1"){
    		  cc0map.set("cc0",cc0_a)  
    	  }
    	  if(clicked_id == "l2"){
    		  cc0map.set("cc0",cc_by)  
    	  }
    	  if(clicked_id == "l3"){
    		  cc0map.set("cc0",cc_by_sa)  
    	  }
    	  if(clicked_id == "l4"){
    		  cc0map.set("cc0",cc_by_nc_sa)  
    	  }
    	  if(clicked_id == "l5"){
    		  cc0map.set("cc0",cc_by_nc)  
    	  }
    	  if(clicked_id == "l6"){
    		  cc0map.set("cc0",copy1)  
    	  }
    	  if(clicked_id == "l7"){
    		  cc0map.set("cc0",cc_pd_mark)  
    	  }
    	  if(clicked_id == "l8"){
    		  cc0map.set("cc0",cc_by_nd)  
    	  }
    	  if(clicked_id == "l9"){
    		  cc0map.set("cc0",cc_by_nc_nd)  
    	  }
    	  
    	  
    	  
    	  
    	  if(clicked_id == "l10"){
    		  cc0map.set("cc0",cc_by_nc_nd_4)  
    	  }
    	  if(clicked_id == "l11"){
    		  cc0map.set("cc0",cc_by_4)  
    	  }
    	  if(clicked_id == "l12"){
    		  cc0map.set("cc0",cc_by_sa_4)  
    	  }
    	  if(clicked_id == "l13"){
    		  cc0map.set("cc0",cc_by_nc_sa_4)  
    	  }
    	  if(clicked_id == "l14"){
    		  cc0map.set("cc0",cc_by_nc_4)  
    	  }
    	  if(clicked_id == "l15"){
    		  cc0map.set("cc0",cc0_b)  
    	  }
    	  if(clicked_id == "l16"){
    		  cc0map.set("cc0",cc_by_nd_4)  
    	  }
    	  
    	  
    	 
    	  result.set("license", attr)

    	  var copy = "c"+co;
    	  
    	  
 
		  $('#smartwizard').smartWizard("next");
		  licenseTolltip();
	    	  var heading = "<div style='font-size: 30px; color:#0A1F40;'>"+result.get("heading")+"</div></br>";
	    	  
//	    	  var intro = "<div style='font-size: 20px;'>" + result.get("intro").split("•").join("")+"</div></br>";
	    	  
	    	  var  intro = "<button class='button4'>GESTALTUNGSHINWEISE</button></div></br></br>"+
	    	  "<div class='row'><div class='col-sm-9'><button class='labletext'>"+ result.get("intro").split("•").join("")+"</button></div>" +
  				"<div class='col-sm-3'><div class='wrappers'><img src='../image/wizard/image_1.png' width='200' height='200'></div></div></div></br>";  
	    	  
	    	
	    	  var  b1 = "<button class='button4'>WERKZEUGE</button></div></br></br>"+
  	  		"<div class='row'><div class='col-sm-9'><button class='labletext'>"+ result.get("tool").split("•").join("")+"</button></div>" +
  	  				"<div class='col-sm-3'><div class='wrapper'><img src='../image/wizard/image_3.png'></div></div></div></br>";  
	    	  

	    	  var  b2 = "<button class='button4'>DATEIFORMATE</button></div></br></br>"+
  	  		"<div class='row'><div class='col-sm-9'><button class='labletext'>"+ result.get("dataformat").split("•").join("")+"</button></div>" +
  	  				"<div class='col-sm-3'><div class='wrapper'><img src='../image/wizard/image_4.png'></div></div></div></br>";  
	    	  
	    	  var  b3 = "<button class='button4'>LZENZHINWEISE</button></div></br></br>"+
	  	  		"<div class='row'><div class='col-sm-9'><button class='labletext'>"+ result.get(copy).split("•").join("")+"</button>" +
	  	  		"<button class='labletext'>"+ cc0map.get("cc0")+"</button></div></br>"+
	  	  				"<div class='col-sm-3'><div class='wrapper'><img src='../image/wizard/image_5.png'></div></div></div></br>";  
	    	  
	    	  var  b4 = "<button class='button4'>WISSENSWERTES</button></div></br></br>"+
	  	  		"<div class='row'><div class='col-sm-9'><button class='labletext'>"+ knowledge+"</button></div>" +
	  	  				"<div class='col-sm-3'><div class='wrapper'><img src='../image/wizard/image_6.png'></div></div></div></br></br></br>";   


		navigation.set("nav5", attr)
	    document.getElementById("step-5").innerHTML = "</br>"+heading+"</br>"+intro+"<div class='row'>" + b1+b2+b3+b4+"</div>"; 
	    
	    document.getElementById("footer").innerHTML = "<span style= 'color: #0A1F40; font-size: 20px;'>" +
	    		"<b>Ihre Auswahl:</b> " + navigation.get("nav1").toUpperCase()+
	    		" &#10141; " +navigation.get("nav3").toUpperCase()+
	    		" &#10141; " +navigation.get("nav4").toUpperCase()+" &#10141; "+navigation.get("nav5").toUpperCase() ;
 
	    document.getElementById("download").disabled = false;
	    

   }
 
 

 

