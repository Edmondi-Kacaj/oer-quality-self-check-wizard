
function replay_step_4(clicked_id, id) {
	document.getElementById("step-4").innerHTML ="";

	document.getElementById("s4").innerHTML ="4 Fachwissenschaftliche Fundierung";
	
	
	var button1 = "<button id='1' class='textfild' onClick='replay_step_5(this.id, 3)'>Die Inhalte sind fachwissenschaftlich korrekt, aktuell und relevant. Sie werden präzise und ausgewogen dargestellt. Es werden durchgängig den fachwissenschaftlichen Standards entsprechende bibliografische Literaturquellen angegeben. Die Argumentation ist schlüssig und gut nachvollziehbar. (5)</button>" ;
	
	var button2 = "<button id='2' class='textfild' onClick='replay_step_5(this.id, 3)'>Die Inhalte sind fachwissenschaftlich korrekt und relevant. Die Argumentation ist nachvollziehbar. Die Herkunft von Modellen, Methoden und Ansätzen wird meist benannt. (3)</button>" ;
	
	var button3 = "<button id='3' class='textfild' onClick='replay_step_5(this.id, 3)'>Die Inhalte haben keinen erkennbaren Bezug zu Forschungsergebnissen. Die zugrundeliegenden Methoden oder Ansätze werden entweder gar nicht dargestellt oder aber ohne Hinweis auf ihre Herkunft. (1)</button>" ;
	
	document.getElementById("step-4").innerHTML +="</br></br>"+ button1+"</br>"+button2+"</br>"+button3;
	$('#smartwizard').smartWizard("next");

}

