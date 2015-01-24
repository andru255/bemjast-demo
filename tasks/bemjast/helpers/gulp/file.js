var Stream = require("stream");
var gutil  = require("gulp-util");

var HelperGulpFile = function(fileName, contents){
    var src = Stream.Readable({objectMode: true});
    var optionsFile = {
        cwd: "",
        base: "",
        path: fileName,
        contents: new Buffer(contents)
    };
    src._read = function(){
        this.push(new gutil.File(optionsFile));
        this.push(null);
    }
    return src;
};

module.exports = HelperGulpFile;
