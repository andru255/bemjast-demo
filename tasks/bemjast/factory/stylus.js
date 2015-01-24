var gulp = require("gulp");
var HelperGulpFile = require("../helpers/gulp/file.js");
var HelperGulpCallback = require("../helpers/gulp/callback.js");

var FactoryStylus = function(path){
    this.path = path;
};

FactoryStylus.prototype.doFileNameWithExtension = function(fileName){
    return fileName + ".styl";
};

FactoryStylus.prototype.createFile = function(fileName, content, whenFileCreated){
    var fileNameWithExtension = this.doFileNameWithExtension(fileName);
    return HelperGulpFile(fileNameWithExtension, content)
            .pipe(gulp.dest(this.path))
            .pipe(HelperGulpCallback(function(){
                whenFileCreated.call(this);
            }));
};

module.exports = FactoryStylus;
