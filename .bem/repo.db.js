/**
 * XXX: UNDER DEVELOPMENT
 *
 * Репозиторий библиотек
 *
 * Структура
 *
 *   { id : { lib-description }, ... }
 *
 * Описание
 * - библиотеки устанавливаются в `LIB_ROOT/id` (.bem/environ.js)
 * - реквизиты библиотеки (type, url, ...) могут быть переопределены
 *   в конфиге окружения, .bem/configs/current
 */

module.exports = {

    'bem-bl' : {
        type     : 'git',
        url      : 'git://github.com/bem/bem-bl.git'
    },
    'bem-history' : {
        type     : 'git',
        url      : 'git://github.com/bem/bem-history.git'
    },
    'bem-components' : {
        type     : 'git',
        url      : 'git://github.com/bem/bem-components.git'
    },
    'bem-core' : {
        type     : 'git',
        url      : 'git://github.com/bem/bem-core.git'
    },
    'bem-mvc' : {
        type     : 'git',
        url      : 'git://github.com/bem/bem-mvc.git'
    },
    'bem-gen-doc' : {
        type     : 'git',
        url      : 'git://github.com/bem/bem-gen-doc.git',
        branch   : 'make'
    },
    'bem-json' : {
        type     : 'git',
        url      : 'git://github.com/delfrrr/bem-json.git'
    },
    'bem-pr' : {
        type     : 'git',
        url      : 'git://github.com/narqo/bem-pr.git'
    },
    'bem-yana' : {
        type     : 'git',
        url      : 'git://github.com/narqo/bem-yana.git'
    }

};
