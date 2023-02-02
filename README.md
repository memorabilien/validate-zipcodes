# Validate ZIP Codes with Regular Expressions

[![npm](https://img.shields.io/npm/v/val-zip)](https://www.npmjs.com/package/val-zip)  [![Featured on Openbase](https://badges.openbase.com/js/featured/val-zip.svg?token=St6VkI/cJCMuM51Xw17TOzXwWgBt7vTL7lWoH32B40I=)](https://openbase.com/js/val-zip?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge) [![](https://data.jsdelivr.com/v1/package/npm/val-zip/badge?style=rounded)](https://www.jsdelivr.com/package/npm/val-zip)

A Library of JavaScript Regular Expressions for validating if a specific Zip-code exists in a specific Country.

Not every 5 digit number is automatically a zip code... As of now Regular Expression seem to be the fastest way of validating if a zip code actually exists. No slow backend validation needed, just some fancy RegExp.

As of now only the Regular Expressions for

* Germany
* Austria
* Switzerland
* USA(5-Digit version)
* Belgium
* Denmark
* Czechia
* Finland
* Norway

are available. Although any 5 or 4 Digit number is possible. More coming soon...

## Usage

Download via Node Package Manager (NPM):

```shell
npm install val-zip
```

Import via Content Delivery Network (CDN):

```js
<script src="https://unpkg.com/val-zip@latest/dist/index.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdn.jsdelivr.net/npm/val-zip/dist/index.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

## Example

```javascript
import { valZip } from "val-zip";
// alternative: const valZip = require("val-zip"); 
// note: the require function is nodejs specific 

// let's say a random user puts in a zipcode somehow and you want to validate if the zip code exists.

var userCountry = "US"; // options: "US","DE","AT","CH","BE","DK","PL","CZ","NO","FI" 
var inputZip_1 = "12345"; //fake 
var inputZip_2 = "00601"; //real


valZip(inputZip_1, userCountry) // returns false
valZip(inputZip_2, userCountry) // returns true
```

## Zip Code Sources

| country       | last update |                                                               license                                                               | source                                   |
| ------------- | ----------- | :----------------------------------------------------------------------------------------------------------------------------------: | ---------------------------------------- |
| Austria       | 04.01.2023  |                                                                 none                                                                 | Österreichische Post Aktiengesellschaft |
| Belgium       | 21.11.2021  |                                                                 none                                                                 | Bpost                                    |
| Switzerland   | 01.01.2023  | [CC-BY](https://creativecommons.org/licenses/by/4.0/legalcode): [Die Schweizerische Post](https://swisspost.opendatasoft.com/pages/home/) | Die Schweizerische Post                  |
| Czechia       | 01.01.2023  |                                                                 none                                                                 | Česká pošta                           |
| Germany       | 01.06.2019  |                                                                 none                                                                 | Launix                                   |
| Denmark       | 22.06.2022  |                                                                 none                                                                 | PostNord Danmark                         |
| United States | 31.12.2020  |                                                                 none                                                                 | Internal Revenue Service, US Census      |
| Norway        | 01.10.2022  |                                                                 none                                                                 | Osten Norge AS                         |
| Finland       | 30.01.2023  |                                                                 none                                                                 | Posti Group Oy                           |
| Italy         | 01.01.2022  |                                                                                                                                      | istat                                    |

Some Countries are missing, just because the official zipcode database is either paywalled or entirely copyrighted.

This is the List of countries I am unable to source data from:

| country   | limitation       | source                                |
| --------- | ---------------- | ------------------------------------- |
| Poland    | only with permit | Poczta Polska Spółka Akcyjna        |
| Sweden    | paid only        | Postnummerservice Norden AB           |
| Australia | paid only        | Australia Post                        |
| Spain     | paid only        | Sociedad Estatal Correos y Telegrafos |
