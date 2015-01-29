var SRC_PATH = "src/";
var BUILD_PATH = "build/";

var gulp = require("gulp"),
    stylus = require("gulp-stylus"),
    jade = require("jade"),
    gulpJade = require("gulp-jade"),
    debug = require("gulp-debug"),
    gutil = require("gulp-util"),
    file = require("gulp-file"),
    parseArgs = require("minimist"),
    jeet = require("jeet"),
    runTask = function(taskName, options){
        var taskSelf = require("./tasks/"+ taskName);
        var globals = {
            SRC_PATH: SRC_PATH,
            BUILD_PATH: BUILD_PATH
        };
        var librariesForTask = {
            gutil: gutil,
            parseArgs: parseArgs,
            file: file
        };
        return new taskSelf(gulp, options, librariesForTask);
    },
    runMainTask = function(taskName, options){
        var taskSelf = require("./tasks/"+ taskName + "/main.js");
        var librariesForTask = {
            gutil: gutil,
            parseArgs: parseArgs,
            file: file
        };
        return new taskSelf(gulp, options, librariesForTask);
    };

/**********paths************/
var path = {
    statics: {
        src: SRC_PATH + "static/**/*.*",
        build: BUILD_PATH + "static/"
    },
    stylus:{
        watch: [
            SRC_PATH + "stylus/*.styl",
            SRC_PATH + "stylus/**/*.styl"
        ],
        src: [
            SRC_PATH + "stylus/*.styl",
            SRC_PATH + "stylus/**/*.styl",
            "!" + SRC_PATH + "stylus/_**/*.styl",
        ],
        build: BUILD_PATH + "css/"
    },
    jade:{
        watch: [
            SRC_PATH + "jade/*.jade",
            SRC_PATH + "jade/**/*.jade"
        ],
        src: [
            SRC_PATH + "jade/*.jade",
            SRC_PATH + "jade/**/*.jade",
            "!" + SRC_PATH + "jade/_**/*.jade",
            "!" + SRC_PATH + "jade/**/_**/*.jade"
        ],
        build: BUILD_PATH
    }
};

var watchPaths = {
        stylus: path.stylus.watch,
        jade:   path.jade.watch
};

/**************tasks*************/
gulp.task("2css", function(){
    return gulp.src(path.stylus.src)
        .pipe(stylus({
            use:[jeet()],
            compress: true
        }))
        .pipe(gulp.dest(path.stylus.build));
});

gulp.task("2html", function(){
    gutil.log("str", path.jade.src)
    return gulp.src(path.jade.src)
        .pipe(gulpJade({
            pretty: true,
            compileDebug: true
        }))
        .pipe(gulp.dest(path.jade.build));
});

gulp.task("copy_statics", function(){
    return gulp.src(path.statics.src)
        .pipe(gulp.dest(path.statics.build));
});

//** utily for bem command
runMainTask("bemjast", {
    params: process.argv,
    blockJadePath: SRC_PATH + "jade/_blocks/",
    blockStylusPath: SRC_PATH + "stylus/_blocks/",
    moduleJadePath: SRC_PATH + "jade/modules/",
    moduleStylusPath: SRC_PATH + "stylus/modules/",
    pathAllModulesStylus: SRC_PATH + "stylus/modules/all/",
});

gulp.task("watch", function(){
    gulp.watch(watchPaths.jade, ["2html"]);
    gulp.watch(watchPaths.stylus, ["2css"]);
});

gulp.task("default", ["2css", "2html"]);
