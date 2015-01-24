var gutil = require("gulp-util");
var Helper_ListFiles = require("./../helpers/list_files.js");

var Factory_Jade = require("../factory/jade.js");
var Factory_Stylus = require("../factory/stylus.js");

var Generator_Stylus_All = require("../generator/stylus/all.js");

var Process_OnlyBlock = function(blockName, settings){
    console.log("processing when is only block!", blockName);
    var objFactoryStylus = new Factory_Stylus(settings.blockStylusPath);
    objFactoryStylus.createFile(blockName, "", function(){
        Generator_Stylus_All(settings.pathAllModulesStylus, settings.fileNameAllModulesStylus);
    });
};

module.exports = Process_OnlyBlock;
