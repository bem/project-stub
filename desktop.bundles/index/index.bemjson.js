module.exports = {
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'header',
            content : [
                'header content goes here'
            ]
        },
        {
            block : 'content',
            content : [
                {
                    block: 'my-huge-block',
                    content: 'ololo'
                }
            ]
        },
        {
            block : 'footer',
            content : [
                'footer content goes here'
            ]
        }
    ]
};
