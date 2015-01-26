var gulp = require("gulp");
var Helper_Gulp_File = require("../helper/gulp/file.js");
var Helper_Gulp_Callback = require("../helper/gulp/callback.js");

var Factory_Stylus = function(path){
    this.path = path;
};

Factory_Stylus.prototype.doFileNameWithExtension = function(fileName){
    return fileName + ".styl";
};

Factory_Stylus.prototype.createFile = function(fileName, content, whenFileCreated){
    var fileNameWithExtension = this.doFileNameWithExtension(fileName);
    var callbackWhenFileCreated = function(){};

    if(typeof whenFileCreated === "function"){
        callbackWhenFileCreated = whenFileCreated;
    }

    return Helper_Gulp_File(fileNameWithExtension, content)
            .pipe(gulp.dest(this.path))
            .pipe(Helper_Gulp_Callback(function(){
                callbackWhenFileCreated.call(this);
            }));
};

module.exports = Factory_Stylus;
