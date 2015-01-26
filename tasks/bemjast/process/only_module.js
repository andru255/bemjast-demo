var path = require("path");
var gutil = require("gulp-util");

var Factory_Stylus = require("../factory/stylus.js");
var Generator_Jade_Module_View = require("../generator/jade/module/view.js");

var Generator_Stylus_All = require("../generator/stylus/all.js");

var createFolderByName = function(fromPath, directoryName){
    return path.join(fromPath, directoryName);
};

var Process_OnlyModule = function(moduleName, settings){
    var defaultViewName = "index";
    var objFactoryStylus = new Factory_Stylus(createFolderByName(settings.moduleStylusPath, moduleName));

    objFactoryStylus.createFile(defaultViewName, "", function(){
        Generator_Stylus_All(settings.blockStylusPath,
                             settings.pathAllModulesStylus,
                             settings.fileNameAllModulesStylus);
    });

    Generator_Jade_Module_View(defaultViewName, moduleName, createFolderByName(settings.moduleJadePath, moduleName));

};

module.exports = Process_OnlyModule;
