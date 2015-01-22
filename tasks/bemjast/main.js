var helpers = require("./helpers.js");
var validation = require("./validation.js");
var JadeCreator = require("./jade_creator.js");
var StylusCreator = require("./stylus_creator.js");
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
        fileAllModulesStylus: "./dummy/stylus/all/all.styl"
    };

    var settings = helpers.extend({},defaults, options);

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

        var objJadeCreator = new JadeCreator(settings.blockJadePath);
        var objStylusCreator = new StylusCreator(settings.blockStylusPath);

        try{
            blockName = validation.isValidParam(paramBlockName);
            moduleName = validation.isValidParam(paramModuleName);
            viewName = validation.isValidParam(paramViewName);

            log("blockName", blockName);
            log("moduleName", moduleName);
            log("viewName", viewName);

            if(validation.isOnlyBlock(blockName, moduleName, viewName)){
                log("runs when its declared some -b");
            } else {
                if(validation.isBlockAndModuleButNotView(blockName, moduleName, viewName)){
                    log("runs when its declared some -b -mod");
                } else {
                    if(validation.isBlockAndModuleAndView(blockName, moduleName, viewName)){
                        log("runs when its declared some -b -mod -view");
                    }
                }
            }
            //if(validation.isOnlyBlock(blockName, moduleName, viewName)){
                //objStylusCreator.createFile(blockName, "it works for stylus xD");
                //objJadeCreator.createFile(blockName, "it works for jade :D");
                //log("creating the files by the block:", blockName);
            //}
            //logs

        } catch(err){
            log("ERROR:", err);
        }

    };
    gulp.task("bemjast", taskSelf);
};

module.exports = Task;
