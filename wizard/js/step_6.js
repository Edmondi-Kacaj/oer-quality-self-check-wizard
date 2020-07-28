
function replay_step_6(clicked_id, co) {
	
	document.getElementById("step-6").innerHTML="";
	document.getElementById("s6").innerHTML ="6 Hilfestellungen und Support";
	
	
	var button1 = "<button id='1' class='textfild' onClick='replay_step_7(this.id, 3)'>Das Material beinhaltet zum eine umfassende didaktische Hilfestellungen für Lernende, die den Lernerfolg unterstützen wie z.B. Kontrollfragen oder ein Glossar und zum anderen eine (über die Metadaten abgebildete) didaktische Hilfestellung für Lehrende, die Ideen zur Anwendung der Materialien wie auch weitere wichtige didaktische Informationen enthält. (5)</button>" ;
	
	var button2 = "<button id='2' class='textfild' onClick='replay_step_7(this.id, 3)'>Das Material beinhaltet an einigen Stellen didaktische Hilfestellungen.(3)</button>" ;
	
	var button3 = "<button id='3' class='textfild' onClick='replay_step_7(this.id, 3)'>Das Material beinhaltet keinerlei didaktische Hilfestellungen. (1)</button>" ;
	
	document.getElementById("step-6").innerHTML +="</br></br>"+ button1+"</br>"+button2+"</br>"+button3;
	$('#smartwizard').smartWizard("next");
   }
 
 

 

