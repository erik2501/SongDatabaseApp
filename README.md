# Prosjekt 4



## Hvordan kjøre prosjetet

Klone git-repoet fra gitlab med følgende link:
> SSH:      git@gitlab.stud.idi.ntnu.no:it2810-h22/Team-14/project4.git
> HTTPS:    https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-14/project4.git

Skriv følgende kommandoer i et terminalvindu på prosjektmappens plassering:

```
cd frontend
npm install
npm start
```
OBS! Dette kan ta litt tid etterom det er mange pakker som kreves ved førstegangskjøring. Da skal det se slik ut:

<img src="/frontend/assets/Screenshot 2022-11-22 at 13.29.03.png" alt="drawing" width="400"/>

For å ta i bruk applikasjonen finnes det to ulike metoder som du kan velge mellom:

1. Bruk Xcode/Android studio direkte fra din mac/PC. Dette anbefales hvis du allerede har lastet ned et av disse programmene før ettersom det vil ta litt plass på harddisk. Her skal det bare være å følge terminalmenyen som dukker opp under QR-koden. Trykk i for iPhone og a for android. OBS! Husk at macen / pcen du kjører fra må være tilknyttet NTNU-nett for at data fra database på VM skal dukke opp. Anbefaler Cisco AnyConnect for å koble til skolens vpn (se link https://i.ntnu.no/wiki/-/wiki/norsk/installere+vpn) dersom du ikke sitter på skolenett.

2. Bruk applikasjonen Expo Go på mobil og scann QR-koden i terminalen med kamera. 
OBS! Husk at mobilen du kjører fra må være tilknyttet NTNU-nett for at data fra database på VM skal dukke opp. Anbefaler Cisco AnyConnect (for mobil) for å koble til skolens vpn dersom du ikke sitter på skolenett.

Skulle det oppstå noen tekniske feil ved kjøring anbefaler vi å trykke på r (reload) i terminalmenyen. Hvis ikke dette fungerer så avslutt server med "control + c" og kjør "npm start" på nytt.

## Beskrivelse av oppgave

I prosjekt 4 bestemte gruppen seg for å gjøre oppgave a; bygge den samme applikasjonen som i prosjekt 3, bare for mobil-app ved bruk av React Native. Gruppen har brukt den samme databasen og backenden som i prosjekt 3, og gjenbrukt mye av koden. 

## Beskrivelse av applikasjonen

I applikasjonen kan man sortere og filtrere på en liste med de mest populære sangene fra 1999 til 2019. Det er implementert søkefunksjonalitet på både artist og navn på sang, samt at man kan sortere sangene stigende eller synkende ut fra når sangen var en top hit på spotify. Til slutt kan man filtrere sangene på et bestemt årstall. For at filtrene ikke skulle ta så mye plass på mobilskjerm, har gruppen valgt å implementere en egen modal som kun vises ved å trykke på "filter". Fra forrige prosjekt har gruppen gått bort fra paginering og heller valgt å implementere infinity scroll ettersom vi mener dette sørger for økt brukervennlighet. For å gjennomføre dette har vi brukt fetchMore-funksjonen fra apollo. For hver gang brukeren når bunnen av listen med sanger blir denne funksjonen kalt, dette gjøres ved at den skipper antall sanger som allerede er lastet inn i databasen, og henter de 10 neste. Oppdateringsfunksjonen onUpdate() slår sammen listen med sanger som er lastet inn fra før og listen med de nye 10 elementene.

## Bruk av React Native

Gruppen har satt opp en ny frontend med React Native expo-cli, og brukt Apollo Client for React Native for å koble til backend, slik som i prosjekt 3. Gruppen har brukt flere bibliotek for å lage applikasjonen ettersom noen av de bibliotekene brukt i prosjekt 3 ikke støttet React Native. React Navigation er brukt for å navigere mellom de forskjellige sidene og Recoil state management er brukt for å håndtere states som skal brukes i flere komponenter. React-native-elements er brukt flere steder, blant annet i filtrene. Dette biblioteket er godt dokumentert og sørget for kontinuitet i brukergrensesnittet. Shopify er et bibliotek vi har brukt for å implementere FlashList som er brukt for å implementere infinite scroll. 

## Bærekraftig utvikling

På forrige prosjekt fikk gruppen tilbakemelding om at siden kunne vært mer bærekraftig. I dette prosjektet har gruppen derfor implementert mørk modus på hele siden, ettersom dette krever mindre energi og fører til økt batteritid hos klient. Et annet grep gruppen har tatt er å legge ved en knapp for å aktivere filtrering istedenfor et delay på 500 millisekunder som var tilfellet ved forrige prosjekt, på denne måten gjennomføres det ikke flere API kall enn det som er strengt nødvendig. I tillegg til at dette er mer bærekraftig ettersom det reduserer nettrafikk, er det også positivt for eventuelle app-brukere ettersom man gjerne bruker mobildata på mobil, og mange vil dermed være opptatt av mindre data-lasting. Man kan argumentere for at det å bruke bilder er negativt med tanke på bærekraft, men vi mener her at det er nyttig informasjon med tanke på dataen vi presenterer.

## Universell utforming

Vi har tatt flere grep for å sørge for at applikasjonen har god universell utforming. Et av grepene er å gjøre tekst tydelig ved å bruke kontraster, samt ha relativt store skriftstørrelser (relativt ift. at det er på mobilskjerm og begrenset skriftstørrelse-bruk) .Et annet grep vi har gjennomført er å teste at applikasjonen støtter Dynamisk skrift som kan velges i Innstillinger på IOS-enheter. Dette gjør at brukere med synshemninger kan selv øke skriftstørrelse om dette skulle være ønskelig. Det har også vært et felles mål i gruppen om å holde applikasjonen så oversiktlig som mulig ettersom dette sørger for et enklere brukergrensesnitt.

## Testing

Gruppen har testet applikasjonen ved brukertesting. Den er testet på forskjellige IOS skjermer både mobil og ipad, ved bruk av Xcode, og expo Go appen. Her har gruppen testet både i portrett og i landskapsmodus, og implementert funksjonalitet for å håndtere begge deler. Gruppen har også brukt Android studio for å teste applikasjonen på en Google Pixel 3a med Android Tiramisu.





