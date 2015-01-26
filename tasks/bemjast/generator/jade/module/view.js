var PathLib = require("path");
var gutil = require("gulp-util");

var Helper_Gulp_File = require("../../../helper/gulp/file.js");
var Helper_StringFile = require("../../../helper/string_file.js");

var Factory_Jade = require("../../../factory/jade.js");

var templatePath = __dirname + "../../../../templates/jade/module/";
var templateName = "view.jade";

var Generator_Jade_Module_View = function(viewName, moduleName, path){
    var objFactoryJade = new Factory_Jade(path);
    var templateString = Helper_StringFile(templatePath, templateName);
    var parsed = gutil.template(templateString ,{moduleName: moduleName, viewName: viewName, file:""});

    objFactoryJade.createFile(viewName, parsed);
};

module.exports = Generator_Jade_Module_View;
