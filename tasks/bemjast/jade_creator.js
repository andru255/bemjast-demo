var gulp = require("gulp");
var file = require("gulp-file");

var jade_creator = function(path){
    this.path = path;
};

jade_creator.prototype.doFileNameWithExtension = function(fileName){
    return fileName + ".jade";
};

jade_creator.prototype.createFile = function(fileName, content){
    var fileNameWithExtension = this.doFileNameWithExtension(fileName);
    return file(fileNameWithExtension, content, {src: true}).pipe(gulp.dest(this.path));
};

module.exports = jade_creator;
