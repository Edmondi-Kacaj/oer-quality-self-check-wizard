
function tooltip(){
		
		$(document).ready(function(){
		
			$("#step1-b1").tooltip({
		        title: "<div class='tooltip1'>Bildungsmaterialien, die einen fachlichen Informationsgehalt haben und zur Veranschaulichung von Lehrinhalten dienen", 	
		        html: true, 
		        trigger : 'hover',
		    }); 
			
			
			$("#step1-b2").tooltip({
		        title: "<div class='tooltip1'>Bildungsmaterialien mit Aufforderungscharakter an Lernende eine Lernhandlung durchzuführen", 	
		        html: true, 
		        trigger : 'hover',
		    }); 
			
			
			$("#step1-b3").tooltip({
		        title: "<div class='tooltip1'>Eine Lektion umfasst mehrere Informationsmaterialien und Aufgaben/Übungen. Zum Beispiel eine Moolde-Lektion oder ein H5P-Szenario, das mehrere Dokumente, Lernaufgaben und Interaktionen beinhaltet bzw. Skripte aus denen diese Elemente klar hervorgehen.", 	
		        html: true, 
		        trigger : 'hover',
		    }); 
			
			
			$("#step1-b4").tooltip({
		        title: "<div class='tooltip1'>Ein Kurs ist eine in sich geschlossene Lehrveranstaltung, die aus mehreren Einheiten (Lektionen) besteht. Ein Kurs beinhaltet mehrere Informationsmaterialien, Lernaufgaben und Interaktionen. Ggf. Skripte aus denen eine Kursstruktur klar hervorgeht", 	
		        html: true, 
		        trigger : 'hover',
		    }); 
			
			//step_2
		    $("#b1_1").tooltip({
		        title: "<div class='tooltip1'>Ausgewählte und strukturierte Lehrinhalte im Textformat", 	
		        html: true, 
		        trigger : 'hover',
		    }); 
		    
		    $("#b1_2").tooltip({
		        title: "<div class='tooltip1'>Eine im Hörsaal aufgezeichnete, vollständige Lehrveranstaltung oder ein aufgezeichneter, vollständiger Vortrag", 	
		        html: true,
		        trigger : 'hover',
		    }); 
		    
		    $("#b1_3").tooltip({
		        title: "<div class='tooltip1'>Eine mit wenig Aufwand produzierte Aufnahme eines Vortragenden", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b1_4").tooltip({
		        title: "<div class='tooltip1'>Eine mit Audiokommentaren unterlegte Aufzeichnung von Präsentationsfolien", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b1_5").tooltip({
		        title: "<div class='tooltip1'>Eine mit Audiokommentaren unterlegte Aufzeichnung von Bildschirmaktivitäten", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b1_6").tooltip({
		        title: "<div class='tooltip1'>Eine mit Audiokommentaren aufgezeichnete Aufnahme, auf der ausgeschnittene Figuren ein- und ausgeblendet werden", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b1_7").tooltip({
		        title: "<div class='tooltip1'>Schriftliche Dokumentation der vorzutragenden Lehrinhalte, die auf eine inhaltliche, visuelle und didaktische Anschaulichkeit der Inhalte zielt", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b1_9").tooltip({
		        title: "<div class='tooltip1'>Abbildungen sind Visualisierungsformen wie Fotografien, logische Bilder (Diagramme, Charts, Tabellen) oder abstrahierte Darstellungen (Symbole und Metaphern)", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b1_10").tooltip({
		        title: "<div class='tooltip1'>Begleitmaterial/ Visualsierungsmedium für einen mündlichen Vortrag/Vorlesung", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b1_11").tooltip({
		        title: "<div class='tooltip1'>Darstellungen von komplexen Sachverhalten (Infografiken können auf Daten basieren oder Prozesse und Theorien schematisch abbilden)", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b1_12").tooltip({
		        title: "<div class='tooltip1'>Visuelles Mittel zur Darstellung von Informationen", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    
		    
		    //Aufgabe
		    $("#b2_1").tooltip({
		        title: "<div class='tooltip1'>Skripte mit integrierten Fragen und Aufgaben zu den präsentierten Inhalten", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b2_2").tooltip({
		        title: "<div class='tooltip1'>Folien mit integrierten Aufgaben/Übungen zu den präsentierten Inhalten", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b2_3").tooltip({
		        title: "<div class='tooltip1'>Lehrtexte mit integrierten Aufgaben/Übungen zu den präsentierten Inhalten", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b2_4").tooltip({
		        title: "<div class='tooltip1'>Im Internet oder Intranet zur Verfügung gestellte Problemstellung, die vorrangig mit Quellen aus dem Internet bearbeitet wird", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b2_5").tooltip({
		        title: "<div class='tooltip1'>	Individuelle Lernmappe zur Dokumentation von Lernprozessen und Lernergebnissen", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b2_6").tooltip({
		        title: "<div class='tooltip1'>Fragespiel mit Lern- bzw. Übungscharakter", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b2_7").tooltip({
		        title: "<div class='tooltip1'>Simulation von Entscheidungsprozessen in einem konstruierten Rahmen mit vorgegebenen Regeln", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    $("#b2_8").tooltip({
		        title: "<div class='tooltip1'>didaktisch strukturierter Arbeitsauftrag", 	
		        html: true,
		        trigger : 'hover',
		    });
		    
		    
		    
		});
	}	

function licenseTolltip(){
	$(document).ready(function(){
	$("#l1").tooltip({
        title: "<div class='tooltip1'>Es werden alle Nutzungsrechte eingeräumt.", 	
        html: true, 
        trigger : 'hover',
		}); 
	
	$("#l2").tooltip({
        title: "<div class='tooltip1'>Es werden alle Nutzungsrechte unter der  Bedingung der Namensnennung des Urhebers eingeräumt.", 	
        html: true, 
        trigger : 'hover',
		});
	
	$("#l3").tooltip({
        title: "<div class='tooltip1'>Es werden alle Nutzungsrechte unter Bedingungen der Namensnennung und der Weitrgabe unter gleichen Bedingungen eingeräumt", 	
        html: true, 
        trigger : 'hover',
		});
	
	
	$("#l4").tooltip({
        title: "<div class='tooltip1'>Eingeschränkte Nutzungsrechte. Es darf nicht kommerziell genutzt werden, es muss eine Namensnennung sowie die Weitergabe unter gleichen Bedingungen erfolgen.", 	
        html: true, 
        trigger : 'hover',
		});
	
	
	$("#l5").tooltip({
        title: "<div class='tooltip1'>Eingeschränkte Nutzungsrechte werden eingeräumt. Es darf nicht kommerziell genutzt werden.", 	
        html: true, 
        trigger : 'hover',
		});
	
	
	$("#l6").tooltip({
        title: "<div class='tooltip1'>Bei Materialien mit einem Copyright oder mit einem Urheberschutz (ohne Lizenz oder Vermerk) sind alle Nutzungsrechte vorbehalten.", 	
        html: true, 
        trigger : 'hover',
		}); 
	
	
	$("#l7").tooltip({
        title: "<div class='tooltip1'>Unter Public Domain Mark sind gemeinfreie Werke gefasst. Es werden alle Nutzungsrechte eingeräumt. Prüfen Sie genau, ob es sich bei den fremden Materialien/Inhalten um gemeinfreie Werke handelt.", 	
        html: true, 
        trigger : 'hover',
		});
	
	$("#l8").tooltip({
        title: "<div class='tooltip1'>Eingeschränkte Nutzungsrechte liegen vor. Es darf nicht bearbeitet werden und die Namensnennung ist verpflichtend.", 	
        html: true, 
        trigger : 'hover',
		});
	
	$("#l9").tooltip({
        title: "<div class='tooltip1'>Stark eingeschränkte Nutzungsrechte. Die Namensnennungs ist verpflichtend. Das Werk darf nicht kommerziell genutzt und nicht bearbeitet werden.", 	
        html: true, 
        trigger : 'hover',
		});
	
	//license 4.0
	$("#l10").tooltip({
        title: "<div class='tooltip1'>Sie erlauben eine eingeschränkte Nutzung. Ihr Material darf zwar unter der Bedingung der Namensnennung geteilt, aber nicht bearbeitet und in kommerziellen Kontexten werden.", 	
        html: true, 
        trigger : 'hover',
		});
	
	$("#l11").tooltip({
        title: "<div class='tooltip1'>Sie erlauben eine uneingeschränkte Nutzung unter der Bedingung der Namensnennung. Diese Lizenz ist im OER Portal ausdrücklich erwünscht.", 	
        html: true, 
        trigger : 'hover',
		});
	
	$("#l12").tooltip({
        title: "<div class='tooltip1'>Sie erlauben eine uneingeschränkte Nutzung unter der Bedingung der Namensnennung und Weitergabe unter gleichen Bedingungen. Diese Lizenz ist im OER Portal ausdrücklich erwünscht.", 	
        html: true, 
        trigger : 'hover',
		});
	
	$("#l13").tooltip({
        title: "<div class='tooltip1'>Sie erlauben eine eingeschränkte Nutzung unter der Bedingung der Namensnennung, Nicht kommerziellen Nutzung und Weitergabe unter gleichen Bedingungen. Mit dieser Lizenz könnten Nachteile entstehen.", 	
        html: true, 
        trigger : 'hover',
		});
	
	$("#l14").tooltip({
        title: "<div class='tooltip1'>Sie erlauben eine eingeschränkte Nutzung unter der Bedingung der Namensnennung und Weitergabe unter gleichen Bedingungen. Mit dieser Lizenz könnten Nachteile für die Community entstehen.", 	
        html: true, 
        trigger : 'hover',
		});
	
	$("#l15").tooltip({
        title: "<div class='tooltip1'>Sie erlauben eine uneingeschränkte Nutzung. Diese Lizenz ist im OER Portal ausdrücklich erwünscht.", 	
        html: true, 
        trigger : 'hover',
		});
	
	$("#l16").tooltip({
        title: "<div class='tooltip1'>Sie erlauben eine eingeschränkte Nutzung. Ihr Material darf zwar unter der Bedingung der Namensnennung geteilt, aber nicht bearbeitet werden.", 	
        html: true, 
        trigger : 'hover',
		});
	
	
	});
	
	
	
	
}
	
	function tolltip1(){
		var text = "<div class='atention'>Das OER-Planungstool befindet sich aktuell im Aufbau. Leider werden keine Hinweis zu Lektion und Kurs angezeigt.";	
		$(document).ready(function(){
		$("#atention1").tooltip({
	        title: text, html: true, 
	        trigger : 'hover',
	    }); 
		$("#atention2").tooltip({
	        title: text, html: true, 
	        trigger : 'hover',
	    }); 
		$("#b3_1").tooltip({
	        title: text, html: true, 
	        trigger : 'hover',
	    }); 
	    $("#b3_2").tooltip({
	        title:text, html: true, 
	        trigger : 'hover',
	    }); 
	    $("#b3_3").tooltip({
	        title: text, html: true, 
	        trigger : 'hover',
	    }); 
	    $("#b3_4").tooltip({
	        title: text, html: true, 
	        trigger : 'hover',
	    }); 
	    
	    $("#b3_5").tooltip({
	        title: text, html: true, 
	        trigger : 'hover',
	    }); 
	    $("#b3_6").tooltip({
	        title: text, html: true, 
	        trigger : 'hover',
	    }); 
	    $("#b3_7").tooltip({
	        title: text, html: true, 
	        trigger : 'hover',
	    }); 
	    
	    
	    
	    $("#b4_1").tooltip({
	        title: text, html: true, 
	        trigger : 'hover',
	    }); 
	    $("#b4_2").tooltip({
	        title: text, html: true, 
	        trigger : 'hover',
	    }); 
	    $("#b4_3").tooltip({
	        title:text, html: true, 
	        trigger : 'hover',
	    }); 
		});
	}