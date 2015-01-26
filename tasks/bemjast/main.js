var Helper_Extend = require("./helper/extend.js");
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
        pathAllModulesStylus: "./dummy/stylus/modules/all/",
        fileNameAllModulesStylus: "all"
    };

    var settings = Helper_Extend({},defaults, options);

    var params = options.params;
    var nativeOptionsFromParams = params.slice(2);
    var parsedParams = parseArgs( nativeOptionsFromParams,{});

    var paramBlockName = parsedParams.b;
    var paramModuleName = parsedParams.m;
    var paramViewName = parsedParams.v;

    var orderList = [];

    var startOptionList = function(){
        var index = 0;
        while(orderList.length > index){
            var statement = orderList[index];
            console.log('statement', statement.query);
            if(statement.query){
                statement.whenQueryItsTrue();
                break;
            } else {
                index++;
            }
        }
    };

    var registerToOptionList = function(query, whenQueryItsTrue){

        orderList.push({
            query: query,
            whenQueryItsTrue: (typeof whenQueryItsTrue === "undefined")? function(){}: whenQueryItsTrue
        });
    }

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


            registerToOptionList(
                Validation.isOnlyBlock(blockName, moduleName, viewName),
                function(){
                    log("runs when its declared only -b");
                    Process.onlyBlock(blockName, settings);
                }
            );

            registerToOptionList(
                Validation.isOnlyModule(blockName, moduleName, viewName),
                function(){
                    log("runs when its declared only -m");
                    Process.onlyModule(moduleName, settings);
                }
            );

            registerToOptionList(
                Validation.isModuleAndViewButNotBlock(blockName, moduleName, viewName),
                function(){
                    log("runs when its declared some -m -v");
                    Process.moduleView(moduleName, viewName, settings);
                }
            );

            registerToOptionList(
                Validation.isBlockAndModuleButNotView(blockName, moduleName, viewName),
                function(){
                    log("runs when its declared some -b -m");
                    Process.blockModule(blockName, moduleName, settings);
                }
            );

            registerToOptionList(
                Validation.isBlockAndModuleAndView(blockName, moduleName, viewName),
                function(){
                    log("runs when its declared some -b -m -v");
                    Process.blockModuleView(blockName, moduleName, viewName, settings);
                }
            );

            startOptionList();
        } catch(err){
            log("ERROR:", err);
        }
    };
    gulp.task("bemjast", taskSelf);
};

module.exports = Task;
