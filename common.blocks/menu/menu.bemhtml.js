block('menu')(
    tag()('nav'),
    attrs()({ role : 'navigation' }),
    elem('list')(
        tag()('ul')
    ),
    elem('item')(
        tag()('li')
    ),
    elem('link')(
        tag()('a'),
        js()(true)
    )
);
