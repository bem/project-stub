module.exports = {
  block: 'page',
  title: 'BEM Animations',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'animations.min.css' },
      { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
  ],
  mix: {
      block: 'theme',
      mods: { color: 'default', space: 'default', size: 'default' }
  },
  scripts: [{ elem: 'js', url: 'animations.min.js' }],
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
        pagename: 'animations',
      },
      content : [
        {
          elem: 'content',
          content: [
            {
              block: 'text',
              mods: { size: 'xxxl', weight: 'bold' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
              content: 'Анимация'
            },
            {
              block: 'text',
              mods: { size: 'xxl', view: 'primary' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
              content: 'Анимация — последовательное изменение свойств блока по какому-либо событию. Она мотивирует к действию, вовлекает в процесс, вызвает восторг'
            },
            {
              block : 'animation-list',
              content : [
                {
                  block : 'animation-item',
                  content : [
                    {
                      elem : 'view',
                      content : [

                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "Overlay side show"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'animation-item',
                  content : [
                    {
                      elem : 'view',
                      content : [

                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "Accordion toggle"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'animation-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'illustration',

                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "Block scroll show"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'animation-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "Modal fade"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'animation-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "Grid coloumn break"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'animation-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "Block hover inverse"
                        }
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        }
      ]
    },
  ]
};
