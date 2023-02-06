import * as assert from "node:assert"
import valZip from "../../dist/val-zip.js"


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
			EE:["EE-78314","904 30","746-24"],
			ES:["ES-30370","050 71","081-96"],
			LU:["LU-4119","121 0","6311-"],
			IS:["IS-105","2 00","625-"],
			FR:["FR-63620","987 50","694-50"]

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
			EE:["EE","ee","Ee"],
			ES:["ES","es","Es"],
			LU:["LU","lu","L  u"],
			IS:["IS","is","Is"],
			FR:["FR","fr","Fr"]
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
