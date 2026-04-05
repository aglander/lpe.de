# Todos Arian

nach launch

- provenexpert google sterne -> geprüft werden

- Welche Snipped werden bei den beiden SEO-Seiten genau angezeigt?
- Silbentrennung auch in den normalen Texten?
- Silbentrennungen in HERO

- openstreetmap lizenz erwähnen
- contact panel optimieren


- place-logik für seo seiten
    -   Place       - in den Texten     (nur Ort)
    -   Place_long  - z.B. für Hero     (PLZ+Ort+bei Berlin)
    -   Place_2     - z.B. für H1       (PLZ+Ort)
    -   Place_3     - Stadt-/Ortsteile  (Aufzählung)
    -   Place_4     - Ortslagen         (Aufzählung)
- vimeo
- downloads linkfarbe
- google analytics -> durchlesen


# Todos Lars

- Texte Reviews
- lpe@lpe.de verifizieren nach umzug (Kontaktformular)

- Datenschutz Inhalte finalisieren
- Page und Seo Page Inhalte finalisieren
- Hero Bilder raussuchen

## ProvenExpert API Testlauf

Die API-Doku liegt lokal unter `docs/provenexpert-api.pdf`.

API-Zugangsdaten bitte nicht im Code hinterlegen, sondern lokal in einer nicht versionierten `.env.local` speichern:

```env
PROVENEXPERT_API_ID=deine-api-id
PROVENEXPERT_API_KEY=dein-api-key
```

Danach kann der Rohabruf aller Bewertungen so gestartet werden:

```bash
npm run provenexpert:fetch-raw
```

Die Ausgabe landet in `src/data/provenexpert-reviews-raw.json`.

Die Summary fuer Gesamtwertung und Gesamtanzahl kann separat geholt werden:

```bash
npm run provenexpert:fetch-summary
```

Beides zusammen:

```bash
npm run provenexpert:sync
```
