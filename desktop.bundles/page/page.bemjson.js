module.exports = {
    block: 'page',
    title: 'page',
    head: [
        { elem: 'css', url: '_page.css' }
    ],
    scripts: [{ elem: 'js', url: '_page.js' }],
    content: [
       {
           block: 'content',
           content: [
               'block content'
           ]
       }
    ]
};
