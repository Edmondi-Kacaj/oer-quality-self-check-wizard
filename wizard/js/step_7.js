
function replay_step_7(clicked_id, co) {
	
	document.getElementById("step-7").innerHTML="";
	document.getElementById("s7").innerHTML ="7 Anwendung und Transfer";
	
	
	var button1 = "<button id='1' class='textfild' onClick='replay_step_7(this.id, 3)'>Lernende werden durch explizite Lernaktivitäten bzw. -aufgaben veranlasst, die Lerninhalte auf neuartige Problemsituationen bzw. auf Praxisanwendungen zu übertragen. (5)</button>" ;
	
	var button2 = "<button id='2' class='textfild' onClick='replay_step_7(this.id, 3)'>Lernenden werden angeregt, die erworbenen Kenntnisse auf neue Problemsituationen oder Praxisanwendungen zu übertragen. (3)</button>" ;
	
	var button3 = "<button id='3' class='textfild' onClick='replay_step_7(this.id, 3)'>Die Lerninhalte haben keinerlei erkennbaren Bezug zu neuartigen Problemsituationen oder Praxisanforderungen. Auch innerhalb des Materials gibt es keine Hinweise, die zur Anwendung des Gelernten anregen. (1)</button>" ;
	
	document.getElementById("step-7").innerHTML +="</br></br>"+ button1+"</br>"+button2+"</br>"+button3;
	$('#smartwizard').smartWizard("next");


   }
 
 

 

