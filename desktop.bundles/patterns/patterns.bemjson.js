module.exports = {
  block: 'page',
  title: 'BEM Patterns',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'patterns.min.css' },
      { elem: 'css', url: '../../assets/ibm-type/css/ibm-type.css' },
      { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
  ],
  mix: {
      block: 'theme',
      mods: { color: 'default', space: 'default', size: 'default' }
  },
  scripts: [{ elem: 'js', url: 'patterns.min.js' }],
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
        pagename: 'patterns',
      },
      content: [
        {
          elem: 'content',
          // elemMods: { size: 'm' },
          content: [
            {
              block: 'text',
              mods: { size: 'xxxl', weight: 'bold' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
              content: 'Паттерны'
            },
            {
              block: 'text',
              mods: { size: 'xxl', view: 'primary' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
              content: 'Паттерн — каркас для блоков. Если блоки преимущественно отвечают за смысл, то Паттерны за их представление. Паттерны примиксовываются к блокам и их элементам, позволяя быстро сгенерить нужное визуальное представление'
            },
            /* PT-TABLE */
            {
              elem: 'pattern',
              block: 'demo',
              content: [
                {
                  block: 'text',
                  mods: { view: 'primary', size: 'xxl', weight: 'bold', display: 'block' },
                  mix: { block: 'decorator', mods: { 'space-b': 's' }},
                  content: '.pt-table',
                  // tag: 'a',
                  // attrs: {
                  //   href: '',
                  //   target: '_blank'
                  // }
                },
                {
                  block: 'pt-table',
                  content: [
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'view': 'head' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Селектор'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'МОДИФИКАТОР'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Значение'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Описание'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'pt-table'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'view'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'default / ghost / inverse'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для фона блока'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: ''
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'border'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'all'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификатор для кругового бордера блока'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' } ,
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: '.pt-table__row'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'border'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'top / bottom'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для бордера строк'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' } ,
                          content: ''
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'stripe'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'even'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для «зебрирования» строк'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' } ,
                          content: [

                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'view'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'head'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификатор для отображения шапки'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' }
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'space-a / space-h / space-v'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'xs / s / m / l'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для внутренних отступов'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            },
            /* /PT-TABLE */


            /* PT-LIST */
            {
              elem: 'pattern',
              block: 'demo',
              content: [
                {
                  block: 'text',
                  mods: { view: 'primary', size: 'xxl', weight: 'bold', display: 'block' },
                  mix: { block: 'decorator', mods: { 'space-b': 's' }},
                  content: '.pt-list',
                  // tag: 'a',
                  // attrs: {
                  //   href: '',
                  //   target: '_blank'
                  // }
                },
                {
                  block: 'pt-table',
                  content: [
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'view': 'head' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Селектор'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'МОДИФИКАТОР'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Значение'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Описание'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'pt-list'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'view'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'default / ghost / inverse'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для фона блока'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: ''
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'border'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'all'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '45' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификатор для кругового бордера блока'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: ''
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'shadow'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'cloud'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификатор для тени'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' } ,
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: '.pt-list__item'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'border'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'top / bottom'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для бордера строк'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' } ,
                          content: [

                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'view'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'head'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификатор для отображения шапки'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' }
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'space-a / space-h / space-v'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'xs / s / m / l'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для внутренних отступов'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            },
            /* /PT-LIST */


            /* PT-FORM */
            {
              elem: 'pattern',
              block: 'demo',
              content: [
                {
                  block: 'text',
                  mods: { view: 'primary', size: 'xxl', weight: 'bold', display: 'block' },
                  mix: { block: 'decorator', mods: { 'space-b': 's' }},
                  content: '.pt-form',
                  // tag: 'a',
                  // attrs: {
                  //   href: '',
                  //   target: '_blank'
                  // }
                },
                {
                  block: 'pt-table',
                  content: [
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'view': 'head' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Селектор'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'МОДИФИКАТОР'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Значение'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Описание'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'pt-form'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'view'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'default / ghost / inverse'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для фона блока'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: ''
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'border'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'all'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификатор для кругового бордера блока'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: ''
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'shadow'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'cloud'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификатор для тени'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' } ,
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: '.pt-form__item'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'border'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'top / bottom'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '45' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для бордера строк'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' } ,
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'view'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'head'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификатор для отображения шапки'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' }
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'space-a / space-h / space-v'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'xs / s / m / l'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для внутренних отступов'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            },
            /* /PT-FORM */


            /* PT-FLEX */
            /*
            {
              elem: 'pattern',
              block: 'demo',
              content: [
                {
                  block: 'text',
                  mods: { view: 'primary', size: 'xxl', weight: 'bold', display: 'block' },
                  content: '.pt-flex'
                },
                {
                  block: 'pt-table',
                  content: [
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'view': 'head' },
                      mix: { block: 'decorator', mods: { 'space-b': 's' }},
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Селектор'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'МОДИФИКАТОР'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Значение'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Описание'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'pt-flex'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'view'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'default / ghost / inverse'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для фона блока'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: ''
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'border'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'all'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификатор для кругового бордера блока'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' }
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'space-a / space-h / space-v'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'xs / s / m / l'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для внутренних отступов'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            },
            */
            /* /PT-FLEX */


            /* PT-CARD */
            {
              elem: 'pattern',
              block: 'demo',
              content: [
                {
                  block: 'text',
                  mods: { view: 'primary', size: 'xxl', weight: 'bold', display: 'block' },
                  mix: { block: 'decorator', mods: { 'space-b': 's' }},
                  content: '.pt-card',
                  // tag: 'a',
                  // attrs: {
                  //   href: '',
                  //   target: '_blank'
                  // }
                },
                // {
                //   block: 'text',
                //   mods: { view: 'primary', size: 'm', indent: 'm' },
                //   content: 'Конструкция плиток. Вытягивает плитки находящиеся в одном ряду по одной высоте. Прижимает подвальную часть плитки к низу, контентная часть растягивается по высоте. Состоит из элементов шапки, контентной области и футтера.'
                // },
                {
                  block: 'pt-table',
                  content: [
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'view': 'head' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Селектор'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'МОДИФИКАТОР'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Значение'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Описание'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'pt-card'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'view'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'default / ghost / inverse'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для фона блока'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'border'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'all'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификатор для кругового бордера блока'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: ''
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'shadow'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'cloud'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификатор для тени'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'pt-card__header'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'space-a / space-h / space-v'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'xs / s / m / l'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для внутренних отступов'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'pt-card__content'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'space-a / space-h / space-v'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'xs / s / m / l'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для внутренних отступов'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'pt-card__action'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'space-a / space-h / space-v'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'xs / s / m / l'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для внутренних отступов'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            },
            /* /PT-CARD */

            /* PT-INFORMER */
            {
              elem: 'pattern',
              block: 'demo',
              content: [
                {
                  block: 'text',
                  mods: { view: 'primary', size: 'xxl', weight: 'bold', display: 'block' },
                  mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
                  content: '.pt-informer',
                  // tag: 'a',
                  // attrs: {
                  //   href: '#',
                  //   target: '_blank'
                  // }
                },
                {
                  block: 'pt-table',
                  content: [
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'view': 'head' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Селектор'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'МОДИФИКАТОР'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Значение'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Описание'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'pt-informer'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'view'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'success / warning / alert'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для фона блока'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'border'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'all'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификатор для кругового бордера блока'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' } ,
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: '.pt-informer__row',
                              attrs: {
                                style: 'white-space: nowrap;'
                              }

                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'border'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'top / bottom'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для бордера строк'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' }
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'view'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'head'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификатор для отображения шапки'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' }
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'space-a / space-h / space-v'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'xs / s / m / l'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для внутренних отступов'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            },
            /* /PT-INFORMER */

            /* PT-DIALOG */
            {
              elem: 'pattern',
              block: 'demo',
              content: [
                {
                  block: 'text',
                  mods: { view: 'primary', size: 'xxl', weight: 'bold', display: 'block' },
                  mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
                  content: '.pt-dialog',
                  // tag: 'a',
                  // attrs: {
                  //   href: '#',
                  //   target: '_blank'
                  // }
                },
                // {
                //   block: 'text',
                //   mods: { view: 'primary', size: 'm', indent: 'm' },
                //   content: 'Конструкция предназначенная для вывода информации или получения ответа от пользователя. Может быть представлена как часть смыслового блока (например успех внутри формы) или обернута в модалку.'
                // },
                {
                  block: 'pt-table',
                  content: [
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'view': 'head' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Селектор'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'МОДИФИКАТОР'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Значение'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Описание'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'pt-dialog'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'view'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'default / ghost / inverse'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для фона блока'
                            }
                          ]
                        }
                      ]
                    },
                  ]
                },
              ]
            },
            /* /PT-DIALOG */

            /* PT-ICON-PLUS */
            {
              elem: 'pattern',
              block: 'demo',
              content: [
                {
                  block: 'text',
                  mods: { view: 'primary', size: 'xxl', weight: 'bold', display: 'block' },
                  mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
                  content: '.pt-icon-plus',
                  // tag: 'a',
                  // attrs: {
                  //   href: '#',
                  //   target: '_blank'
                  // }
                },
                // {
                //   block: 'text',
                //   mods: { view: 'primary', size: 'm', indent: 'm' },
                //   content: 'Конструкция отображения данных с иконкой слева. Состоит из элементов иконки и контентной части.'
                // },
                {
                  block: 'pt-table',
                  content: [
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'view': 'head' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Селектор'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'МОДИФИКАТОР'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Значение'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Описание'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'pt-icon-plus'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'vertical-align'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'center / top'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для вертикального выравнивания'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'pt-icon-plus__icon'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'indent-right'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'xxs / xs / s / m / l'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для расстояния от иконки'
                            }
                          ]
                        }
                      ]
                    },
                  ]
                },
              ]
            },
            /* /PT-ICON-PLUS */

            /* PT-AVATAR */
            {
              elem: 'pattern',
              block: 'demo',
              content: [
                {
                  block: 'text',
                  mods: { view: 'primary', size: 'xxl', weight: 'bold', display: 'block' },
                  mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
                  content: '.pt-avatar',
                  // tag: 'a',
                  // attrs: {
                  //   href: '#',
                  //   target: '_blank'
                  // }
                },
                // {
                //   block: 'text',
                //   mods: { view: 'primary', size: 'm', indent: 'm' },
                //   content: 'Конструкция отображения данных с иконкой слева. Состоит из элементов иконки и контентной части.'
                // },
                {
                  block: 'pt-table',
                  content: [
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'view': 'head' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Селектор'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'МОДИФИКАТОР'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Значение'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Описание'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'pt-avatar__photo'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'size'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 's / m / l'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для размеров'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            },
            /* /PT-AVATAR */

            /* PT-BAGE */
            {
              elem: 'pattern',
              block: 'demo',
              content: [
                {
                  block: 'text',
                  mods: { view: 'primary', size: 'xxl', weight: 'bold', display: 'block' },
                  mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
                  content: '.pt-bage',
                  // tag: 'a',
                  // attrs: {
                  //   href: '#',
                  //   target: '_blank'
                  // }
                },
                // {
                //   block: 'text',
                //   mods: { view: 'primary', size: 'm', indent: 'm' },
                //   content: 'Конструкция для отображения статусов/счетчиков.'
                // },
                {
                  block: 'pt-table',
                  content: [
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'view': 'head' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Селектор'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'МОДИФИКАТОР'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Значение'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
                              content: 'Описание'
                            }
                          ]
                        },
                      ]
                    },
                    {
                      elem: 'row',
                      elemMods: { 'space-a': 's', 'stripe': 'even' },
                      content: [
                        {
                          elem: 'col',
                          elemMods: { width: '15' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'pt-bage'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '25' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'view'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '20' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'default / success / alert / inverse'
                            }
                          ]
                        },
                        {
                          elem: 'col',
                          elemMods: { width: '40' },
                          content: [
                            {
                              block: 'text',
                              mods: { size: 'm', view: 'primary' },
                              content: 'Модификаторы для фона блока'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            },
            /* /PT-BAGE */

          ]
        }
      ]
    },
  ]
};
