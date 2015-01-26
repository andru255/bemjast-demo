var fs = require("fs");
var path = require("path");

var Helper_ListFiles = function(directoryPath, whenHaveAllFiles, eachFileFound){
    var onlyFiles = [];
    if ( fs.existsSync(directoryPath) ){
        fs.readdir(directoryPath, function(err, files){
            if(err){
                throw err;
            }

            files.filter(function(fileName){
                if(fs.statSync( path.join(directoryPath, fileName) ).isFile()){
                    onlyFiles.push(fileName);
                }
            });

            whenHaveAllFiles.call(this, onlyFiles);
        });
    } else {
        whenHaveAllFiles.call(this, onlyFiles);
    }
}
module.exports = Helper_ListFiles;
