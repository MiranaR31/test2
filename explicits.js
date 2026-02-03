define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: false,
        declineText: isTouch ? 'Refuser' : 'Refuser de répondre', 
        autoFocus:true, 
        progressBar:  'Page <%= pagesMeta.number %> sur 12'
    });


    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Veuillez sélectionner une réponse ou cliquer sur \'Refuser\'' 
                : 'Veuillez sélectionner une réponse ou cliquer sur \'Refuser de répondre\''
        },
        autoSubmit:'false',
        numericValues:'true',
        help: '<%= pagesMeta.number < 3 %>',
        helpText: 'Astuce : Vous pouvez double-cliquer sur votre réponse pour passer à la question suivante.',
		helpText: 'Attention, vous ne pourrez pas revenir sur votre réponse précédente.'
	});
    API.addQuestionsSet('basicSelect',{ //Sélection unique 
        inherit :'basicQ',
        type: 'selectOne'
    });
	
    API.addQuestionsSet('basicDropdown',{ //Menu déroulant 
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });

	API.addQuestionsSet('basicText',{
		inherit : 'basicQ',
		type : 'text',
	});
	
    API.addQuestionsSet('likert5',{ //Likert
        inherit: 'basicSelect',
        answers: [
            {text:'Tout à fait d\'accord', value:5},
			{text:'Plutôt d\'accord', value:4},
			{text:'Ni d\'accord ni pas d\'accord', value:3},
			{text:'Plutôt pas d\'accord', value:2},
			{text:'Pas du tout d\'accord', value:1}
        ]
    });

	


	//Profs

	API.addQuestionsSet('prof1',{
		inherit : 'basicDropdown',
		name : 'prof_annees', 
		stem : 'Depuis combien d\'années enseignez-vous, quelle que soit la matière et quel que soit le niveau ?', 
		answers : [
			{text:'Moins d\'un an', value:1},
	        {text:'2 ans', value:2},
	        {text:'Depuis 3 à 5 ans', value:3},
	        {text:'Depuis 6 à 10 ans', value:4},
	        {text:'Depuis plus de 10 ans', value:5},
			]
	});

	API.addQuestionsSet('prof2',{
		inherit: 'basicSelect', 
		name : 'niveau', 
		stem : 'Cette année, à quel(s) niveau(x) enseignez-vous des TDs à l\'Université Gustave Eiffel ? <i>Plusieurs réponses possibles</i>',
		answers : [
			{text: 'L1', value: 1},
			{text: 'L2', value: 2},
			{text: 'L3 Economie', value: 3},
			{text: 'L3 Gestion', value: 3}
			]
	});

	API.addQuestionsSet('prof3',{
		inherit: 'basicDropdown',
		name: 'matièresL1', 
		stem: 'Quelle(s) matière(s) enseignez-vous en TD cette à l\'Université Gustave Eiffel en licence ? <i>Plusieurs réponses possibles</i>',
		answers: [
			{text: 'Anglais 1', value: 1},
			{text: 'Mathématiques 1', value: 2},
			{text: 'Statistiques descriptives 1', value: 3},
			{text: 'Introduction à l\'économie', value: 4},
			{text: 'Introduction à la gestion et au management', value: 5}, 
			{text: 'Langue vivante 2', value: 6}, 
			{text: 'Microéconomie 1', value: 7}, 
			{text: 'Macroéconomie 1', value: 8}, 
			{text: 'Enjeux du management des organisation', value: 9},
			{text: 'Comptabilité générale 1', value: 10},
			{text: 'Méthode de travail et projet professionnel', value: 11},
			{text: 'Mathématiques 2', value: 12},
			{text: 'Statistiques descriptives 2', value: 13}
			]
	});

	API.addQuestionsSet('prof4',{
		inherit: 'basicDropdown',
		name: 'matièresL2', 
		stem: 'Quelle(s) matière(s) enseignez-vous en TD cette à l\'Université Gustave Eiffel en licence ? <i>Plusieurs réponses possibles</i>',
		answers: [
			{text: 'Microéconomie 2', value: 1},
			{text: 'Macroéconomie 2', value: 2},
			{text: 'Comptabilité générale 2', value: 3},
			{text: 'Introduction aux ressources humaines', value: 4},
			{text: 'Etudes marketing', value: 5}, 
			{text: 'Mathématiques', value: 6}, 
			{text: 'Probabilités', value: 7}, 
			{text: 'Anglais', value: 8}, 
			{text: 'C3P', value: 9},
			{text: 'PIX', value: 10},
			{text: 'Espagnol', value: 11},
			{text: 'Macroéconomie 3', value: 12},
			{text: 'Politiques économiques et sociales', value: 13},
			{text: 'Monnaie et finance', value: 14},
			{text: 'Analyse financière', value: 15},
			{text: 'Gestion de production', value: 16},
			{text: 'Analyse des données', value: 17}
			]
	});

	API.addQuestionsSet('prof5',{
		inherit: 'basicDropdown',
		name: 'matièresL3', 
		stem: 'Quelle(s) matière(s) enseignez-vous en TD cette à l\'Université Gustave Eiffel en licence ? <i>Plusieurs réponses possibles</i>',
		answers: [
			{text: 'Microéconomie 2', value: 1},
			{text: 'Macroéconomie 2', value: 2},
			{text: 'Comptabilité générale 2', value: 3},
			{text: 'Introduction aux ressources humaines', value: 4},
			{text: 'Etudes marketing', value: 5}, 
			{text: 'Mathématiques', value: 6}, 
			{text: 'Probabilités', value: 7}, 
			{text: 'Anglais', value: 8}, 
			{text: 'C3P', value: 9},
			{text: 'PIX', value: 10},
			{text: 'Espagnol', value: 11},
			{text: 'Macroéconomie 3', value: 12},
			{text: 'Politiques économiques et sociales', value: 13},
			{text: 'Monnaie et finance', value: 14},
			{text: 'Analyse financière', value: 15},
			{text: 'Gestion de production', value: 16},
			{text: 'Analyse des données', value: 17}
			]
	});
			
			


	
	API.addQuestionsSet('prof1',{
		inherit : 'likert5',
		name : 'prof_reponse_eleve',
		stem : 'Dans votre enseignement, vous laissez les étudiants chercher les réponses eux-mêmes, au risque qu\'ils se trompent, avant de leur expliquer et leur donner les solutions.',
	});

	API.addQuestionsSet('prof2',{
		inherit : 'likert5',
		name : 'prof_participation_eleve',
		stem : 'Dans votre enseignement, vous invitez les étudiants à participer, à avoir un regard critique et à poser des questions.',
	});

	API.addQuestionsSet('prof3',{
		inherit : 'likert5',
		name : 'prof_travail_eleve',
		stem : 'Si un étudiant travaille suffisamment, il peut devenir le meilleur de sa classe (peu importe ses capacités innées).',
	});

	API.addQuestionsSet('prof4',{
		inherit : 'likert5',
		name : 'prof_autorite',
		stem : 'Les enseignants doivent garder une certaine distance et incarner l\'autorité dans leur relation avec les étudiants.',
	});

	

	API.addQuestionsSet('contrat',{
		inherit : 'basicSelect',
		name : 'contrat',
		stem : 'Quel type de contrat/statut avez-vous?', 
		answers : [
			{text : 'Maître de conférence', value:1},
			{text : 'Professeur des universités', value : 2},
			{text : 'Vacataire', value : 3},
			{text : 'Doctorant sous contrat', value : 4},
			{text : 'Autre', value : 5}
			]
	});

	API.addQuestionsSet('vacataire',{
		inherit : 'basicSelect',
		name : 'vacataire',
		stem : 'Si vous êtes vacataires, enseignez-vous cette matière ailleurs qu\'à l\'Université ?',
		answers : [
			{text : 'Oui', value : 1},
			{text : 'Non', value : 2}
			]
	});

	API.addQuestionsSet('satisfaction',{
		inherit : 'likert5',
		name : 'satisfaction',
		stem : 'Dans quelle mesure êtes-vous satisfait(e)s du métier d\'enseignant ?',
		answers : [
			{text : 'Très satisfait(e)', value:5},
			{text : 'Plutôt satisfait(e)', value:4},
			{text : 'Ni satisfait(e) ni insatisfait(e)', value:3},
			{text : 'Plutôt insatisfait(e)', value:2},
			{text : 'Très insatisfait(e)', value:1}
			]
	});

	//Explicit 
	API.addQuestionsSet('explicit1',{
		inherit : 'likert5',
		name : 'diff_culture',
		stem : 'Il est mieux pour une classe qu\'il y ait une diversité de coutumes, de cultures et d\'origines ?',
	});

	API.addQuestionsSet('explicit2',{
		inherit : 'likert5',
		name : 'facilite_etu',
		stem : 'Pensez-vous, qu\'en moyenne, les étudiants de certaines origines ont plus de facilité dans certaines matières ?',
	});

	API.addQuestionsSet('explicit3',{
		inherit : 'likert5',
		name : 'difficulte_afr',
		stem : 'Pensez-vous, qu\'en moyenne, les étudiants d\'origine maghrébine ou africaine ont plus de difficultés dans certaines matières, au-delà de la potentielle barrière de la langue ?',
	});
