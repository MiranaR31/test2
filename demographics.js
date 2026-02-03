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

	
    /**
	*Specific questions
	*/	
	//Module 1
	API.addQuestionsSet('genre',{
		inherit : 'basicSelect',
		name : 'genre',
		stem : 'Quel est votre sexe à l\'état-civil ?',
		answers : [
			{text : 'Homme'},
			{text : 'Femme'}
				]
	});

	API.addQuestionsSet('naissance1',{
		inherit : 'basicText', 
		name : 'naissance',
		stem : 'Quelle est votre année de naissance ?',
		validator : 'number', 
		errorMsg : {
			number : 'Veuillez entrer un nombre valide'
		}
	});

	API.addQuestionsSet('naissance2',{
		inherit : 'basicSelect', 
		name : 'naissance_lieu', 
		stem : 'Où êtes-vous né(e)?', 
		answers : [
			{text : 'En France', value: 1},
			{text : 'A l\'étranger', value: 2}
			]
	});

	API.addQuestionsSet('francais',{
		inherit : 'basicSelect',
		name : 'francais', 
		stem : 'Parliez-vous français en famille durant votre enfance ?', 
		answers : [
			{text : 'Oui', value : 1},
			{text : 'Non', value : 2}
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

	//Profs
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

	API.addQuestionsSet('prof5',{
		inherit : 'basicDropdown',
		name : 'prof_annees', 
		stem : 'Depuis combien d\'années enseignez-vous cette matière ?', 
		answers : [
			{text : '0', value:0},
			{text: '1', value:1},
	        {text:'2', value:2},
	        {text:'3', value:3},
	        {text:'4', value:4},
	        {text:'5', value:5},
	        {text:'6', value:6},
	        {text:'7', value:7},
	        {text:'8', value:8},
	        {text:'9', value:9},
	        {text:'10', value:10},
	        {text:'11', value:11},
	        {text:'12', value:12},
	        {text:'13', value:13},
	        {text:'14', value:14},
	        {text:'15', value:15},
	        {text:'16', value:16},
	        {text:'17', value:17},
	        {text:'18', value:18},
	        {text:'19', value:19},
	        {text:'20', value:20},
	        {text:'21', value:21},
	        {text:'22', value:22},
	        {text:'23', value:23},
	        {text:'24', value:24},
	        {text:'25', value:25},
	        {text:'26', value:26},
	        {text:'27', value:27},
	        {text:'28', value:28},
	        {text:'29', value:29},
	        {text:'30', value:30},
	        {text:'31', value:31},
	        {text:'32', value:32},
	        {text:'33', value:33},
	        {text:'34', value:34},
	        {text:'35', value:35},
	        {text:'36', value:36},
	        {text:'37', value:37},
	        {text:'38', value:38},
	        {text:'39', value:39},
	        {text:'40', value:40},
			{text:'Plus de 40 ans',value:41}
			]
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
			
		


    API.addSequence([
		//demographie
		{inherit:'basicPage',questions:{inherit:'genre'}},
		{inherit:'basicPage',questions:{inherit:'age'}},
		{inherit:'basicPage',questions:{inherit:'pays_naissance'}},
		{//explicit
			mixer:'random',
			wrapper:true,
			data:[
				{inherit:'basicPage', questions: {inherit:'explicit1'}},
				{inherit:'basicPage', questions: {inherit:'explicit2'}},
				{inherit:'basicPage', questions: {inherit:'explicit3'}}
				]},
		//prof
		{
			mixer:'random',
			wrapper:true,
			data:[		
		        {inherit:'basicPage', questions: {inherit:'prof1'}},
				{inherit:'basicPage', questions: {inherit:'prof2'}},
				{inherit:'basicPage', questions: {inherit:'prof3'}},
				{inherit:'basicPage', questions: {inherit:'prof4'}}
				]
		},
		{inherit:'basicPage', questions:{inherit:'contrat'}},
		{
			inherit:'basicPage',
			condition: function(){ 
				return this.current.questions.contrat == 3; 
			},
			questions:{inherit:'vacataire'}
		},
		{inherit:'basicPage',questions:{inherit:'satisfaction'}}
    ]);


    return API.script;
});
