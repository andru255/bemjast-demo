var path = require("path");
var gutil = require("gulp-util");

var Factory_Stylus = require("../factory/stylus.js");

var Generator_Jade_Module_Block = require("../generator/jade/module/block.js");

var Generator_Stylus_All = require("../generator/stylus/all.js");

var createFolderByName = function(fromPath, directoryName){
    return path.join(fromPath, directoryName);
};

var Process_BlockModule = function(blockName, moduleName, settings){
    var folderNameTarget = "_blocks";

    var folderModuleStylus = createFolderByName(settings.moduleStylusPath, moduleName);
    var folderModuleJade = createFolderByName(settings.moduleJadePath, moduleName);

    var folderModuleBlockStylus = createFolderByName(folderModuleStylus, folderNameTarget);
    var folderModuleBlockJade = createFolderByName(folderModuleJade, folderNameTarget);

    var objFactoryStylus = new Factory_Stylus(folderModuleBlockStylus);

    objFactoryStylus.createFile(blockName, "", function(){
        Generator_Stylus_All(settings.blockStylusPath,
                             settings.pathAllModulesStylus,
                             settings.fileNameAllModulesStylus);
    });

    Generator_Jade_Module_Block(blockName, moduleName, folderModuleBlockJade);

};

module.exports = Process_BlockModule;
