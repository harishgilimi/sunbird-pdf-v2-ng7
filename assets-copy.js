var wrench = require("wrench"),
  util = require("util");

var source = "node_modules/ngx-extended-pdf-viewer/assets";
var target = "dist/pdf-player-v2/lib/assets/";

wrench.copyDirSyncRecursive(source, target, {
  forceDelete: true
});

console.log("Asset files successfully copied!");