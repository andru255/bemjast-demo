var Helper_Extend = require("./helpers/extend.js");
var Validation = require("./validation/all.js");
var Process = require("./process/all.js");

var fs = require("fs");

var Task = function(gulp, options, librariesForTask){
    //using global libraries
    var log = librariesForTask.gutil.log;
    var parseArgs = librariesForTask.parseArgs;
    var file = librariesForTask.file;

    var defaults = {
        blockJadePath: "./dummy/jade/_blocks/",
        blockStylusPath: "./dummy/stylus/_blocks/",
        moduleJadePath: "./dummy/jade/modules/",
        moduleStylusPath: "./dummy/stylus/modules/",
        pathAllModulesStylus: "./dummy/stylus/all/",
        fileNameAllModulesStylus: "all.styl"
    };

    var settings = Helper_Extend({},defaults, options);

    var params = options.params;
    var nativeOptionsFromParams = params.slice(2);
    var parsedParams = parseArgs( nativeOptionsFromParams,{});

    var paramBlockName = parsedParams.b;
    var paramModuleName = parsedParams.m;
    var paramViewName = parsedParams.v;

    var taskSelf = function(){
        //loging arguments
        log("options", options);
        log("settings", settings);
        log("arguments", params);
        log("nativeOptionsFromParams ", nativeOptionsFromParams );
        log("parsed", parsedParams );

        try{
            blockName = Validation.isValidParam(paramBlockName);
            moduleName = Validation.isValidParam(paramModuleName);
            viewName = Validation.isValidParam(paramViewName);

            log("blockName", blockName);
            log("moduleName", moduleName);
            log("viewName", viewName);

            if(Validation.isOnlyBlock(blockName, moduleName, viewName)){
                log("runs when its declared some -b");
                Process.onlyBlock(blockName, settings);
            } else {
                if(Validation.isBlockAndModuleButNotView(blockName, moduleName, viewName)){
                    log("runs when its declared some -b -mod");
                } else {
                    if(Validation.isBlockAndModuleAndView(blockName, moduleName, viewName)){
                        log("runs when its declared some -b -mod -view");
                    }
                }
            }
        } catch(err){
            log("ERROR:", err);
        }
    };
    gulp.task("bemjast", taskSelf);
};

module.exports = Task;
