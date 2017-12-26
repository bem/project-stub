module.exports = {
  block: 'page',
  title: 'BEM Illustrations',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'illustrations.min.css' },
      { elem: 'css', url: '../../assets/ibm-type/css/ibm-type.css' },
      { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
  ],
  mix: {
      block: 'theme',
      mods: { color: 'default', space: 'default', size: 'default' }
  },
  scripts: [{ elem: 'js', url: 'illustrations.min.js' }],
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
        pagename: 'illustrations',
      },
      content : [
        {
          elem: 'content',
          content: [
            {
              block: 'text',
              mods: { size: 'xxxxl', weight: 'bold', align: 'center' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' } },
              content: 'Illustrations'
            },
            // {
            //   block: 'text',
            //   mods: { size: 'xxl', view: 'primary', width: 'default' },
            //   mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
            //   content: 'Иллюстрации используются для передачи эмоциональной атмосферы, визуализации персонажей, демонстрации объектов'
            // },
            {
              block : 'illustration-list',
              content : [
                {
                  block : 'illustration-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { view: 'inverse' },
                      content : [
                        {
                          block : 'illustration',
                          mods: { view: 'bem-team' }
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
                          content: "BEM Design Team"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'illustration-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { view: 'inverse' },
                      content : [
                        {
                          block : 'illustration',
                          mods: { view: 'bem-show' }
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
                          content: "BEM Show"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'illustration-item',
                  content : [
                    {
                      elem : 'view',
                      elemMods: { view: 'inverse' },
                      content : [
                        {
                          block : 'illustration',
                          mods: { view: 'bem-hackathon' }
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
                          content: "BEM Hackathon"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'illustration-item',
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
                          mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
                          content: "BEM Night"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'illustration-item',
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
                          mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
                          content: "BEM Channel"
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'illustration-item',
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
                          mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
                          content: "BEM Magazine"
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
    }
  ]
};
