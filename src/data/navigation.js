const navigation = [

{
	id: 'altersvorsorge',
	title: 'Altersvorsorge',
},
	{
		id: 'riesterrente',
		parent: 'altersvorsorge',
		title: 'Riester-Rente',
		url: '/riesterrente',
	},
	{
		id: 'basisrente',
		parent: 'altersvorsorge',
		title: 'Basis-Rente',
		url: '/basisrente',
	},
	{
		id: 'rentenversicherung',
		parent: 'altersvorsorge',
		title: 'Rentenversicherung',
		url: '/rentenversicherung',
	},
	{
		id: 'lebensversicherung',
		parent: 'altersvorsorge',
		title: 'Lebensversicherung',
		url: '/lebensversicherung',
	},
//#########################################################
{
	id: 'versicherungen',
	title: 'Versicherungen',
},
//---------------------------------------------------------
	{
		id: 'risikovorsorge-arbeitskraftabsicherung',
		parent: 'versicherungen',
		title: 'Risikovorsorge & Arbeitskraftabsicherung',
	},
		{
			id: 'test1',
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Test 1',
			url: '/test'
		},
		{
			id: 'risikolebensversicherung',
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Risikolebensversicherung',
			url: '/risikolebensversicherung',
		},
		{
			id: 'berufsunfaehigkeitsversicherung',
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Berufsunfähigkeitsversicherung',
			url: '/berufsunfaehigkeitsversicherung',
		},
		{
			id: 'unfallversicherung',
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Unfallversicherung',
			url: '/unfallversicherung',
		},
		{
			id: 'schwere-krankheiten',
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Schwere Krankheiten',
			url: '/schwere-krankheiten',
		},
		{
			id: 'grundfaehigkeitsabsicherung',
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Grundfähigkeitsabsicherung',
			url: '/grundfaehigkeitsabsicherung',
		},
		{
			id: 'krankentagegeld',
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Krankentagegeld',
			url: '/krankentagegeld',
		},	
		{
			id: 'pflegeversicherung',
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Pflegeversicherung',
			url: '/pflegeversicherung',
		},
		{
			id: 'sterbegeldversicherung',
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Sterbegeldversicherung',
			url: '/sterbegeldversicherung',
		},
//---------------------------------------------------------
	{
		id: 'haftpflicht-haus',
		parent: 'versicherungen',
		title: 'Haftpflicht & Haus',
	},
		{
			id: 'privathaftpflichtversicherung',
			parent: 'haftpflicht-haus',
			title: 'Privathaftpflichtversicherung',
			url: '/privathaftpflichtversicherung'
		},
		{
			id: 'tierhalterhaftpflichtversicherung',
			parent: 'haftpflicht-haus',
			title: 'Tierhalter- Haftpflichtversicherung',
			url: '/tierhalterhaftpflichtversicherung'
		},
		{
			id: 'haus-und-grundbesitzerhaftpflicht',
			parent: 'haftpflicht-haus',
			title: 'Haus- und Grundbesitzer- haftpflichtversicherung',
			url: '/haus-und-grundbesitzerhaftpflicht'
		},
		{
			id: 'bauherrenhaftpflichtversicherung',
			parent: 'haftpflicht-haus',
			title: 'Bauherren- haftpflichtversicherung',
			url: '/bauherrenhaftpflichtversicherung'
		},
		{
			id: 'gewaesserschadenhaftpflichtversicherung',
			parent: 'haftpflicht-haus',
			title: 'Gewässerschaden- haftpflichtversicherung',
			url: '/gewaesserschadenhaftpflichtversicherung'
		},
//---------------------------------------------------------
	{
		id: 'rechtsschutz-reisen',
		parent: 'versicherungen',
		title: 'Rechtsschutz & Reisen',
	},
		{
			id: 'test3',
			parent: 'rechtsschutz-reisen',
			title: 'Test 3',
			url: '/test'
		},
//---------------------------------------------------------
	{
		id: 'auto-fahrzeuge',
		parent: 'versicherungen',
		title: 'Auto & Fahrzeuge',
	},
		{
			id: 'test4',
			parent: 'auto-fahrzeuge',
			title: 'Test 4',
			url: '/test'
		},
		{
			id: 'test7',
			parent: 'auto-fahrzeuge',
			title: 'Test 7',
			url: '/test'
		},
//---------------------------------------------------------
	{
		id: 'krankenzusatzversicherungen',
		parent: 'versicherungen',
		title: 'Risikovorsorge & Arbeitskraftabsicherung2',
	},
		{
			id: 'test5',
			parent: 'krankenzusatzversicherungen',
			title: 'Test 5',
			url: '/test'
		},
		{
			id: 'test6',
			parent: 'krankenzusatzversicherungen',
			title: 'Test 6',
			url: '/test'
		},

//#########################################################
{
	id: 'finanzierungen',
	title: 'Finanzierungen',
},
//#########################################################
{
	id: 'liebe-familie',
	title: 'Liebe Familie',
	url: '/liebe-familie',
},
//#########################################################
{
	id: 'immobilien',
	title: 'Immobilien',
	url: '/immobilien',
},

];

export default navigation;