var Stream = require("stream");
var Helper_Gulp_Callback = function(whenStreamIsTransform){
    "use strict";
    var stream = new Stream.Transform({objectMode: true});

    stream._transform = function(file, unused, callback){
        whenStreamIsTransform.call(this);
        callback(null, false);
    }

    return stream;
};

module.exports = Helper_Gulp_Callback;

