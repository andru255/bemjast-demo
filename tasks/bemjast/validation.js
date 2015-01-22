var validation = {
    isValidParam: function(paramSelf){
        if(typeof paramSelf === "string"){
           return paramSelf;
        } else {
           return false;
        }
    },
    isOnlyBlock: function(blockName, moduleName, viewName){
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
    },
    isBlockAndModuleButNotView: function(blockName, moduleName, viewName){
        var result = false;
        if(!viewName){
            if(moduleName && blockName){
                result = true;
            } else {
                result = false;
                throw "For create a block and module declare like this: -b [blockName] -m [moduleName]";
            }
        } else {
            result = false;
        }
        return result;
    },
    isBlockAndModuleAndView: function(blockName, moduleName, viewName){
        var result = false;
        if(moduleName && blockName && viewName){
            result = true;
        } else {
            result = false;
                throw "For create a block and module and view declare like this: -b [blockName] -m [moduleName] -v [viewName]";
        }
        return result;
    }
};

module.exports = validation;
