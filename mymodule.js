module.exports = function () {
    var mymodule = {};
    mymodule.findFiles = function (dirPath, fileExt, callback) {
        var fs = require('fs');
        var path = require('path');

        fs.readdir(dirPath, function (err, files) {
            if(err) return callback(err);

            var filteredFiles = files.filter(function (file, index) {
                return (fileExt && path.extname(file) === ("." + fileExt));
            });

            callback(null, filteredFiles);
        });
    };
    return mymodule;
};
