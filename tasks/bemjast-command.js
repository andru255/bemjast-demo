/*-- Task main for handle files and more speed of development under bemjast*/
function Task(gulp, options, librariesForTask){
    //using global libraries
    var log = librariesForTask.gutil.log;
    var parseArgs = librariesForTask.parseArgs;
    var file = librariesForTask.file;

    var defaults = {
        blockJadePath: "./dummy/jade/_blocks/",
        blockStylusPath: "./dummy/stylus/_blocks/"
    };

    var settings = extend({},defaults, options);

    var params = options.params;
    var nativeOptionsFromParams = params.slice(2);
    var parsedParams = parseArgs( nativeOptionsFromParams,{});

    var blockName = parsedParams.b;

    var TaskSelf = function(){
        //loging arguments
        log("options", options);
        log("settings", settings);
        log("arguments", params);
        log("nativeOptionsFromParams ", nativeOptionsFromParams );
        log("parsed", parsedParams );
        try{

            blockName = validateBlockName(blockName);
            //demo create a block
            var newBlockJadeFile = file(newJadeFile(blockName), "it works for jade :D", {src: true}).pipe(gulp.dest(settings.blockJadePath));
            var newBlockStylusFile  = file(newStylusFile(blockName), "it works for stylus =X", {src: true}).pipe(gulp.dest(settings.blockStylusPath));

            //logs
            log("creating the files by the block:", blockName);
            log("jade:", newBlockJadeFile);
            log("stylus:", newBlockStylusFile);

        } catch(err){
            log("ERROR:", err);
        }
    };
    gulp.task("bemjast-command", TaskSelf);
};

var extend = function(target){
    var sources = [].slice.call(arguments, 1);
    sources.forEach(function(source){
        for(var prop in source){
            target[prop] = source[prop];
        }
    });
    return target;
};

var validateBlockName = function(blockName){
    if(typeof blockName === "string"){
       return blockName;
    } else {
       throw "For create a block declare like this: -b [blockName]";
    }
};

var newJadeFile = function(fileName){
    return fileName + ".jade";
};

var newStylusFile = function(fileName){
    return fileName + ".styl";
};

var createFilesByBlockName = function(blockName){
    createBlockJadeFile(blockName);
    createBlockStylusFile(blockName);
};

var createBlockJadeFile = function(){
    return
};
var createBlockStylusFile = function(){};

module.exports = Task;
