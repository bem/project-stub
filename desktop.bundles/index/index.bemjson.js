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
					elem: 'plug',
					content: [
						{
							elem: 'plug-header',
							content: [
								{
									elem: 'plug-bem-logo',
									content: {
										html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50"><g fill-rule="evenodd"><rect width="49" height="23"/><rect width="49" height="14" x="54"/><rect width="14" height="50" x="108"/><rect width="14" height="50" x="126"/><rect width="14" height="50" x="144"/><rect width="49" height="14" x="54" y="18"/><rect width="49" height="14" x="54" y="36"/><rect width="49" height="23" y="27"/></g></svg>'
									}
								},
								{
									elem: 'plug-slogan',
									tag: 'h1',
									content: 'Масштабируемая дизайн-система на основе БЭМ'
								},
							]
						},
						{
							elem: 'plug-content',
							content: [

								{
									elem: 'plug-description',
									tag: 'p',
									content: 'Для использования системы зайдите на сайт с компьютера. Почитать документацию можно на Github. Задать вопросы можно в соцсетях'
								},
								{
									elem: 'plug-action',
									content: [
										{
											elem: 'plug-button',
											tag: 'a',
											attrs: { 'href': 'https://github.com/bemdesign'},
											content: 'Репозиторий на Github'
										},
										{
											elem: 'plug-soclink',
											elemMods: { icon: 'telegram'},
											tag: 'a',
											attrs: { 'href': 'https://t.me/dotmus'},
											content: 'Телеграм'
										},
										{
											elem: 'plug-soclink',
											elemMods: { icon: 'twitter'},
											tag: 'a',
											attrs: { 'href': 'https://twitter.com/bem_design'},
											content: 'Твиттер'
										},
									]
								}
							]
						},

					]
				},
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
