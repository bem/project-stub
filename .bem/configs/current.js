module.exports = {
    libraries : require('bem').util.extend(require('../repo.db'), {
        'bem-controls': {
            type     : 'git',
            url      : 'git://github.com/bem/bem-controls.git',
            npmPackages: false
        }
    })
}