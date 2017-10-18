block('demo').elem('menu').attrs()(function() {
    return {
        'section': this.ctx.section,
        'active': this.ctx.active
    };
});

block('demo').elem('menu')(
  content()(function(n, ctx) {
    return [
      {
        elem: 'menu-content',
        content: [
      	{
          elem: 'menu-sections',
          content: [
            {
              elem: 'menu-sections-col',
              content: [
                {
                  elem: 'menu-section',
                  attrs: { 'section' : 'projects' },
                  content: [
                    {
                      elem: 'menu-section-name',
                      content: 'Инструменты'
                    },
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://github.com/bemdesign/bem-theme'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Темы'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Библиотека'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Мейнтейнер'
                            }
                          ]
                        }
                      ]
                    }, 
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://github.com/bemdesign/bem-typo'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Типографика'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Библиотека'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Мейнтейнер'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://github.com/bemdesign/bem-icons'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Иконки'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Библиотека'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Мейнтейнер'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://github.com/bemdesign/bem-vectors'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Векторы'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Библиотека'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Мейнтейнер'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://github.com/bemdesign/bem-illustrations'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Иллюстрации'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Библиотека'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Мейнтейнер'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://github.com/bemdesign/bem-patterns'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Паттерны'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Библиотека'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Мейнтейнер'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://github.com/bemdesign/bem-layouts'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Сетки'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Библиотека'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Мейнтейнер'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://github.com/bemdesign/bem-animations'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Анимация'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Библиотека'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Мейнтейнер'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              elem: 'menu-sections-col',
              content: [
                {
                  elem: 'menu-section',
                  attrs: { 'section' : 'docs' },
                  content: [
                    {
                      elem: 'menu-section-name',
                      content: 'Документация'
                    },
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'CSS гайды'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Прототип'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Мейнтейнер'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Гайд по иконкам'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Прототип'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Мейнтейнер'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Гайд по векторам'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Прототип'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Мейнтейнер'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Шаблонизация'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Прототип'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Мейнтейнер'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem: 'menu-section',
                  attrs: { 'section' : 'tools' },
                    content: [
                    {
                      elem: 'menu-section-name',
                      content: 'Демо шоты'
                    },
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Maybach 6 Vision'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Dribbble'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Yuriy Yegorov'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Interview magazine'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Dribbble'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Mikhail Koloskov'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'menu-item',
                      attrs: { 'active' : '' },
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Upcoming'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Dribbble'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Julia Muzafarova'
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
        }]
      }
    ];
  })
);
