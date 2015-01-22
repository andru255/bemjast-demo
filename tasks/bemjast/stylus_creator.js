var gulp = require("gulp");
var file = require("gulp-file");

var stylus_creator = function(path){
    this.path = path;
};

stylus_creator.prototype.doFileNameWithExtension = function(fileName){
    return fileName + ".styl";
};

stylus_creator.prototype.createFile = function(fileName, content){
    var fileNameWithExtension = this.doFileNameWithExtension(fileName);
    return file(fileNameWithExtension, content, {src: true}).pipe(gulp.dest(this.path));
};

module.exports = stylus_creator;
