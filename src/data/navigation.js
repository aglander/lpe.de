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

		{	id: 'private-rentenversicherung',
			parent: 'schicht-3-private-altersvorsorge',
			title: 'Rentenversicherung',
			url: '/private-rentenversicherung',
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
			id: 'pflegezusatzversicherung',		
			parent: 'risikovorsorge-arbeitskraftabsicherung',
			title: 'Pflegezusatzversicherung',
			url: '/pflegezusatzversicherung',
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
			id: 'krankentagegeld',
			parent: 'kranken-und-krankenzusatzversicherungen',
			title: 'Krankentagegeld',
			url: '/krankentagegeld',
		},
		{
			id: 'krankenzusatzversicherung',
			parent: 'kranken-und-krankenzusatzversicherungen',
			title: 'Krankenzusatzversicherung',
			url: '/krankenzusatzversicherung'
		},
		{
			id: 'brillenversicherung',
			parent: 'kranken-und-krankenzusatzversicherungen',
			title: 'Brillenversicherung',
			url: '/brillenversicherung'
		},
		{
			id: 'zahnzusatzversicherung',
			parent: 'kranken-und-krankenzusatzversicherungen',
			title: 'Zahnzusatzversicherung',
			url: '/zahnzusatzversicherung'
		},
//---------------------------------------------------------
	{
		id: 'haftpflicht-haus-hof-rechtsschutz-reisen',
		parent: 'versicherungen',
		title: 'Haftpflicht - Haus & Hof | Rechtsschutz & Reisen',
	},
		{
			id: 'privathaftpflichtversicherung',
			parent: 'haftpflicht-haus-hof-rechtsschutz-reisen',
			title: 'Privathaftpflichtversicherung',
			url: '/privathaftpflichtversicherung'
		},
		{
			id: 'tierhalterhaftpflichtversicherungen',
			parent: 'haftpflicht-haus-hof-rechtsschutz-reisen',
			title: 'Tierhalterhaftpflichtversicherungen',
			url: '/tierhalterhaftpflichtversicherungen'
		},
		{
			id: 'weitere-haftpflichtversicherungen',
			parent: 'haftpflicht-haus-hof-rechtsschutz-reisen',
			title: 'Weitere Haftpflichtversicherungen',
			url: '/weitere-haftpflichtversicherungen'
		},
		{
			id: 'hausratversicherung',
			parent: 'haftpflicht-haus-hof-rechtsschutz-reisen',
			title: 'Hausratversicherung',
			url: '/hausratversicherung'
		},
		{
			id: 'gebaeudeversicherung',
			parent: 'haftpflicht-haus-hof-rechtsschutz-reisen',
			title: 'Gebäudeversicherung & Neubau',
			url: '/gebaeudeversicherung'
		},
		{
			id: 'rechtsschutzversicherung',
			parent: 'haftpflicht-haus-hof-rechtsschutz-reisen',
			title: 'Rechtsschutzversicherung',
			url: '/rechtsschutzversicherung'
		}		,
		{
			id: 'reiseversicherungen',
			parent: 'haftpflicht-haus-hof-rechtsschutz-reisen',
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
			id: 'kfz-versicherungen',
			parent: 'fahrzeugversicherungen',
			title: 'KFZ-Versicherungen',
			url: '/kfz-versicherungen'
		},
		{
			id: 'moped-e-scooter-kennzeichen',
			parent: 'fahrzeugversicherungen',
			title: 'Moped- & E-Scooter',
			url: '/moped-e-scooter-kennzeichen'
		},
		{
			id: 'fahrradversicherung',
			parent: 'fahrzeugversicherungen',
			title: 'Fahrradversicherung',
			url: '/fahrradversicherung'
		},
//---------------------------------------------------------
{
	id: 'tierversicherungen',
	parent: 'versicherungen',
	title: 'Tierversicherungen',
},
	{
		id: 'hundeversicherungen',
		parent: 'tierversicherungen',
		title: 'Hundeversicherungen',
		url: '/hundeversicherungen'
	},
	{
		id: 'katzenversicherungen',
		parent: 'tierversicherungen',
		title: 'Katzenversicherungen',
		url: '/katzenversicherungen'
	},
	{
		id: 'pferdeversicherungen',
		parent: 'tierversicherungen',
		title: 'Pferdeversicherungen',
		url: '/pferdeversicherungen'
	},
//---------------------------------------------------------
{	
	id: 'rund-um-konzepte',
	parent: 'versicherungen',
	title: 'Rund um - Konzepte',
},
	{
		id: 'familienversicherungen',
		parent: 'rund-um-konzepte',
		title: 'Rund um Ihre Familie',
		url: '/weitere-gewerbeversicherungen',
	},
	{
		id: 'bauversicherung',
		parent: 'rund-um-konzepte',
		title: 'Rund um Ihren Hausbau',
		url: '/bauversicherungen',
	},
	{
		id: 'gewerbeversicherungen',
		parent: 'rund-um-konzepte',
		title: 'Rund um Ihr Gewerbe',
		url: '/gewerbeversicherungen',
	},
//---------------------------------------------------------	
	{
	id: 'online-spezialvergleiche',
	parent: 'versicherungen',
	title: 'Online-Spezialvergleiche',
},
	{
		id: 'technik-elektronikversicherungen',
		parent: 'online-spezialvergleiche',
		title: 'Technikversicherungen',
		url: '/technik-elektronikversicherungen'
	},
	{
		id: 'freizeitversicherungen',
		parent: 'online-spezialvergleiche',
		title: 'Freizeitversicherungen',
		url: '/freizeitversicherungen'
	},
	{
		id: 'veranstaltungsversicherungen',
		parent: 'online-spezialvergleiche',
		title: 'Veranstaltungsversicherungen',
		url: '/veranstaltungsversicherungen'
	},
//#########################################################
{
	id: 'finanzierungen',
	title: 'Finanzierungen',
},
	{
		id: 'immobilienfinanzierung',
		parent: 'finanzierungen',
		title: 'Immobilienfinanzierung',
	},
		{
			id: 'bauen-kaufen',
			parent: 'immobilienfinanzierung',
			title: 'Bauen & Kaufen',
			url: '/bauen-kaufen'
		},
		{
			id: 'anschlussfinanzierung',
			parent: 'immobilienfinanzierung',
			title: 'Anschlussfinanzierung',
			url: '/anschlussfinanzierung'
		},		
		{
			id: 'modernisierung-sanierung',
			parent: 'immobilienfinanzierung',
			title: 'Modernisierung & Sanierung',
			url: '/modernisierung-sanierung'
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
			id: 'girokonto-kreditkarte',
			parent: 'konten-geldanlagen',
			title: 'Girokonto & Kreditkarte',
			url: '/girokonto-kreditkarte'
		},
		{
			id: 'tagesgeld-festgeld',
			parent: 'konten-geldanlagen',
			title: 'Tagesgeld & Festgeld',
			url: '/tagesgeld-festgeld'
		},
		{
			id: 'investmentanlagen-vermoegensverwaltung',
			parent: 'konten-geldanlagen',
			title: 'Vermögensverwaltung',
			url: '/investmentanlagen-vermoegensverwaltung',
		},
	{
		id: 'haushaltskosten-senken',
		parent: 'finanzierungen',
		title: 'Haushaltskosten Senken',
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