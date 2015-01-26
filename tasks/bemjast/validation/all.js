Validation_OnlyBlock       = require("./only_block.js");
Validation_OnlyModule      = require("./only_module.js");
Validation_BlockModule     = require("./block_module.js");
Validation_ModuleView      = require("./module_view.js");
Validation_BlockModuleView = require("./block_module_view.js");

var Validation = {
    isValidParam: function(paramSelf){
        if(typeof paramSelf === "string"){
           return paramSelf;
        } else {
           return false;
        }
    },
    isOnlyBlock: Validation_OnlyBlock,
    isOnlyModule: Validation_OnlyModule,
    isModuleAndViewButNotBlock: Validation_ModuleView,
    isBlockAndModuleButNotView: Validation_BlockModule,
    isBlockAndModuleAndView: Validation_BlockModuleView
}
module.exports = Validation;
