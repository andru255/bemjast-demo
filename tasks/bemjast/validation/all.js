OnlyBlock       = require("./only_block.js");
BlockModule     = require("./block_module.js");
BlockModuleView = require("./block_module_view.js");

var Validation = {
    isValidParam: function(paramSelf){
        if(typeof paramSelf === "string"){
           return paramSelf;
        } else {
           return false;
        }
    },
    isOnlyBlock: OnlyBlock,
    isBlockAndModuleButNotView: BlockModule,
    isBlockAndModuleAndView: BlockModuleView
}
module.exports = Validation;
