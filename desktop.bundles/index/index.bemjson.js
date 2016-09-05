module.exports = {
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    mods : { theme : 'islands' },
    content : {
        block : 'row',
        content : [
            {
                elem : 'col',
                elemMods : { mw : 6 },
                content : 'left column'
            },
            {
                elem : 'col',
                elemMods : { mw : 6 },
                content : 'right column'
            }
        ]
    }
};
