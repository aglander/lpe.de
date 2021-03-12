import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Content,
  FooterNewsletter,
  Hero,
  SidebarArticles,
  SidebarNewsletter,
  SimilarStories,
} from './components';

import { content, sidebarArticles, similarStories } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sidebarNewsletter: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  footerNewsletterSection: {
    background: theme.palette.primary.dark,
  },
}));

const PageView = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            
            <div className={classes.section}>
            <Typography component="p" variant="h6" color="textPrimary">
              <h2>
                Hilfe vom Staat – Was bekommen die Hinterbliebenen im Todesfall?
              </h2>
              <ul>
                <li>
                  Kleine Witwen-/Witwerrente: 25% der Alters- bzw.
                  Erwerbsminderungsrente des Verstorbenen; befristet auf 2 Jahre
                </li>
                <li>
                  Große Witwen-/ Witwerrente: 55% der Alters- bzw.
                  Erwerbsminderungsrente des Verstorbenen
                </li>
                <li>
                  Halbwaisenrente: 10% der Alters- bzw. Erwerbsminderungsrente des
                  Verstorbenen
                </li>
                <li>
                  Vollwaisenrente: 20% der Alters- bzw. Erwerbsminderungsrente des
                  Verstorbenen
                </li>
              </ul>
              <p>
                Das bekannte Sterbegeld wird seit 2004 nicht mehr gezahlt. Stirbt
                ein Ehepartner, bekommen Witwe bzw. Witwer eine Witwen-/
                Witwerrente. Die Höhe der Hinterbliebenenrente richtet sich nach
                der Rente, auf die der verstorbene Ehepartner zum Zeitpunkt seines
                Todes Anspruch gehabt hätte. Bei Berufstätigen ist die Grundlage
                die Rente wegen Erwerbsminderung.
              </p>

              <p>
                Für alle, die nach dem 31.12.2001 geheiratet haben oder bei denen
                beide Partner nach dem 1.1.1962 geboren sind gilt: Nur wer bei Tod
                des Ehepartners mindestens ein Kind erzieht oder das 45.
                Lebensjahr vollendet hat (wird seit 2012 schrittweise auf 47
                erhöht) oder erwerbsgemindert ist, hat einen Anspruch auf die
                große Witwen-/Witwerrente. Andernfalls wird die kleine
                Witwen-/Witwerrente gezahlt.
              </p>

              <p>
                Eigene Einkünfte, z. B. Gehalt, Mieteinnahmen oder
                Kapitalvermögen, werden teilweise angerechnet und verringern die
                Rentenansprüche. Beide Renten werden grundsätzlich nur solange
                gezahlt, bis Witwe oder Witwer wieder heiraten.
              </p>
              <h2>
                Sorgen Sie vor - Erhalten Sie Ihren finanziellen Lebensstandard!
              </h2>
              <p>
                <em>
                  Unser Serviceangebot für Sie:
                  <br />
                  Greifen Sie auf uns als Experten zurück: Die genaue Höhe der
                  Absicherung stimmen wir, als unabhängiger Versicherungsmakler,
                  gemeinsam mit Ihnen ab und gehen vollständig auf Ihre
                  Bedürfnisse ein.
                </em>
              </p>
              <p>
                Die durchschnittliche Witwen-/ Witwerrente beträgt gerade mal 500
                € im Monat. Die Unterstützung durch den Staat reicht nicht, um den
                gewohnten Lebensstandard zu halten.
              </p>

              <p>
                Durch eine Risikolebensversicherung können neben den
                Beerdigungskosten (durchschnittlich 4.000 € bis 8.000 €) auch die
                laufenden Verpflichtungen beglichen werden. Deshalb sollte die
                Versicherungssumme, die im Todesfall ausgezahlt wird, ausreichend
                hoch sein.
              </p>

              <p>
                Der genaue Absicherungsbedarf hängt von der Lebenssituation ab.
                Ein Alleinverdiener mit Frau, zwei kleinen Kindern und einer
                Hypothek, hat sicherlich einen anderen Bedarf als ein kinderloses
                Ehepaar, das zur Miete wohnt.
              </p>

              <p>Typische Lebenshaltungskosten, sind:</p>
              <ul>
                <li>
                  Miete oder Hypothekenzahlung an die Bank (Nebenkosten: Strom,
                  Wasser, Heizung)
                </li>
                <li>Telefon, Internet, Gebühren (z. B. Rundfunkbeitrag)</li>
                <li>Hobby und Freizeitaktivitäten</li>
                <li>Kindergarten und Musikunterricht / Sportverein der Kinder</li>
                <li>Lebensmittel, Kleidung, Mobiliar</li>
                <li>
                  Betriebskosten für das Auto und / oder Monatstickets für Bus /
                  Bahn
                </li>
                <li>Versicherungsprämien und Konsumkredite</li>
                <li>Altersvorsorge</li>
              </ul>
            
            </Typography>
            </div>
            <Content data={content} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarArticles data={sidebarArticles} />
            <SidebarNewsletter className={classes.sidebarNewsletter} />
          </Grid>
        </Grid>
      </Section>
      <SectionAlternate>
        <SimilarStories data={similarStories} />
      </SectionAlternate>
      <SectionAlternate className={classes.footerNewsletterSection}>
        <FooterNewsletter />
      </SectionAlternate>
    </div>
  );
};

export default PageView;
