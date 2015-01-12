var SRC_PATH = "src/";
var BUILD_PATH = "build/";

var gulp = require("gulp"),
    stylus = require("gulp-stylus"),
    jade = require("gulp-jade");

var path = {
    stylus:{
        src: [
            SRC_PATH + "stylus/*.styl",
            SRC_PATH + "stylus/**/*.styl",
            "!" + SRC_PATH + "stylus/_**/*.styl",
        ],
        build: BUILD_PATH + "css/"
    },
    jade:{
        src: [
            SRC_PATH + "jade/*.jade",
            SRC_PATH + "jade/**/*.jade",
            "!" + SRC_PATH + "jade/_**/*.jade"
        ],
        build: BUILD_PATH
    }
};

var watchPaths = {
        stylus: [SRC_PATH + path.stylus.src],
        jade:   [SRC_PATH + path.jade.src]
};
/**************tasks*************/
gulp.task("2css", function(){
    return gulp.src(path.stylus.src)
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest(path.stylus.build));
});

gulp.task("2html", function(){
    return gulp.src(path.jade.src)
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(path.jade.build));
});

gulp.task("watch", function(){
    gulp.watch(watchPaths.jade, ["2html"]);
    gulp.watch(watchPaths.stylus, ["2css"]);
});

gulp.task("default", ["2css", "2html"]);
