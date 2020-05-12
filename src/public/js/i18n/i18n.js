function get_i18n(pagename)
{
	i18n={
		"index":
			{
			"en":
				{"pagename": "Join | LlixHoot",
					"title": "Join a Game",
					"namelabel": "Display Name",
					"pinlabel": "Game Pin",
					"joinButton": "Join",
					"host": "Click here to host a LlixHoot!"
				},
			"es":
				{ "pagename": "Unirse | LlixHoot",
					"title": "Unirse a una partida",
					"namelabel": "Alias",
					"pinlabel": "Pin del juego",
					"joinButton": "Jugar",
					"host": "¡Pulsa aquí para crear un LlixHoot!"
				},
			"ca":
				{"pagename": "Join | LlixHoot",
					"title": "Join a Game",
					"namelabel": "Display Name",
					"pinlabel": "Game Pin",
					"joinButton": "Join",
					"host": "Click here to host a LlixHoot!"
				}
			},
		"quiz":
			{
			"en":
				{"pagename": "Create | LlixHoot",
					"title": "Start a Kahoot Game",
					"back": "Back",
					"subtitle": "Choose a Game Below or",
					"subtitle_link": "Create your Own!"
				},
			"es":
				{"pagename": "Crear | LlixHoot",
					"title": "Crea un LlixHoot",
					"back": "Volver",
					"subtitle": "Selecciona uno de la lista o",
					"subtitle_link": "Crea el tuyo propio!"
				},
			"ca":
				{"pagename": "Create | LlixHoot",
					"title": "Start a Kahoot Game",
					"back": "Back",
					"subtitle": "Choose a Game Below or",
					"subtitle_link": "Create your Own!"
				}
			},
		"quiz_new":
			{
			"en":
				{"pagename":"Creator | KahootClone",
					"title":"Llixhoot Quiz Creator Studio",
					"quizTitle": "Quiz Title",
					"q1": "Question 1: ",
					"a1":"Answer 1: ",
					"a2":"Answer 2: ",
					"a3":"Answer 3: ",
					"a4":"Answer 4: ",
					"correct1": "Correct Answer (1-4) :",
					"another": "Add another question",
					"create": "Create Quiz",
					"cancel": "Cancel quiz and return to quiz selection"
				},
			"es":
				{"pagename": "Creator | LlixHoot",
					"title": "Nombre del cuestionario",
					"quizTitle": "Nombre del cuestionario",
					"q1": "Pregunta 1: ",
					"a1":"Respuesta 1: ",
					"a2":"Respuesta 2: ",
					"a3":"Respuesta 3: ",
					"a4":"Respuesta 4: ",
					"correct1": "Respuesta correcta (1-4) :",	
					"another": "Añadir otra",
					"create": "Crear",
					"cancel": "Cancelar"
				},
			"ca":
				{"pagename":"Creator | KahootClone",
					"title":"Llixhoot Quiz Creator Studio",
					"quizTitle": "Quiz Title",
					"q1": "Question 1: ",
					"a1":"Answer 1: ",
					"a2":"Answer 2: ",
					"a3":"Answer 3: ",
					"a4":"Answer 4: ",
					"correct1": "Correct Answer (1-4) :",
					"another": "Add another question",
					"create": "Create Quiz",
					"cancel": "Cancel quiz and return to quiz selection"
				}
			},
		"host":
		{
			"en":
				{"pagename": "Host | LlixHoot",
					"title": "Join this Game using the Game Pin: ",
					"cancel": "Cancel Game",
					"start": "Start Game"
				},
			"es":
				{"pagename": "Host | LlixHoot",
					"title": "&Uacute;nete introduciendo el pin: ",
					"cancel": "Cancelar",
					"start": "Iniciar"
				},
			"ca":
				{"pagename": "Host | LlixHoot",
					"title": "Join this Game using the Game Pin: ",
					"cancel": "Cancel Game",
					"start": "Start Game"
				}
		},
		"game":
		{
			"en":
				{"pagename": "Game | LlixHoot",
					"questionNum": "Question 1 / x",
					"playersAnswered":"Player's answer: 0 / x",
					"timerText": "Time left:",
					"question": "Question",
					"answer": "Answer",
					"nextQuestion":"Next Question"
				},
			"es":
				{"pagename": "Jugar | LlixHoot",
					"questionNum": "Pregunta 1 / x",
					"playersAnswered":"Respondieron: 0 / x",
					"timerText": "Tiempo restante:",
					"question": "Pregunta",
					"answer": "Respuesta",
					"nextQuestion":"Next Question"
				},
			"ca":
				{"pagename": "Host | LlixHoot",
					"questionNum": "Question 1 / x",
					"playersAnswered":"Players Answered: 0 / x",
					"title": "Join this Game using the Game Pin: ",
					"cancel": "Cancel Game",
					"start": "Start Game",
					"nextQuestion":"Next Question"
				}
		},
	};
	var locale=i18n[pagename].en;

	if (navigator.language.startsWith("es"))
	{
		locale=i18n[pagename].es;
	} else if (navigator.language.startsWith("ca")) {
		locale=i18n[pagename].es;
	} 
	return(locale)
}
