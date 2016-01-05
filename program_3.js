var fs = require('fs');
var fileBuffer;
var numberOfNewlines;

if(process.argv[2]) {
    fileBuffer = fs.readFileSync(process.argv[2]);
} else {
    throw "file_name wasn't specified";
}

numberOfNewlines = fileBuffer.toString().split('\n').length - 1;
console.log(numberOfNewlines);
