var PathLib = require("path");
var gutil = require("gulp-util");

var Helper_Gulp_File = require("../../../helper/gulp/file.js");
var Helper_StringFile = require("../../../helper/string_file.js");

var Factory_Jade = require("../../../factory/jade.js");

var templatePath = __dirname + "../../../../templates/jade/module/";
var templateName = "block.jade";

var Generator_Jade_Module_Block = function(blockName, moduleName, path){
    var objFactoryJade = new Factory_Jade(path);
    var templateString = Helper_StringFile(templatePath, templateName);
    var parsed = gutil.template(templateString ,{moduleName: moduleName, blockName: blockName, file:""});

    objFactoryJade.createFile(blockName, parsed);
};

module.exports = Generator_Jade_Module_Block;
