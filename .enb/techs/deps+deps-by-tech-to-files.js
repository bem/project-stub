var enbBemTechs = require('enb-bem-techs');

module.exports = function(sourceTech, destTech) {
    destTech || (destTech = sourceTech);

    return [
        [enbBemTechs.depsByTechToBemdecl, {
            target: '?.' + sourceTech + '-' + destTech + '.bemdecl.js',
            sourceTech: sourceTech,
            destTech: destTech
        }],
        [enbBemTechs.mergeBemdecl, {
            sources: ['?.bemdecl.js', '?.' + sourceTech + '-' + destTech + '.bemdecl.js'],
            target: '?.' + destTech + '.bemdecl.js'
        }],
        [enbBemTechs.deps, {
            target: '?.' + destTech + '.deps.js',
            bemdeclFile: '?.' + destTech + '.bemdecl.js'
        }],
        [enbBemTechs.files, {
            depsFile: '?.' + destTech + '.deps.js',
            filesTarget: '?.' + destTech + '.files',
            dirsTarget: '?.' + destTech + '.dirs'
        }]
    ];
}
