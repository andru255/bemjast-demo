var isOnlyModule = function(blockName, moduleName, viewName){
    var result = false;
    if(!blockName && !viewName){
        if(moduleName){
            result = true;
        } else {
            result = false;
            throw "For create a module declare like this: -m [moduleName]";
        }
    } else {
        result = false;
    }
    return result;
};
module.exports = isOnlyModule;
