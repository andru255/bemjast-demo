var Process_OnlyBlock = require("./only_block.js");
var Process_OnlyModule = require("./only_module.js");
var Process_ModuleView = require("./module_view.js");
var Process_BlockModule = require("./block_module.js");
var Process_BlockModuleView = require("./block_module_view.js");

var Process = {
    onlyBlock : Process_OnlyBlock,
    onlyModule: Process_OnlyModule,
    moduleView: Process_ModuleView,
    blockModule: Process_BlockModule,
    blockModuleView: Process_BlockModuleView
};

module.exports = Process;
