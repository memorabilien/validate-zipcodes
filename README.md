# Validate ZIP Codes with Regular Expressions

[![npm](https://img.shields.io/npm/v/val-zip)](https://www.npmjs.com/package/val-zip)

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

are available. Although any 5 or 4 Digit number is possible. More coming soon...

## Usage

##### Download via Node Package Manager (NPM):

```shell
npm install val-zip
```

##### Import via Content Delivery Network (CDN):

```js
<script src="https://unpkg.com/val-zip@1.0.5/dist/index.min.js" crossorigin="anonymous" referrerpolicy="no-referrer">
```



## Example

```javascript
const valZip = require("val-zip");

// let's say a random user puts in a zipcode somehow and you want to validate if the zip code exists.

var userCountry = "US"; // options: "US","DE","AT","CH","BE","DK","PL","CZ"
var inputZip_1 = "12345"; //fake 
var inputZip_2 = "00601"; //real


valZip(inputZip_1, userCountry) // returns false
valZip(inputZip_2, userCountry) // returns true


```
