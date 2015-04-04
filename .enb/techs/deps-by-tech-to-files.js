var enbBemTechs = require('enb-bem-techs');

module.exports = function(sourceTech, destTech) {
    return [
        [enbBemTechs.depsByTechToBemdecl, {
            target: '?.' + sourceTech + '-' + destTech + '.bemdecl.js',
            sourceTech: sourceTech,
            destTech: destTech
        }],
        [enbBemTechs.deps, {
            target: '?.' + destTech + '.deps.js',
            bemdeclFile: '?.' + sourceTech + '-' + destTech + '.bemdecl.js'
        }],
        [enbBemTechs.files, {
            depsFile: '?.' + destTech + '.deps.js',
            filesTarget: '?.' + destTech + '.files',
            dirsTarget: '?.' + destTech + '.dirs'
        }]
    ];
}
