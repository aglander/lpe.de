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
	{
		id: 'investmentanlagen',
		parent: 'altersvorsorge',
		title: 'Investmentanlagen',
		url: '/investmentanlagen',
	},
	{
		id: 'vermoegensverwaltung',
		parent: 'altersvorsorge',
		title: 'Vermögensverwaltung',
		url: '/vermoegensverwaltung',
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
			id: 'risikolebensversicherung',
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Risikolebensversicherung',
			url: '/risikolebensversicherung',
		},
		{
			id: 'sterbegeldversicherung',
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Sterbegeldversicherung',
			url: '/sterbegeldversicherung',
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
			id: 'grundfaehigkeitsabsicherung',
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Grundfähigkeitsabsicherung',
			url: '/grundfaehigkeitsabsicherung',
		},
		{
			id: 'schwere-krankheitenversicherung',
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Schwere Krankheitenversicherung',
			url: '/schwere-krankheitenversicherung',
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
//---------------------------------------------------------
	{
		id: 'haftpflicht-haus-hof',
		parent: 'versicherungen',
		title: 'Haftpflicht - Haus & Hof',
	},
		{
			id: 'privathaftpflichtversicherung',
			parent: 'haftpflicht-haus-hof',
			title: 'Privathaftpflichtversicherung',
			url: '/privathaftpflichtversicherung'
		},
		{
			id: 'haus-und-grundbesitzerhaftpflicht',
			parent: 'haftpflicht-haus-hof',
			title: 'Haus- und Grundbesitzerhaftpflichtversicherung',
			url: '/haus-und-grundbesitzerhaftpflicht'
		},
		{
			id: 'bauherrenhaftpflichtversicherung',
			parent: 'haftpflicht-haus-hof',
			title: 'Bauherrenhaftpflichtversicherung',
			url: '/bauherrenhaftpflichtversicherung'
		},
		{
			id: 'gewaesserschadenhaftpflichtversicherung',
			parent: 'haftpflicht-haus-hof',
			title: 'Gewässerschadenhaftpflichtversicherung',
			url: '/gewaesserschadenhaftpflichtversicherung'
		},
		{
			id: 'hausratversicherung',
			parent: 'haftpflicht-haus-hof',
			title: 'Hausratversicherung',
			url: '/hausratversicherung'
		},
		{
			id: 'wohngebaeudeversicherung',
			parent: 'haftpflicht-haus-hof',
			title: 'Wohngebäudeversicherung',
			url: '/wohngebaeudeversicherung'
		},
		{
			id: 'photovoltaikversicherung',
			parent: 'haftpflicht-haus-hof',
			title: 'Photovoltaikversicherung',
			url: '/photovoltaikversicherung'
		},
		{
			id: 'glasversicherung',
			parent: 'haftpflicht-haus-hof',
			title: 'Glasversicherung',
			url: '/glasversicherung'
		},
		{
			id: 'bauversicherungen',
			parent: 'haftpflicht-haus-hof',
			title: 'Bauversicherungen',
			url: '/bauversicherungen'
		},
		{
			id: 'handyversicherung',
			parent: 'haftpflicht-haus-hof',
			title: 'Handyversicherung',
			url: '/handyversicherung'
		},
//---------------------------------------------------------
{
	id: 'tierversicherungen',
	parent: 'versicherungen',
	title: 'Tierversicherungen',
},
	{
		id: 'hundehaftpflichtversicherung',
		parent: 'tierversicherungen',
		title: 'Hundehaftpflichtversicherung',
		url: '/hundehaftpflichtversicherung'
	},
	{
		id: 'pferdehaftpflichtversicherung',
		parent: 'tierversicherungen',
		title: 'Pferdehaftpflichtversicherung',
		url: '/pferdehaftpflichtversicherung'
	},
	{
		id: 'hunde-op-versicherung',
		parent: 'tierversicherungen',
		title: 'Hunde OP-Versicherung',
		url: '/hunde-op-versicherung'
	},
	{
		id: 'pferde-op-versicherung',
		parent: 'tierversicherungen',
		title: 'Pferde OP-Versicherung',
		url: '/pferde-op-versicherung'
	},
	{
		id: 'katzen-op-versicherung',
		parent: 'tierversicherungen',
		title: 'Katzen OP-Versicherung',
		url: '/katzen-op-versicherung'
	},
	{
		id: 'hundekrankenversicherung',
		parent: 'tierversicherungen',
		title: 'Hundekrankenversicherung',
		url: '/hundekrankenversicherung'
	},
	{
		id: 'pferdekrankenversicherung',
		parent: 'tierversicherungen',
		title: 'Pferdekrankenversicherung',
		url: '/pferdekrankenversicherung'
	},
	{
		id: 'katzenkrankenversicherung',
		parent: 'tierversicherungen',
		title: 'Katzenkrankenversicherung',
		url: '/katzenkrankenversicherung'
	},
//---------------------------------------------------------
	{
		id: 'rechtsschutz-reisen',
		parent: 'versicherungen',
		title: 'Rechtsschutz & Reisen',
	},
		{
			id: 'rechtsschutzversicherung',
			parent: 'rechtsschutz-reisen',
			title: 'Rechtsschutzversicherung',
			url: '/rechtsschutzversicherung'
		},
		{
			id: 'reiseversicherungen',
			parent: 'rechtsschutz-reisen',
			title: 'Reiseversicherungen',
			url: '/reiseversicherungen'
		},
//---------------------------------------------------------
	{
		id: 'fahrzeugversicherungen',
		parent: 'versicherungen',
		title: 'Fahrzeugversicherungen',
	},
		{
			id: 'autoversicherung',
			parent: 'fahrzeugversicherungen',
			title: 'Autoversicherung',
			url: '/autoversicherung'
		},
		{
			id: 'motorradversicherung',
			parent: 'fahrzeugversicherungen',
			title: 'Motorradversicherung',
			url: '/motorradversicherung'
		},
		{
			id: 'mopedversicherung',
			parent: 'fahrzeugversicherungen',
			title: 'Mopedversicherung',
			url: '/mopedversicherung'
		},
		{
			id: 'e-scooterversicherung',
			parent: 'fahrzeugversicherungen',
			title: 'E-Scooterversicherung',
			url: '/e-scooterversicherung'
		},
		{
			id: 'fahrradversicherung',
			parent: 'fahrzeugversicherungen',
			title: 'Fahrradversicherung',
			url: '/fahrradversicherung'
		},
		{
			id: 'schutzbrief',
			parent: 'fahrzeugversicherungen',
			title: 'Schutzbrief & Automobilclub',
			url: '/schutzbrief'
		},
//---------------------------------------------------------
	{
		id: 'kranken-und-krankenzusatzversicherungen',
		parent: 'versicherungen',
		title: 'Kranken- & Krankenzusatzversicherungen',
	},
		{
			id: 'pkv-private-krankenversicherung',
			parent: 'kranken-und-krankenzusatzversicherungen',
			title: 'PKV - Private Krankenversicherung',
			url: '/pkv-private-krankenversicherung'
		},
		{
			id: 'gkv-gesetzliche-krankenkasse',
			parent: 'kranken-und-krankenzusatzversicherungen',
			title: 'GKV - Gesetzliche Krankenkasse',
			url: '/gkv-gesetzliche-krankenkasse'
		},
		{
			id: 'pflegeversicherung',
			parent: 'kranken-und-krankenzusatzversicherungen',
			title: 'Pflegeversicherung',
			url: '/pflegeversicherung'
		},
		{
			id: 'zahnzusatzversicherung',
			parent: 'kranken-und-krankenzusatzversicherungen',
			title: 'Zahnzusatzversicherung',
			url: '/zahnzusatzversicherung'
		},
		{
			id: 'brillenversicherung',
			parent: 'kranken-und-krankenzusatzversicherungen',
			title: 'Brillenversicherung',
			url: '/brillenversicherung'
		},
		{
			id: 'krankenhauszusatzversicherung',
			parent: 'kranken-und-krankenzusatzversicherungen',
			title: 'Krankenhauszusatzversicherung',
			url: '/krankenhauszusatzversicherung'
		},

//#########################################################
{
	id: 'finanzierungen',
	title: 'Finanzierungen',
},
	{
		id: 'immobilienfinanzierung',
		parent: 'finanzierungen',
		title: 'immobilienfinanzierung',
	},
		{
			id: 'baufinanzierung-kaufen',
			parent: 'immobilienfinanzierung',
			title: 'Baufinanzierung & Kaufen',
			url: '/baufinanzierung-kaufen'
		},
		{
			id: 'anschlussfinanzierung',
			parent: 'immobilienfinanzierung',
			title: 'Anschlussfinanzierung',
			url: '/anschlussfinanzierung'
		},		
		{
			id: 'prolongation',
			parent: 'immobilienfinanzierung',
			title: 'Prolongation',
			url: '/prolongation'
		},		
		{
			id: 'modernisierung-sanierung',
			parent: 'immobilienfinanzierung',
			title: 'Modernisierung & Sanierung',
			url: '/modernisierung-sanierung'
		},		
		{
			id: 'bausparen',
			parent: 'immobilienfinanzierung',
			title: 'Bausparen',
			url: '/bausparen'
		},
		{
			id: 'foerdermittel',
			parent: 'immobilienfinanzierung',
			title: 'Fördermittel',
			url: '/foerdermittel'
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