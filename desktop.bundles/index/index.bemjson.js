({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    content: [
        {
            block: 'header',
            content: [
                'header content goes here'
            ]
        },
        {
            block: 'content',
            content: [
                {
                    tag : 'p',
                    content : [
                        'This is a demo page to show blocks from bem-components library. ',
                        { tag : 'br' },
                        'Feel free to replace it with your own content in desktop.bundles/index/index.bemjson.js.',
                        { tag : 'br' },
                        'For more info about BEM check out ',
                        {
                            block : 'link',
                            url : 'http://bem.info/',
                            content : 'bem.info'
                        },
                        '.'
                    ]
                },

                { tag : 'h2', content : 'Normal theme' },

                {
                    block : 'table',
                    tag : 'table',
                    attrs : { style : 'table-layout: fixed; width: 600px' },
                    content : [
                        {
                            elem : 'row',
                            tag : 'tr',
                            content : [
                                { elem : 'title', tag : 'th', content : 'size s' },
                                { elem : 'title', tag : 'th', content : 'size m' },
                                { elem : 'title', tag : 'th', content : 'size l' },
                                { elem : 'title', tag : 'th', content : 'size xl' }
                            ]
                        },
                        {
                            elem : 'row',
                            tag : 'tr',
                            content : [
                                { elem : 'cell', tag : 'td', size : 's' },
                                { elem : 'cell', tag : 'td', size : 'm' },
                                { elem : 'cell', tag : 'td', size : 'l' },
                                { elem : 'cell', tag : 'td', size : 'xl' }
                            ].map(function(cell) {
                                cell.attrs = { style : 'width: 25%; vertical-align: top;' };
                                cell.content = [
                                    {
                                        block : 'menu',
                                        mods : { theme : 'normal', size : cell.size },
                                        attrs : { style : 'border: 1px solid rgba(0, 0, 0, 0.1);' },
                                        content : [
                                            {
                                                block : 'menu-item',
                                                content : 'New'
                                            },
                                            {
                                                block : 'menu-item',
                                                mods : { disabled : true },
                                                content : 'Open Recent'
                                            },
                                            {
                                                elem : 'group',
                                                title : 'Save',
                                                content : [
                                                    {
                                                        block : 'menu-item',
                                                        content : 'Save as...'
                                                    },
                                                    {
                                                        block : 'menu-item',
                                                        content : 'Export'
                                                    }
                                                ]
                                            },
                                            {
                                                block : 'menu-item',
                                                content : 'Close'
                                            }
                                        ]
                                    },
                                    { tag : 'br' },
                                    {
                                        block : 'menu',
                                        mods : { select : 'check', theme : 'normal', size : cell.size },
                                        attrs : { style : 'border: 1px solid rgba(0, 0, 0, 0.1);' },
                                        content : [
                                            {
                                                elem : 'group',
                                                title : 'Automate',
                                                content : [
                                                    {
                                                        block : 'menu-item',
                                                        content : 'Batch'
                                                    },
                                                    {
                                                        block : 'menu-item',
                                                        content : 'Create Droplet'
                                                    }
                                                ]
                                            },
                                            {
                                                elem : 'group',
                                                content : [
                                                    {
                                                        block : 'menu-item',
                                                        mods : { checked : true },
                                                        content : [
                                                            { elem : 'icon', elemMods : { social : 'twitter' } },
                                                            'Twitter'
                                                        ]
                                                    },
                                                    {
                                                        block : 'menu-item',
                                                        content : [
                                                            { elem : 'icon', elemMods : { social : 'vk' } },
                                                            'VK'
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ];
                                return cell;
                            })
                        }
                    ]
                },
                {
                    block : 'line',
                    mods : { size : 's' },
                    content : [
                        'size s (24px height) ',
                        {
                            block : 'input',
                            mods : { theme : 'normal', size : 's', 'has-clear' : true },
                            val : 'value',
                            placeholder : 'placeholder'
                        },
                        ' ',
                        {
                            block : 'button',
                            mods : { theme : 'normal', size : 's' },
                            text : 'button'
                        },
                        ' ',
                        {
                            block : 'button',
                            mods : { theme : 'normal', size : 's' },
                            text : 'button',
                            icon : { elem : 'icon', elemMods : { download : true } }
                        },
                        ' ',
                        {
                            block : 'radio',
                            mods : { theme : 'normal', size : 's', type : 'button' },
                            name : 'radio-sizes-s',
                            options : [
                                { val : 1, text : 'first' },
                                { val : 2, text : 'second', checked : true }
                            ]
                        },
                        ' ',
                        {
                            block : 'checkbox',
                            mods : { theme : 'normal', size : 's', type : 'button' },
                            val : 1,
                            text : 'check'
                        },
                        ' ',
                        {
                            block : 'dropdown',
                            mods : { switcher : 'button', theme : 'normal', size : 's' },
                            switcher : 'dropdown',
                            popup : { block : 'popup', mods : { theme : 'normal' }, content : 'popup' }
                        },
                        ' ',
                        {
                            block : 'spin',
                            mods : { theme : 'normal', size : 's', progress : true }
                        }
                    ]
                },

                { tag : 'br' },

                {
                    block : 'line',
                    mods : { size : 'm' },
                    content : [
                        'size m (28px height) ',
                        {
                            block : 'input',
                            mods : { theme : 'normal', size : 'm', 'has-clear' : true },
                            val : 'value',
                            placeholder : 'placeholder'
                        },
                        ' ',
                        {
                            block : 'button',
                            mods : { theme : 'normal', size : 'm' },
                            text : 'button'
                        },
                        ' ',
                        {
                            block : 'button',
                            mods : { theme : 'normal', size : 'm' },
                            text : 'button',
                            icon : { elem : 'icon', elemMods : { download : true } }
                        },
                        ' ',
                        {
                            block : 'radio',
                            mods : { theme : 'normal', size : 'm', type : 'button' },
                            name : 'radio-sizes-m',
                            options : [
                                { val : 1, text : 'first' },
                                { val : 2, text : 'second', checked : true }
                            ]
                        },
                        ' ',
                        {
                            block : 'checkbox',
                            mods : { theme : 'normal', size : 'm', type : 'button' },
                            val : 1,
                            text : 'check'
                        },
                        ' ',
                        {
                            block : 'dropdown',
                            mods : { switcher : 'button', theme : 'normal', size : 'm' },
                            switcher : 'dropdown',
                            popup : { block : 'popup', mods : { theme : 'normal' }, content : 'popup' }
                        },
                        ' ',
                        {
                            block : 'spin',
                            mods : { theme : 'normal', size : 'm', progress : true }
                        }
                    ]
                },

                { tag : 'br' },

                {
                    block : 'line',
                    mods : { size : 'l' },
                    content : [
                        'size l (32px height) ',
                        {
                            block : 'input',
                            mods : { theme : 'normal', size : 'l', 'has-clear' : true },
                            val : 'value',
                            placeholder : 'placeholder'
                        },
                        ' ',
                        {
                            block : 'button',
                            mods : { theme : 'normal', size : 'l' },
                            text : 'button'
                        },
                        ' ',
                        {
                            block : 'button',
                            mods : { theme : 'normal', size : 'l' },
                            text : 'button',
                            icon : { elem : 'icon', elemMods : { download : true } }
                        },
                        ' ',
                        {
                            block : 'radio',
                            mods : { theme : 'normal', size : 'l', type : 'button' },
                            name : 'radio-sizes-l',
                            options : [
                                { val : 1, text : 'first' },
                                { val : 2, text : 'second', checked : true }
                            ]
                        },
                        ' ',
                        {
                            block : 'checkbox',
                            mods : { theme : 'normal', size : 'l', type : 'button' },
                            val : 1,
                            text : 'check'
                        },
                        ' ',
                        {
                            block : 'dropdown',
                            mods : { switcher : 'button', theme : 'normal', size : 'l' },
                            switcher : 'dropdown',
                            popup : { block : 'popup', mods : { theme : 'normal' }, content : 'popup' }
                        },
                        ' ',
                        {
                            block : 'spin',
                            mods : { theme : 'normal', size : 'l', progress : true }
                        }
                    ]
                },

                { tag : 'br' },

                {
                    block : 'line',
                    mods : { size : 'xl' },
                    content : [
                        'size xl (38px height) ',
                        {
                            block : 'input',
                            mods : { theme : 'normal', size : 'xl', 'has-clear' : true },
                            val : 'value',
                            placeholder : 'placeholder'
                        },
                        ' ',
                        {
                            block : 'button',
                            mods : { theme : 'normal', size : 'xl' },
                            text : 'button'
                        },
                        ' ',
                        {
                            block : 'button',
                            mods : { theme : 'normal', size : 'xl' },
                            text : 'button',
                            icon : { elem : 'icon', elemMods : { download : true } }
                        },
                        ' ',
                        {
                            block : 'radio',
                            mods : { theme : 'normal', size : 'xl', type : 'button' },
                            name : 'radio-sizes-xl',
                            options : [
                                { val : 1, text : 'first' },
                                { val : 2, text : 'second', checked : true }
                            ]
                        },
                        ' ',
                        {
                            block : 'checkbox',
                            mods : { theme : 'normal', size : 'xl', type : 'button' },
                            val : 1,
                            text : 'check'
                        },
                        ' ',
                        {
                            block : 'dropdown',
                            mods : { switcher : 'button', theme : 'normal', size : 'xl' },
                            switcher : 'dropdown',
                            popup : { block : 'popup', mods : { theme : 'normal' }, content : 'popup' }
                        },
                        ' ',
                        {
                            block : 'spin',
                            mods : { theme : 'normal', size : 'xl', progress : true }
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            content: [
                'footer content goes here'
            ]
        }
    ]
})
