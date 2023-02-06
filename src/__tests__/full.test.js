import valZip from "../../dist/val-zip.js"
import * as fs from "node:fs"



        let files;
		let errors = [];
		try {
			files = fs.readdirSync("C:/validate_zipcodes/data_scraper/lib/zip", "utf8");
		} catch (error) {
			console.log(error);
		}
		for (const file of files) {
			console.log("validating %s...", file);
			let data;
			let countryCode = file.split(".")[0];
			let failures = 0;
			let failureRate;
			try {
				data = fs.readFileSync("C:/validate_zipcodes/data_scraper/lib/zip/" + file, "utf8");
			} catch (error) {
				console.log(error);
			}
			data = JSON.parse(data);
			data = data[countryCode];

			data.forEach((element) => {
				if (valZip(element, countryCode) === false) {
					failures += 1;
					console.log("Zipcode %s could not be validated with Database %s", element, countryCode);
				}
			});


			failureRate = failures / data.length;

			errors.push(failureRate);
		}
		let sum = 0;
		errors.forEach((element)=>{
			sum += element;
		})
		console.log("test result: %d", sum);


