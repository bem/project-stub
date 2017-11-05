module.exports = {
  block: 'page',
  title: 'BEM Typo',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'typo.min.css' },
      { elem: 'css', url: '../../assets/bem-grid/bem-grid-l.css' },
      { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
  ],
  mix: {
      block: 'theme',
      mods: { color: 'default', space: 'default', size: 'default' }
  },
  scripts: [{ elem: 'js', url: 'typo.min.js' }],
  mods: { type: 'full-screen', theme: 'islands', 'vertical-align': 'center' },
  content: [
    {
      block: 'demo',
      mix: [
        { block: 'b-page', elem: 'content' },
        { block: 'theme' }
      ],
      params: {
        menusection: 'tools',
        pagename: 'typo',

      },
      content : [
        {
          elem: 'content',
          content: [
            {
              block: 'text',
              mods: { size: 'xxxl', weight: 'bold' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
              content: 'Типографика'
            },
            {
              block: 'text',
              mods: { size: 'xxl', view: 'primary' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
              content: 'Мы вынесли блок .text модификаторами на цвет размер, регистр, жирность и межбуквенный интервал. Их можно использовать в различных комбинациях. Манипулируя достаточно небольшим количеством комбинаций мы получаем все необходимые вариации текста.'
            },
            {
              elem : 'section',
              content : [
                /* Typography */
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl'},
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : "mods : { size : 'xxxl' }"
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'font-size: 32px'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'line-height: 42px'
                                    }
                                  ]
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                          elem : 'item',
                          content : [
                            {
                              elem : 'view',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'xxl'},
                                  content : 'Typography'
                                }
                              ]
                            },
                            {
                              elem : 'text',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', weight : 'bold' },
                                  content : " mods : { size : 'xxl' } "
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm' },
                                  content : 'font-size: 24px'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm' },
                                  content : 'line-height: 34px'
                                }
                              ]
                            }
                          ]
                        },
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xl'},
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : " mods : { size : 'xl' } "
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'font-size: 20px'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'line-height: 28px'
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
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'l'},
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : "mods : { size : 'l' }"
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'font-size: 18px'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'line-height: 25px'
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
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : "mods : { size : 'm' }"
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'font-size: 15px'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'line-height: 21px'
                                    }
                                  ]
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 's'},
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : "mods : { size : 's' }"
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'font-size: 13px'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'line-height: 18px'
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
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xs'},
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : "mods : { size : 'xs' }"
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'font-size: 11px'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'line-height: 15px'
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
                /* Typography */
              ]
            },
            {
              elem : 'section',
              content : [
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', view : 'primary' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight: 'bold' },
                                      content : " mods : { view : 'primary' } "
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : '#000000'
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
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', view : 'promo' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight: 'bold' },
                                      content : " mods : { view : 'promo' } "
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'rgba(0, 0, 0, 0.7)'
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
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', view : 'secondary' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight: 'bold' },
                                      content : " mods : { view : 'secondary' } "
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'rgba(0, 0, 0, 0.60)'
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
                },
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', view : 'ghost' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight: 'bold' },
                                      content : " mods : { view : 'ghost' } "
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'rgba(0, 0, 0, 0.30)'
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
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', view : 'inverse' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight: 'bold' },
                                      content : " mods : { view : 'inverse' }"
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : '#FFFFFF'
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
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', view : 'income' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight: 'bold' },
                                      content : " mods : { view : 'income' }"
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : '#04A504'
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
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', view : 'letter' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight: 'bold' },
                                      content : " mods : { view : 'letter' }"
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : '#FF0000'
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
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', view : 'disable' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight: 'bold' },
                                      content : " mods : { view : 'disable' }"
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'rgba(0,0,0,0.30)'
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
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', view : 'link' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight: 'bold' },
                                      content : " mods : { view : 'link' }"
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : '#0070F0'
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
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', view : 'link-minor' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight: 'bold' },
                                      content : " mods : { view : 'link-minor' }"
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : '#666699'
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
            },
            {
              elem : 'section',
              content : [
                {
                  block : 'row',
                  content : [
                      // {
                      //   elem : 'col',
                      //   elemMods : { sw : 4 },
                      //   content : [
                      //     {
                      //       block : 'typography',
                      //       content : [
                      //         {
                      //           elem : 'item',
                      //           content : [
                      //             {
                      //               elem : 'view',
                      //               content : [
                      //                 {
                      //                   block : 'text',
                      //                   mods : { size : 'xxxl', weight : 'thin' },
                      //                   content : 'Typography'
                      //                 }
                      //               ]
                      //             },
                      //             {
                      //               elem : 'text',
                      //               content : [
                      //                 {
                      //                   block : 'text',
                      //                   mods : { size : 'm', weight : 'bold' },
                      //                   content : " mods : { weight : 'thin' } "
                      //                 },
                      //                 {
                      //                   block : 'text',
                      //                   mods : { size : 'm' },
                      //                   content : 'weight: thin'
                      //                 }
                      //               ]
                      //             }
                      //           ]
                      //         }
                      //       ]
                      //     }
                      //   ]
                      // },
                      // {
                      //   elem : 'col',
                      //   elemMods : { sw : 4 },
                      //   content : [
                      //     {
                      //       block : 'typography',
                      //       content : [
                      //         {
                      //           elem : 'item',
                      //           content : [
                      //             {
                      //               elem : 'view',
                      //               content : [
                      //                 {
                      //                   block : 'text',
                      //                   mods : { size : 'xxxl', weight : 'light' },
                      //                   content : 'Typography'
                      //                 }
                      //               ]
                      //             },
                      //             {
                      //               elem : 'text',
                      //               content : [
                      //                 {
                      //                   block : 'text',
                      //                   mods : { size : 'm', weight : 'bold' },
                      //                   content : " mods : { weight : 'light' } "
                      //                 },
                      //                 {
                      //                   block : 'text',
                      //                   mods : { size : 'm' },
                      //                   content : 'weight: light'
                      //                 }
                      //               ]
                      //             }
                      //           ]
                      //         }
                      //       ]
                      //     }
                      //   ]
                      // },

                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', weight : 'bold' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : " mods : { weight : 'bold' } "
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'weight: bold'
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
            },
            {
              elem : 'section',
              content : [
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', transform : 'uppercase' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : " mods : { transform : 'uppercase' } "
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'transform: uppercase'
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
            },
            {
              elem : 'section',
              content : [
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', transform : 'uppercase', spacing : 's' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : " mods : { spacing : 's' } "
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'letter-spacing: 1px'
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
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', transform : 'uppercase', spacing : 'm' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : " mods : { spacing : 'm' } "
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'letter-spacing: 2px'
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
            },
            {
              elem : 'section',
              content : [
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'typography',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  elem : 'view',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'xxxl', style : 'italic' },
                                      content : 'Typography'
                                    }
                                  ]
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : " mods : { style : 'italic' } "
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm' },
                                      content : 'font-style: italic'
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
            }
          ]
        }
      ]
    },
  ]
};
