
function replay_step_5(clicked_id, co) {
	
	document.getElementById("step-5").innerHTML ="";
	document.getElementById("s5").innerHTML ="5 Didaktisches Design / Motivation";
	
	
	var button1 = "<button id='1' class='textfild' onClick='replay_step_6(this.id, 3)'>Die Gestaltung der Ressource regt zur Beschäftigung mit den Inhalten an. Die Inhalte sind interessant aufbereitet und motivieren, sich weiter mit dem Thema zu beschäftigen. (5)</button>" ;
	
	var button2 = "<button id='2' class='textfild' onClick='replay_step_6(this.id, 3)'>Die Gestaltung der Ressource ist zumindest in Teilen motivierend. Elemente der Ressource sind interessant gestaltet und wecken Interesse an den Inhalten. (3)</button>" ;
	
	var button3 = "<button id='3' class='textfild' onClick='replay_step_6(this.id, 3)'>Es ist keine besondere didaktische Gestaltung des Materials erkennbar. Das Material wirkt wenig interessant und motivierend. (1)</button>" ;
	
	document.getElementById("step-5").innerHTML +="</br></br>"+ button1+"</br>"+button2+"</br>"+button3;
	$('#smartwizard').smartWizard("next");
   }
 
 

 

