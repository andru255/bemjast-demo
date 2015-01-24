var isOnlyBlock = function(blockName, moduleName, viewName){
    var result = false;
    if(!moduleName && !viewName){
        if(blockName){
            result = true;
        } else {
            result = false;
            throw "For create a block declare like this: -b [blockName]";
        }
    } else {
        result = false;
    }
    return result;
};
module.exports = isOnlyBlock;
