var HelperGulpFile = require("../../helpers/gulp/file.js");
var HelperListFiles = require("../../helpers/list_files.js");

var templatePath = "../../templates/stylus/modules/all/";
var templateName = "all.styl";

var Generator_Stylus_All = function(path, fileName){
    console.log("puts blocks like require here:::");
    console.log("path", path);
    console.log("fileName", fileName);
};

module.exports = Generator_Stylus_All;
