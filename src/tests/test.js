const valZip = require("../index.js");
const fs = require("fs");

let files;
let errors =[];
try{ files = fs.readdirSync("../../../data_scraper/lib/zip", "utf8");}catch(error){console.log(error)}
for(const file of files){
    let data;
    let countryCode = file.split(".")[0];
    let failures = 0;
    let failureRate;
    try{ data = fs.readFileSync("../../../data_scraper/lib/zip/"+ file, "utf8");}catch(error){console.log(error)}
    data = JSON.parse(data);
    data = data[countryCode];
  

    data.forEach((element) => {
        if(valZip(element, countryCode) === false){
            failures += 1;
        }
    });

    failureRate = failures / data.length


    errors.push(failureRate);

}

console.log(errors);