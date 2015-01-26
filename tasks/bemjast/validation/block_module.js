var isBlockAndModuleButNotView= function(blockName, moduleName, viewName){
        var result = false;
        if(!viewName){
            if(moduleName && blockName){
                result = true;
            } else {
                result = false;
                //throw "For create a block and module declare like this: -b [blockName] -m [moduleName]";
            }
        } else {
            result = false;
        }
        return result;
};
module.exports = isBlockAndModuleButNotView;
