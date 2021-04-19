const insurances = [
	{
		title: 'Sachversicherungsgesellschaften',
		data:
			'Adcuri, Adler Versicherung AG, Advigon Versicherung AG, Advocard Rechtsschutzversicherung AG, AGILA Haustierversicherung AG, AIG Europe S.A., Allcura Versicherungs-AG, Allianz Versicherungs-AG, Allrecht, Alte Leipziger Versicherung AG, Ammerländer Versicherung VVaG, ARAG Allgemeine Versicherungs-AG, Auxilia Rechtsschutz-Versicherungs-AG, AXA Versicherung AG, Badische Versicherungen / BGV, Barmenia Allgemeine Versicherungs-AG, Basler Versicherungen, BavariaDirekt, BAVC Bruderhilfe e.V., Bayerische Hausbesitzer-Versicherungs-Gesellschaft a.G., ConceptIF, Concordia Versicherungs-Gesellschaft a.G., Condor Allgemeine Versicherungs-AG, Continentale Sachversicherung AG, DA Deutsche Allgemeine Versicherung AG, DBV Deutsche Beamtenversicherung, DEURAG Deutsche Rechtsschutz-Versicherung AG, DEVK Allgemeine Versicherungs-AG, DFV Deutsche Familienversicherung AG, Dialog Versicherung AG, die Bayerische, Die Haftpflichtkasse VVaG, DMB Rechtsschutz-Versicherung AG, DOCURA VVaG, Domcura, DONAU Versicherung AG, Vienna Insurance Group, ERGO Reiseversicherung AG, ERGO Versicherung AG, Euler Hermes Deutschland, Feuersozietät Berlin Brandenburg Versicherung AG, Gothaer Allgemeine Versicherung AG, Grundeigentümer-Versicherung VVaG, HanseMerkur Allge­meine Versi­che­rung AG, HDI Global SE, HDI Versicherung AG, Helvetia Schweizerische Versicherungsgesellschaft AG, Hiscox Insurance Company Limited, INTER Allgemeine Versicherung AG, Interlloyd Versicherungs-AG, InterRisk Versicherungs-AG, Itzehoer, Janitos Versicherung AG, K & M – Konzept & Marketing GmbH, KRAVAG-ALLGEMEINE Versicherungs-AG, Mannheimer Versicherung AG, Markel International Insurance Company Limited, Münchener Verein Allgemeine Versicherungs-AG, Neue Rechtsschutz-Versicherungsgesellschaft AG, NÜRNBERGER Allgemeine Versicherungs-AG, NV Versicherungen VVaG, Oberösterreichische Versicherung AG NL Dt., ÖRAG BavariaDirekt, OSTANGLER BRANDGILDE VVaG, PANTAENIUS GmbH, PVAG Polizeiversicherungs-AG, R+V Allgemeine Versicherung AG, Rechtsschutz Union, rhion.digital / Rhion Versicherung AG, ROLAND Rechtsschutz-Versicherungs-AG, SIGNAL IDUNA Allgemeine Versicherung AG, Stuttgarter Versicherung AG, SV SparkassenVersicherung Holding AG, Uelzener Allgemeine Versicherungs-Gesellschaft a.G., uniVersa Allgemeine Versicherung AG, Versicherungskammer Bayern Versicherungsanstalt des öffentlichen Rechts, Verti Versicherung AG, VHV Allgemeine Versicherung AG, VOLKSWOHL BUND Sachversicherung AG, Waldenburger Versicherung AG, Württembergische Versicherung AG, Würzburger Versicherungs-AG, WWK Allgemeine Versicherung AG, ZURICH Insurance plc Niederlassung für Deutschland',
	},
	{
		title: 'Lebensversicherungsgesellschaften',
		data:
			'Allianz Lebensversicherungs-AG, Allianz Worldwide Care Ltd., AXA Lebensversicherung AG, Baloise Vie Luxembourg S.A., Barmenia Lebensversicherung a. G., Canada Life, Concordia oeco Lebensversicherungs-AG, Condor Lebensversicherungs-AG, Continentale Lebensversicherung AG, DBV Deutsche Beamtenversicherung Lebensversicherung, DELA Lebensversicherungen N.V., Deutsche Lebensversicherungs-AG, Dialog Lebensversicherungs-AG, die Bayerische / Bayerische Beamten Lebensversicherung a.G., Dortmunder Lebensversicherung AG, ERGO Direkt Lebensversicherung AG, ERGO Life S.A., EUROPA Lebensversicherung AG, Hannoversche Lebensversicherung AG, HanseMerkur Lebens­ver­si­che­rung AG, HDI Lebensversicherung AG, Helvetia Schweizerische Lebensversicherungsgesellschaft AG, Ideal Lebensversicherung a.G., INTER Lebensversicherung AG, InterRisk Lebensversicherungs-AG, Monuta Versicherungen, Münchener Verein Lebensversicherung AG, NÜRNBERGER Lebensversicherung AG, NÜRNBERGER Beamten Lebensversicherung AG, SIGNAL IDUNA Lebensversicherung a. G., Standard Life Versicherung, Stuttgarter Lebensversicherung a.G., Swiss Life AG, uniVersa Lebensversicherung a.G., VOLKSWOHL BUND Lebensversicherung a. G., Württembergische Lebensversicherung AG, WWK Lebensversicherung a.G., Zurich Deutscher Herold Lebensversicherung AG, Zurich Life Assurance Public Limited Company',
	},
    {
		title: 'Krankenversicherungsgesellschaften',
		data:
			'Allianz Private Krankenversicherungs-AG, Alte Oldenburger Krankenversicherung AG, AXA Krankenversicherung AG, Barmenia Krankenversicherung AG, Bayerische Beamtenkrankenkasse AG, BDAE Expat Services GmbH, Care Concept AG, Concordia Krankenversicherungs-AG, Continentale Krankenversicherung a.G., DBV Deutsche Beamtenversicherung Krankenversicherung, Deutscher Ring Kranken, DKV Deutsche Krankenversicherung AG, ENVIVAS Krankenversicherung AG, HALLESCHE Krankenversicherung VVaG, HanseMerkur Kran­ken­ver­si­che­rung AG, INTER Krankenversicherung AG, LKH - Landeskrankenhilfe VVaG,  Münchener Verein Krankenversicherung a.G., NÜRNBERGER Krankenversicherung AG, SIGNAL IDUNA Krankenversicherung a. G., Süddeutsche Krankenversicherung a.G., Süddeutsche Krankenversicherung a.G., Union Krankenversicherung AG, uniVersa Krankenversicherung a.G., Württembergische Krankenversicherung AG.',
	},
    {
		title: 'Gesetzliche Krankenkassen',
		data:
			'AOK (...), BAHN-BKK, BARMER, BIG direkt gesund, BKK (...), BKK VBU, DAK, HEK - Hanseatische Krankenkasse, , IKK Brandenburg und Berlin, IKK classic, KKH Kaufmännische Krankenkasse, KNAPPSCHAFT, Salus BKK, SECURVITA Krankenkasse, TK - Techniker Krankenkasse',
	},
	{
		title: 'Banken',
		data:
			'.................................',
	},
    {
		title: 'Bausparkassen',
		data:
			'Alte Leipziger Bausparkasse, BHW – Bausparkasse, BKM – Bausparkasse Mainz, Signal Iduna Bausparkasse, Wüstenrot Bausparkasse AG',
	},
    {
		title: 'Maklerpools & Kooperationen',
		data:
			'Aruna GmbH, Kalckreuthstr. 11, 10777 Berlin | Fonds Finanz Maklerservice GmbH, Riesstraße 25, 80992 München | blau direkt GmbH & Co. KG, Kaninchenborn 31, 23560 Lübeck | Netfonds AG, Heidenkampsweg 73, 20097 Hamburg | VEMA Versicherungs-Makler-Genossenschaft eG, Unterkonnersreuth 29, 95500 Heinersreuth| Covomo Versicherungsvergleich GmbH, Rotfeder-Ring 5, 60327 Frankfurt am Main | Deutsche Vorsorgedatenbank AG, Zwickauer Str. 25, 08393 Meerane | Procheck24 GmbH, Landshuter Allee 8, 80637 München'
	},
];

export default insurances;
