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
                          mods : { '1' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 1: 'm-primary' }"
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
                          mods : { '2' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 2: 'm-primary' }"
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
                          mods : { '3' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 3: 'm-primary' }"
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
                          mods : { '4' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 4: 'm-primary' }"
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
                          mods : { '5' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 5: 'm-primary' }"
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
                          mods : { '6' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 6: 'm-primary' }"
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
                          mods : { '7' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 7: 'm-primary' }"
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
                          mods : { '8' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 8: 'm-primary' }"
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
                          mods : { '9' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 9: 'm-primary' }"
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
                          mods : { '10' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 10: 'm-primary' }"
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
                          mods : { '11' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: {11: 'm-primary' }"
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
                          mods : { '12' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 12: 'm-primary' }"
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
                          mods : { '13' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 13: 'm-primary' }"
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
                          mods : { '14' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 14: 'm-primary' }"
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
                          mods : { '15' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { 15: 'm-primary' }"
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
