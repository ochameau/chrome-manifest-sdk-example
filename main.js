let { Cc, Ci, Cm } = require("chrome");
let { toFilename } = require("api-utils/url");
let self = require("self");

let manifest = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);

// Retrieve URL to data/ folder
let url = self.data.url();
// Get file path to this folder.
// /!\ toFilename will only work if the addon is unpacked
// so ensure using `"unpack": true` in your packages.json addon manifest.
let path = toFilename(url);
manifest.initWithPath(path);

Cm.addBootstrappedManifestLocation(manifest);

require("tabs").open("chrome://packagename/content/document.xul");