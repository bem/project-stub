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
                                'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/themes/themes.html'
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
                              content: '@miocene, @koloskof'
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
                                'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/typo/typo.html'
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
                              content: '@koloskof @kirillback @miocene'
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
                                'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/icons/icons.html'
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
                              content: '@kirillback, @miocene'
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
                                'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/patterns/patterns.html'
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
                              content: '@koloskof'
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
                                'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/layouts/layouts.html'
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
                              content: '@kirillback @codensleep'
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
                                'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/animations/animations.html'
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
                              content: '@miocene'
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
                                'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/illustations/illustations.html'
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
                              content: '@lerazhelezova'
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
                                'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/vectors/vectors.html'
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
                              content: '@dandycolor, @miocene'
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
                                'href': 'https://habrahabr.ru/company/yamoney/blog/341028/'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Процес прототипирования'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Документация'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: '@koloskof'
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
                                'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/opensource/opensource.html'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Вступить в БЭМ Дизайн'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Документация'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: '@miocene @koloskof'
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
                                'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/article-icons/article-icons.html'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Как рисовать иконки'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Документация'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: '@kirillback'
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
                                'href': 'https://@koloskof.github.io/bemxjstdemo/'
                              },
                              mix: { block: 'demo', elem: 'menu-item-link' },
                              content: 'Шаблонизация'
                            },
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: 'Документация'
                            }
                          ]
                        },
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { 'view': 'inverse', 'size': 'm' },
                              content: '@mirioiruni'
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
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://dribbble.com/shots/2984399-Maybach-6-Vision'
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
                              content: '@codensleep'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'menu-item',
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://dribbble.com/shots/2947385-Interview-magazine-Desiigner'
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
                              content: '@koloskof'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'menu-item',
                      content: [
                        {
                          elem: 'menu-item-row',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'inverse', size: 'l' },
                              tag: 'a',
                              attrs: {
                                'href': 'https://dribbble.com/julia_miocene'
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
                              content: '@miocene'
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
