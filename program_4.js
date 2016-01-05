var fs = require('fs');
var fileName = process.argv[2];

fs.readFile(fileName, function (error, data) {
    var numberOfNewlines;
    if (error) throw error;
    numberOfNewlines = data.toString().split('\n').length - 1;
    console.log(numberOfNewlines);
});
