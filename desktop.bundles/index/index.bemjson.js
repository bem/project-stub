module.exports = {
  block: 'page',
  title: 'BEM Design',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'index.min.css' },
      { elem: 'css', url: '../../assets/ibm-type/css/ibm-type.css' },
      { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
  ],
  mix: {
      block: 'theme',
      mods: { color: 'default', space: 'default', size: 'default' }
  },
  scripts: [{ elem: 'js', url: 'index.min.js' }],
  mods: { type: 'full-screen', theme: 'islands', 'vertical-align': 'center' },
  content: [
    {
      block: 'demo',
      mix : {
        block : 'theme',
        mods : { color : 'default', space : 'default', size : 'default' }
      },
      params: {
        menusection: 'base',
        pagename: 'prototype',
      },
      content : [
        {
          elem: 'content',
          elemMods: { display: 'flex' },
          content: [
            {
              elem: 'face-text',
              content: [
                {
                  elem: 'github',
                  tag: 'a',
                  attrs: {
                    href: 'https://github.com/bemdesign'
                  },
                  content: 'BEM Design на Github'
                },
                {
                  elem: 'slogan',
                  content: 'Масштабируемая дизайн-система на основе БЭМ'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
