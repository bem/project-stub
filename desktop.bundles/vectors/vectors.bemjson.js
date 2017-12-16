module.exports = {
  block: 'page',
  title: 'BEM Vectors',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'vectors.min.css' },
      { elem: 'css', url: '../../assets/ibm-type/css/ibm-type.css' },
      { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
  ],
  mix: {
      block: 'theme',
      mods: { color: 'default', space: 'default', size: 'default' }
  },
  scripts: [{ elem: 'js', url: 'vectors.min.js' }],
  mods: { theme: 'islands' },
  content: [
    {
      block: 'demo',
      mix: [
        { block: 'b-page', elem: 'content' },
        { block: 'vectors' }
      ],
      params: {
        menusection: 'tools',
        pagename: 'vectors',
      },
      content : [
        {
          elem: 'content',
          content: [
            {
              block: 'text',
              mods: { size: 'xxxl', weight: 'bold' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
              content: 'Векторные изображения'
            },
            {
              block: 'text',
              mods: { size: 'xxl', view: 'primary', width: 'default' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
              content: 'Векторные изображения...'
            },
            {
              block : 'vector-list',
              content : [
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'bus' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { bus: 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'chats' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { chats: 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'error-bug' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 'error-bug': 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'filing-cabinet' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 'filing-cabinet': 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'controller' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 'controller': 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },

                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'hamburger' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 'hamburger': 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'image-folder' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 'image-folder': 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'luxury' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { luxury: 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'map-marker' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 'map-marker': 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'message-app' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 'message-app': 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'paint-bucket' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 'paint-bucket': 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'play-movie' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 'play-movie': 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'polaroid' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 'polaroid': 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'read-email' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 'read-email': 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'safe' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 'safe': 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'shopping-bag' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 'shopping-bag': 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'shopping' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { shopping: 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'spacecraft' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { spacecraft: 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'vector-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'vector',
                          mods : { 'umbrella' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { umbrella: 'm-primary' }"
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
