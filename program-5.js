var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var allowedExtension = process.argv[3];

fs.readdir(dirPath, function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
        if(allowedExtension && path.extname(file) === ("." + allowedExtension)) {
            console.log(file);
        } 
    });
});
