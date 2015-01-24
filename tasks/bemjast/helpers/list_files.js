var fs = require("fs");
var path = require("path");

var listFiles = function(directoryPath, whenHaveAllFiles){
    var onlyFiles = [];
    fs.readdir(directoryPath, function(err, files){
        if(err){
            throw err;
        }

        onlyFiles = files.map(function(fileName){
                return path.join(directoryPath, fileName);
            }).filter(function(file){
                return fs.statSync(file).isFile();
            });

        whenHaveAllFiles.call(this, onlyFiles);
    });
}
module.exports = listFiles;
