import * as assert from "node:assert"
import valZip from "../index"


describe("Checking Build...", function () {
	it("should return 0", function () {
        console.log("Checking at random")
        const testData = {
			AT: ["AT-2561", "3495 ", "4694"],
			BE: ["BE-9992", "9932 ", "4910"],
			CH: ["CH-9643", "1618 ", "3453"],
			CZ: ["CZ-79828", "735 38", "586-07"],
			DE: ["DE-88048", "33106 ", "32339"],
			DK: ["DK-0929", "9992 ", "1800"],
			FI: ["FI-95974", "54950 ", "38720"],
			NO: ["NO-9194", "1622 ", "0155"],
			US: ["US-99662", "953 58", "180-85"],
			IT: ["IT-66032", "870 10", "370-59"],
		};
        const testCountries = {
			AT: ["AT", "at", "at "],
			BE: ["BE", "be", "Be "],
			CH: ["CH", "ch", "Ch "],
			CZ: ["CZ", "cz", "Cz "],
			DE: ["DE", "de", "De "],
			DK: ["DK", "dk", "Dk "],
			FI: ["FI", "fi", "Fi "],
			NO: ["NO", "no", "No "],
			US: ["US", "us", "Us "],
			IT: ["IT", "it", "It"],
		};
        let errorCounter = 0;
        let acceptable = 0;

        for(const key in testData){
            testData[key].forEach((element,index) => {
                if(!valZip(element, testCountries[key][index])){
                    errorCounter += 1;
					console.log(element)
                }
            });
        }
        console.log("%d errors detected", errorCounter);
        assert.equal(errorCounter, acceptable);
	});
});
