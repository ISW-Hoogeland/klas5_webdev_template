# Webdevelopment

In deze module leer je stap voor stap hoe een databasewebsite werkt en hoe frontend, server en database samenwerken. Je werkt met **HTML, CSS, JavaScript, Node.js, Express, SQL en SQLite**.

Je gebruikt GitHub en Codespaces om de code te bekijken, aan te passen, uit te voeren en te bewaren.

Bij deze repository horen:

* het lesboek met theorie;
* het werkboek met opdrachten;
* deze repository met de website, servercode en database.

## Leerlinggegevens

Naam:
Klas:

## Aan de slag

### 1. Open je repository

Open de repository via GitHub en start je Codespace.

Gebruik tijdens deze module steeds dezelfde repository en Codespace. Maak niet iedere les een nieuwe Codespace aan.

### 2. Start de website

Deze website werkt met een server. Je kunt daarom niet alleen `index.html` openen.

Open de terminal in Codespaces en voer uit:

```bash
npm start
```

Wacht totdat in de terminal staat dat de server draait.

De server gebruikt **poort 3000**. Codespaces herkent deze poort en geeft je een mogelijkheid om de website te openen.

Werk je lokaal, dan kun je de website openen via:

http://127.0.0.1:3000

Laat de server tijdens het werken draaien.

### 3. Werk aan de opdrachten

Volg de opdrachten in het werkboek in de aangegeven volgorde.

In het begin krijg je een werkende databasewebsite. Je onderzoekt eerst hoe de verschillende onderdelen samenwerken. Later ga je steeds meer onderdelen zelf aanpassen en bouwen.

Verander alleen de code die bij de opdracht hoort.

Lees de genoemde theorie uit het lesboek wanneer het werkboek daarnaar verwijst.

## De bestanden

De applicatie bestaat uit verschillende onderdelen.

### Frontend

In de map `public/` staan de bestanden die in de browser worden gebruikt:

* HTML voor de structuur van de pagina's;
* CSS voor de vormgeving;
* JavaScript voor interactie en communicatie met de server.

### Server

In `server.js` staat de Node.js- en Express-code.

Hier vind je onder andere de routes waarmee de browser gegevens kan opvragen of versturen.

### Database

De database staat in:

```text
data/webshop.db
```

Dit is een SQLite-database met onder andere producten en de gegevens die daarbij horen.

## Database bekijken

Je kunt `data/webshop.db` rechtstreeks in VS Code openen. In de Codespace zijn hiervoor SQLite-extensies geïnstalleerd.

Je kunt de database ook vanuit de terminal bekijken:

```bash
sqlite3 data/webshop.db
```

Daarna kun je bijvoorbeeld een SQL-query uitvoeren:

```sql
SELECT * FROM producten;
```

Gebruik:

```text
.quit
```

om SQLite weer af te sluiten.

## Als je iets verandert

Controleer na een verandering altijd wat het effect is.

Afhankelijk van de opdracht kun je daarvoor kijken naar:

* de website in de browser;
* de Developer Tools van de browser;
* het tabblad **Network**;
* de terminal waarin de server draait;
* de database;
* de response van een API-route.

Bij een databasewebsite werken meerdere onderdelen samen. Als iets niet werkt, probeer daarom eerst te bepalen **tot waar in de keten het nog wel goed gaat**.

## Je werk bewaren

Sla je bestanden tijdens het werken regelmatig op.

Als je een onderdeel hebt afgerond:

1. controleer of je website nog werkt;
2. schrijf een duidelijk commitbericht;
3. commit je veranderingen;
4. synchroniseer je veranderingen met GitHub.

## Belangrijk

* Gebruik steeds dezelfde repository en Codespace.
* Start de website met `npm start`.
* Open de website via de draaiende server en niet rechtstreeks via een HTML-bestand.
* Verwijder geen bestanden, tabellen of gegevens tenzij een opdracht dat vraagt.
* Verander bestandsnamen alleen wanneer een opdracht dat vraagt.
* Controleer regelmatig of de website nog werkt.
* Commit je werk na een afgerond onderdeel.
* Probeer bij een fout eerst te bepalen of het probleem in de browser, server of database zit.
* Loopt iets niet zoals verwacht? Gebruik eerst het werkboek en de bijbehorende uitleg in het lesboek. Kom je er daarna niet uit, vraag dan hulp aan de docent.

## Klaar met de module?

Je docent geeft aan welke functionaliteiten je uiteindelijk zelf moet bouwen en hoe het project wordt ingeleverd.
