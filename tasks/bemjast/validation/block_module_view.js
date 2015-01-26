var isBlockAndModuleAndView = function(blockName, moduleName, viewName){
        var result = false;
        if(moduleName && blockName && viewName){
            result = true;
        } else {
            result = false;
            //throw "For create a block and module and view declare like this: -b [blockName] -m [moduleName] -v [viewName]";
        }
        return result;
};
module.exports = isBlockAndModuleAndView;
