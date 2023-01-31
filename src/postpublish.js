const fs = require("fs");

let packageFile;
let version;
try{ packageFile = fs.readFileSync("../package.json", "utf-8");}catch(error){console.log(error)}

packageFile = JSON.parse(packageFile);
version = packageFile.version;
version = version.split(".");
version[version.length -1] = (parseInt(version[version.length -1]) + 1).toString();
packageFile.version = version.join(".");