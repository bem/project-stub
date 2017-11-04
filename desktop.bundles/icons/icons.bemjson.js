module.exports = {
  block: 'page',
  title: 'BEM Icons',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'icons.min.css' },
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
              mods: { size: 'xxxl', weight: 'bold' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
              content: 'Иконки'
            },
            {
              block: 'text',
              mods: { size: 'xxl', view: 'primary' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
              content: 'Для того, чтобы централизованно менять библиотеки иконок и избегать такой ситуации, когда повторяющиеся иконки лежат по разным мы вынесли все иконки в блок .icon'
            },
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
                          mods: { 'add-3': 's-primary' }
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'add-3'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'allert-1'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'allert-2'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'arrow-up'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'arrow-down'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'arrow-left'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'arrow-right'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'back'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'front'
                    }
                  ]
                },
                // {
                //   block: 'icon-item',
                //   mix: { block: 'search-source' },
                //   content: [
                //     {
                //       elem: 'view',
                //       content: [
                //         {
                //           block: 'icon',
                //           mods: { 'blog': 's-primary' }
                //         }
                //       ]
                //     },
                //     {
                //       elem: 'name',
                //       mix: { block: 'text' },
                //       content: 'blog'
                //     }
                //   ]
                // },
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'comment'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'check'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'close'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'crop'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'export'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'fave-1'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'globe'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'hamburger'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'lock'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'mail-1'
                    }
                  ]
                },
                // {
                //   block: 'icon-item',
                //   mix: { block: 'search-source' },
                //   content: [
                //     {
                //       elem: 'view',
                //       content: [
                //         {
                //           block: 'icon',
                //           mods: { 'marker': 's-primary' }
                //         }
                //       ]
                //     },
                //     {
                //       elem: 'name',
                //       mix: { block: 'text' },
                //       content: 'marker'
                //     }
                //   ]
                // },
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'phone-1'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'photo'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'picture'
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
                          mods: { 'qua': 's-primary' }
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'qua'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'refresh'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'repeat'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'save'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'search'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'statistic'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'trash'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'user'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'time'
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
                        }
                      ]
                    },
                    {
                      elem: 'name',
                      mix: { block: 'text' },
                      content: 'wait-2'
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
