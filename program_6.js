var mymodule = require('./mymodule.js');
var object = mymodule();

var dirPath = process.argv[2];
var fileExt = process.argv[3];

object.findFiles(dirPath, fileExt, function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
        console.log(file);
    });
});
