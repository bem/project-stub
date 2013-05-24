({
    block: 'b-page',
    title: 'b-link_inner_yes',
    head: [
        { elem: 'css', url: '_30-b-link_inner.css' },
        { elem: 'css', url: '_30-b-link_inner.ie.css', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '30_b-link_inner.js' }
    ],
    content: [
        {
            attrs: { style: 'margin: 20px 0 20px 20px;' },
            content: {
                block: 'b-link',
                mods: { inner: 'yes' },
                url: '#',
                content: [
                    {
                        block: 'b-icon',
                        url: 'http://yandex.st/lego/_/Kx6F6RQnQFitm0qRxX7vpvfP0K0.png',
                        alt: '16x16 icon'
                    },
                    {
                        elem: 'inner',
                        content: 'Link with icon 16x16'
                    }
                ]
            }
        },
        {
            attrs: { style: 'font-size: 120%; margin: 20px 0 20px 20px;' },
            content: {
                block: 'b-link',
                mods: { pseudo: 'yes', inner: 'yes' },
                url: 'http://ya.ru',
                content: [
                    {
                        block: 'b-icon',
                        url: '//yandex.st/lego/_/JMzwbLLDYCwdJBeYmjJFITN6lGI.png',
                        alt: '24x24 icon'
                    },
                    {
                        elem: 'inner',
                        content: 'Pseudo-link with icon 24x24'
                    }
                ]
            }
        },
        {
            attrs: { style: 'font-size: 140%; margin: 20px 0 20px 20px;' },
            content: {
                block: 'b-link',
                mods: { pseudo: 'yes', inner: 'yes' },
                url: 'http://ya.ru',
                content: [
                    {
                        block: 'b-icon',
                        url: '//yandex.st/lego/_/7mx2-iHmpGYwkJ_7qdwuo9cpKkg.png',
                        alt: '48x48 icon'
                    },
                    {
                        elem: 'inner',
                        content: 'Pseudo-link with icon 48x48'
                    }
                ]
            }
        }
    ]

})
