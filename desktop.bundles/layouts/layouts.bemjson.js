module.exports = {
  block: 'page',
  title: 'BEM Layouts',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'layouts.min.css' },
      { elem: 'css', url: '../../assets/ibm-type/css/ibm-type.css' },
      { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
  ],
  mix: {
      block: 'theme',
      mods: { color: 'default', space: 'default', size: 'default' }
  },
  scripts: [{ elem: 'js', url: 'layouts.min.js' }],
  mods: { theme: 'islands' },
  content: [
    {
      block: 'demo',
      mix: [
        { block: 'b-page', elem: 'content' },
        { block: 'theme' }
      ],
      params: {
        menusection: 'tools',
        pagename: 'layouts',
      },
      content : [
        {
          elem: 'content',
          content: [
            {
              block: 'text',
              mods: { size: 'xxxl', weight: 'bold', width: 'default' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
              content: 'Шаблоны'
            },
            {
              block: 'text',
              mods: { size: 'xxl', view: 'primary', width: 'default' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
              content: 'Шаблоны помогают структурировать пространство и подготовить каркас для интеграции блоков. «Структурируя при помощи модульной сетки плоскости и пространство, дизайнер получает возможность организовать тексты и графические изображения по принципам объективности и функциональности»'
            },
            /* 32-8-4 */
            {
              block : 'layout-list',
              content : [
                {
                  block : 'layout-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { type: '32-8-4', ver: '1' }
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          tag: 'a',
                          attrs: {
                            href: 'https://codepen.io/yegorov/full/JWNLLO',
                            target: '_blank'
                          },
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "32(4x8)-1"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'layout-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { type: '32-8-4', ver: '2'  }
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          tag: 'a',
                          attrs: {
                            href: 'https://codepen.io/yegorov/full/zZwjrR',
                            target: '_blank'
                          },
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "32(4x8)-2"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'layout-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { type: '32-8-4', ver: '3'  }
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          tag: 'a',
                          attrs: {
                            href: 'https://codepen.io/yegorov/full/MpmGJE',
                            target: '_blank'
                          },
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "32(4x8)-3"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'layout-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { type: '32-8-4', ver: '4'  }
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          tag: 'a',
                          attrs: {
                            href: 'https://codepen.io/yegorov/full/oZWdGV',
                            target: '_blank'
                          },
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "32(4x8)-4"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'layout-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { type: '32-8-4', ver: '5'  }
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          tag: 'a',
                          attrs: {
                            href: 'https://codepen.io/yegorov/full/oZWdGV',
                            target: '_blank'
                          },
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "32(4x8)-5"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'layout-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { type: '32-8-4', ver: 'default' }
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          tag: 'a',
                          attrs: {
                            href: 'https://codepen.io/Rochet/full/zPwYao/',
                            target: '_blank'
                          },
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "Add your template"
                        }
                      ]
                    }
                  ]
                }
              ]
            },

            /* 24-4-6 */
            {
              block : 'layout-list',
              content : [
                {
                  block : 'layout-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { type: '24-4-6', ver: '1' }
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          tag: 'a',
                          attrs: {
                            href: 'https://codepen.io/yegorov/full/mWmLYP',
                            target: '_blank'
                          },
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "24(4x6)-1"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'layout-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { type: '24-4-6', ver: '2' }
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          tag: 'a',
                          attrs: {
                            href: 'https://codepen.io/yegorov/full/qrmKdW',
                            target: '_blank'
                          },
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "24(4x6)-2"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'layout-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { type: '24-4-6', ver: '3' }
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          tag: 'a',
                          attrs: {
                            href: 'https://codepen.io/yegorov/full/BWRVRm',
                            target: '_blank'
                          },
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "24(4x6)-3"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'layout-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { type: '24-4-6', ver: '4' }
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          tag: 'a',
                          attrs: {
                            href: 'https://codepen.io/yegorov/full/mWmjJx',
                            target: '_blank'
                          },
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "24(4x6)-4"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'layout-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { type: '24-4-6', ver: '5' }
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          tag: 'a',
                          attrs: {
                            href: 'https://codepen.io/yegorov/full/EWmpWZ/',
                            target: '_blank'
                          },
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "24(4x6)-5"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'layout-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { type: '24-4-6', ver: 'default' }
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          tag: 'a',
                          attrs: {
                            href: 'https://codepen.io/Rochet/full/NwjWOZ/',
                            target: '_blank'
                          },
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "Add your template"
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
