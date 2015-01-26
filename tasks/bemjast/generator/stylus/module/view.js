var PathLib = require("path");
var gutil = require("gulp-util");

var Helper_Gulp_File = require("../../../helper/gulp/file.js");
var Helper_ListFiles = require("../../../helper/list_files.js");
var Helper_StringFile = require("../../../helper/string_file.js");
var Factory_Stylus = require("../../../factory/stylus.js");

var templatePath = __dirname + "../../../../templates/stylus/modules/module/";
var templateName = "view.styl";

var generateListBlockWithRelativePath = function(relativePath, listBlock){
    var blocksWithRelativePath = [];
    listBlock.forEach(function(blockName){
        blocksWithRelativePath.push(PathLib.join(relativePath, blockName));
    });
    return blocksWithRelativePath;
};

var getBlockNames = function(pathToRead, whenItsFinished){
    var callbackWhenFinished = function(){};
    var finalContent = "";

    if(typeof whenItsFinished === "function"){
        callbackWhenFinished = whenItsFinished;
    }

    console.log("pathToRead", pathToRead);

    Helper_ListFiles(pathToRead, function(content){
        console.log('content', content);
        callbackWhenFinished.call(this, content)
    });
};

var Generator_Stylus_View = function(pathToRead, path, fileName){
    var objFactoryStylus = new Factory_Stylus(path);
    var relativePath = PathLib.relative(path, pathToRead);

    getBlockNames(pathToRead, function(collectionBlockNames){
        var listToParseWithTemplate = generateListBlockWithRelativePath(relativePath, collectionBlockNames);
        var templateString = Helper_StringFile(templatePath, templateName);
        var parsed = gutil.template(templateString ,{blocks: listToParseWithTemplate, file:""});
        objFactoryStylus.createFile(fileName, parsed);
    });
};

module.exports = Generator_Stylus_View;
