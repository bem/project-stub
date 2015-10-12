var fs = require('fs'),
    path = require('path'),
    crypto = require('crypto'),
    mkdirp = require('mkdirp'),
    enb = require('enb'),
    pathToBemjson = process.argv[2];

if (!pathToBemjson) {
    console.log('Please provide path to bundle');
    process.exit(1);
}

var levelName = path.basename(pathToBemjson).split('.')[0] + '.examples',
    bemjson = require(path.resolve(pathToBemjson));

function createBundles(bemjson) {
    var currentBlock = bemjson.block;

    if (currentBlock) {
        var bundleName = crypto.createHash('md5').update(JSON.stringify(bemjson)).digest('hex');
        mkdirp.sync(path.join(levelName, bundleName));
        fs.writeFileSync(path.join(levelName, bundleName, bundleName + '.bemjson.js'), '(' + JSON.stringify(bemjson, null, 4) + ')');
    }

    bemjson.content && createBundles(bemjson.content);
    Array.isArray(bemjson) && bemjson.forEach(createBundles);
}

createBundles(bemjson);
enb.make(levelName);
