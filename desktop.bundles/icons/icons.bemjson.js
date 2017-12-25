module.exports = {
  block: 'page',
  title: 'BEM Icons',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'icons.min.css' },
      { elem: 'css', url: '../../assets/ibm-type/css/ibm-type.css' },
      { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
  ],
  mix: {
      block: 'theme',
      mods: { color: 'default', space: 'default', size: 'default' }
  },
  scripts: [{ elem: 'js', url: 'icons.min.js' }],
  mods: { theme: 'islands' },
  content: [
    {
      block: 'demo',
      mix: [
        { block: 'b-page', elem: 'content' },
        { block: 'icons' }
      ],
      params: {
        menusection: 'tools',
        pagename: 'icons',
      },
      content: [
        {
          elem: 'content',
          content: [
            {
              block: 'text',
              mods: { size: 'xxxxl', weight: 'bold', align: 'center' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' } },
              content: 'Icons'
            },
            // {
            //   block: 'text',
            //   mods: { size: 'xxl', view: 'primary', width: 'default' },
            //   mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
            //   content: 'Для того, чтобы централизованно менять библиотеки иконок и избегать такой ситуации, когда повторяющиеся иконки лежат по разным мы вынесли все иконки в блок .icon'
            // },
            {
               block: 'icon-list',
               mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
               content: [
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'add-1': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'add-1': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'add-1'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'add-2': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'add-2': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'add-2'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'add-user': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'add-user': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'add-user'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'allert-1': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'allert-1': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'allert-1'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'allert-2': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'allert-2': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'allert-2'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'arrow-up': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'arrow-up': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'arrow-up'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'double-arrow-up': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'double-arrow-up': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'double-arrow-up'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'arrow-down': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'arrow-down': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'arrow-down'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'double-arrow-down': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'double-arrow-down': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'double-arrow-down'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'arrow-left': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'arrow-left': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'arrow-left'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'arrow-right': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'arrow-right': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'arrow-right'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'attention': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'attention': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'attention'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'back': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'back': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'back'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'front': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'front': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'front'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'blog': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'blog': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'blog'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'comment': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'comment': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'comment'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'check': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'check': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'check'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'close': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'close': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'close'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'crop': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'crop': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'crop'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'devices': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'devices': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'devices'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'enter': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'enter': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'enter'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'export': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'export': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'export'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'fave-1': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'fave-1': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'fave-1'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'filter': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'filter': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'filter'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'globe': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'globe': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'globe'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'hamburger': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'hamburger': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'hamburger'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'help': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'help': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'help'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'list': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'list': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'list'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'lock': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'lock': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'lock'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'mail-1': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'mail-1': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'mail-1'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'marker': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'marker': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'marker'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'phone-1': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'phone-1': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'phone-1'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'photo': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'photo': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'photo'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'picture': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'picture': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'picture'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'refresh': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'refresh': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'refresh'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'repeat': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'repeat': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'repeat'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'save': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'save': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'save'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'search': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'search': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'search'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'statistic': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'statistic': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'statistic'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'trash': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'trash': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'trash'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'user': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'user': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'user'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'time': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'time': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'time'
                         }
                       ]
                     }
                   ]
                 },
                 {
                   block: 'icon-item',
                   mix: { block: 'search-source' },
                   content: [
                     {
                       elem: 'view',
                       content: [
                         {
                           block: 'icon',
                           mods: { 'wait-2': 's-primary' }
                         },
                         {
                           block: 'icon',
                           mods: { 'wait-2': 'm-primary' }
                         }
                       ]
                     },
                     {
                       elem: 'name',
                       content: [
                         {
                           block: 'text',
                           mods: { view: 'primary', size: 'm', align: 'center' },
                           content: 'wait-2'
                         }
                       ]
                     }
                   ]
                 }
               ]
             }
          ]
        }
      ]
    },
  ]
};
