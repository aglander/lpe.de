const navigation = [

{
	id: 'altersvorsorge',
	title: 'Altersvorsorge',
},
//---------------------------------------------------------
	{
		id: 'schicht-1-basisversorgung',
		title: '1. Schicht: Basisversorgung',
		parent: 'altersvorsorge'
	},
		{
			id: 'basisrente',
			parent: 'schicht-1-basisversorgung',
			title: 'Basis-Rente | Rürup-Rente',
			url: '/basisrente',
		},
	{
		id: 'schicht-2-zusatzversorgung',
		title: '2. Schicht: Zusatzversorgung',
		parent: 'altersvorsorge'
	},
		{
			id: 'riesterrente',
			parent: 'schicht-2-zusatzversorgung',
			title: 'Riester-Rente',
			url: '/riesterrente',
		},
		{
			id: 'bav-betriebliche-altersvorsorge',
			parent: 'schicht-2-zusatzversorgung',
			title: 'bAV - betriebliche Altersvorsorge',
			url: '/bav-betriebliche-altersvorsorge',
		},
	{
		id: 'schicht-3-private-altersvorsorge',
		title: '3. Schicht: Private Altersvorsorge',
		parent: 'altersvorsorge'
	},

		{	id: 'rentenversicherung',
			parent: 'schicht-3-private-altersvorsorge',
			title: 'Rentenversicherung',
			url: '/rentenversicherung',
		},
		{
			id: 'investmentanlagen-vermoegensverwaltung',
			parent: 'schicht-3-private-altersvorsorge',
			title: 'Investment | Vermögensverwaltung',
			url: '/investmentanlagen-vermoegensverwaltung',
		},
		{
			id: 'vermoegensverwaltung',
			parent: 'altersvorsorge-sub',
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
			id: 'pflegeversicherung',
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Pflegeversicherung',
			url: '/pflegeversicherung',
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
			id: 'krankentagegeld',
			parent: 'kranken-und-krankenzusatzversicherungen',
			title: 'Krankentagegeld',
			url: '/krankentagegeld',
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
			id: 'krankenzusatzversicherung',
			parent: 'kranken-und-krankenzusatzversicherungen',
			title: 'Krankenzusatzversicherung',
			url: '/krankenzusatzversicherung'
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
			id: 'weitere-haftpflichtversicherungen',
			parent: 'haftpflicht-haus-hof',
			title: 'Weitere Haftpflichtversicherungen',
			url: '/weitere-haftpflichtversicherungen'
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
			id: 'handyversicherung',
			parent: 'haftpflicht-haus-hof',
			title: 'Handyversicherung',
			url: '/handyversicherung'
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
			id: 'moped-e-scooterversicherung',
			parent: 'fahrzeugversicherungen',
			title: 'Moped- & E-Scooterversicherung',
			url: '/moped-e-scooterversicherung'
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
		id: 'rund-um-konzepte',
		parent: 'versicherungen',
		title: 'rund um - Konzepte',
	},
		{
			id: 'bauversicherung',
			parent: 'rund-um-konzepte',
			title: 'Rund um Ihren Hausbau',
			url: '/bauversicherungen',
		},
		{
			id: 'familienversicherungen',
			parent: 'rund-um-konzepte',
			title: 'Rund um Ihre Familie',
			url: '/weitere-gewerbeversicherungen',
		},
		{
			id: 'gewerbeversicherungen',
			parent: 'rund-um-konzepte',
			title: 'Rund um Ihre Firma',
			url: '/gewerbeversicherungen',
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
		id: 'hunde-op-krankenversicherung',
		parent: 'tierversicherungen',
		title: 'Hunde OP- und Krankenversicherung',
		url: '/hunde-op-krankenversicherung'
	},
	{
		id: 'pferdehaftpflichtversicherung',
		parent: 'tierversicherungen',
		title: 'Pferdehaftpflichtversicherung',
		url: '/pferdehaftpflichtversicherung'
	},
	{
		id: 'pferde-op-krankenversicherung',
		parent: 'tierversicherungen',
		title: 'Pferde OP- und Krankenversicherung',
		url: '/pferde-op-krankenversicherung'
	},
	{
		id: 'katzen-op-krankenversicherung',
		parent: 'tierversicherungen',
		title: 'Katzen OP- und Krankenversicherung',
		url: '/katzen-op-krankenversicherung'
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
	{
		id: 'kredite-umschuldung',
		parent: 'finanzierungen',
		title: 'Kredite & Umschuldung',
	},
		{
			id: 'privatkredit',
			parent: 'kredite-umschuldung',
			title: 'Privatkredit',
			url: '/privatkredit'
		},	
		{
			id: 'autokredit',
			parent: 'kredite-umschuldung',
			title: 'Autokredit',
			url: '/autokredit'
		},	
		{
			id: 'umschuldung',
			parent: 'kredite-umschuldung',
			title: 'Umschuldung',
			url: '/umschuldung'
		},	
	{
		id: 'konten-geldanlagen',
		parent: 'finanzierungen',
		title: 'Konten & Geldanlagen',
	},
		{
			id: 'girokonto',
			parent: 'konten-geldanlagen',
			title: 'Girokonto',
			url: '/girokonto'
		},
		{
			id: 'kreditkarte',
			parent: 'konten-geldanlagen',
			title: 'Kreditkarte',
			url: '/kreditkarte'
		},
		{
			id: 'tagesgeld-festgeld',
			parent: 'konten-geldanlagen',
			title: 'Tagesgeld / Festgeld',
			url: '/tagesgeld-festgeld'
		},
	{
		id: 'haushaltskosten-senken',
		parent: 'finanzierungen',
		title: 'haushaltskosten-senken',
	},	
		{
			id: 'stromvergleich',
			parent: 'haushaltskosten-senken',
			title: 'Stromkosten senken',
			url: '/stromvergleich'
		},
		{
			id: 'gasvergleich',
			parent: 'haushaltskosten-senken',
			title: 'Gaskosten senken',
			url: '/gasvergleich'
		},							
//#########################################################
{
	id: 'immobilien',
	title: 'Immobilien',
	url: '/immobilien',
},

//#########################################################
{
	id: 'liebe-familie',
	title: 'Liebe Familie',
	url: '/liebe-familie',
},

];

export default navigation;