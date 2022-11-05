# Validate ZIP Codes with Regular Expressions

A Library of JavaScript Regular Expressions for validating if a specific Zip-code exists in a specific Country.

Not every 5 digit number is automatically a zip code... 
As of now Regular Expression seem to be the fastest way of validating if a zip code acutally exists.


As of now only the Regular Expressions for 
-Germany 
-Austria
-Swizerland
-USA(5-Digit version)

are availible. Although any 5 or 4 Digit number is possible. More coming soon...

## Example
```JavaScript
const zipUS = /^([0123456789]((?<=0)[012345678]((?<=0)[67  ... )$/; 
//This is the Regular Expression.

zipUS.test('12345') // returns false... zip code does not exist
zipUS.test('00601') // returns true... zip code does exist

```

## Usage
CDN 
```JavaScript
 // not availible yet
```
