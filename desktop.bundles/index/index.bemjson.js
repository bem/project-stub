({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'index.min.css', ie: false },
        { elem: 'css', url: 'index.min', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'header',
            content: [
                'header content goes here'
            ]
        },
        {
            block: 'content',
            content: [
                'main content'
            ]
        },
        {
            block: 'footer',
            content: [
                'footer content goes here'
            ]
        },
        { elem: 'js', url: 'index.min.js' }
    ]
})
