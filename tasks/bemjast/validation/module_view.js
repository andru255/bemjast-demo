var isModuleAndViewButNotBlock = function(blockName, moduleName, viewName){
        var result = false;
        if(!blockName){
            if(moduleName && viewName){
                result = true;
            } else {
                result = false;
                //throw "For create a module and view declare like this: -m [moduleName] -v [viewName]";
            }
        } else {
            result = false;
        }
        return result;
};
module.exports = isModuleAndViewButNotBlock;
