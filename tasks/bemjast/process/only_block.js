var path = require("path");
var gutil = require("gulp-util");
var Factory_Jade = require("../factory/jade.js");
var Factory_Stylus = require("../factory/stylus.js");

var Generator_Stylus_All = require("../generator/stylus/all.js");

var Process_OnlyBlock = function(blockName, settings){
    var objFactoryStylus = new Factory_Stylus(settings.blockStylusPath);
    var objFactoryJade = new Factory_Jade(settings.blockJadePath);

    objFactoryStylus.createFile(blockName, "", function(){
        console.log('created the block!', blockName);
        Generator_Stylus_All(settings.blockStylusPath,
                             settings.pathAllModulesStylus,
                             settings.fileNameAllModulesStylus);
    });

    objFactoryJade.createFile(blockName, "");

};

module.exports = Process_OnlyBlock;
