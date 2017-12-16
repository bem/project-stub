module.exports = {
  block: 'page',
  title: 'BEM Themes',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'themes.min.css' },
      { elem: 'css', url: '../../assets/bem-grid/bem-grid-l.css' },
      { elem: 'css', url: '../../assets/ibm-type/css/ibm-type.css' },
      { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
  ],
  mix: {
      block: 'theme',
      mods: { color: 'default', space: 'default', size: 'default' }
  },
  scripts: [{ elem: 'js', url: 'themes.min.js' }],
  mods: { theme: 'islands' },
  content: [
    {
      block: 'demo',
      mix : {
        block : 'theme',
        mods : { color : 'default', space : 'default', size : 'default' }
      },
      params: {
        menusection: 'tools',
        pagename: 'themes',
      },
      content : [
        {
          elem: 'content',
          content: [
            {
              block: 'text',
              mods: { size: 'xxxl', weight: 'bold' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
              content: 'Переменные'
            },
            {
              block: 'text',
              mods: { size: 'xxl', view: 'primary', width: 'default' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
              content: 'Переменные позволяют гибко кастомизировать и масштабировать интерфейс, сохраняя консистентность блоков'
            },
            {
              elem : 'section',
              content : [
                /* Colors */
                {
                  elem : 'block-colors',
                  content : [
                    {
                      block : 'row',
                      content : [
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'brand'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-brand'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#FFCC00'
                                    },
                                  ]
                                }
                              ]
                            },
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'action'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-action'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#FFDB4D'
                                    },
                                  ]
                                }
                              ]
                            },
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'selection'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-selection'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#FFEBA0'
                                    },
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'hover'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-hover'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#FFF6CB'
                                    }
                                  ]
                                }
                              ]
                            },
                          ]
                        },
                      ]
                    },
                    {
                      block : 'row',
                      content : [
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'inverse'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-inverse'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : 'rgba(0, 0, 0, 0.9)'
                                    },
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'border'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-border'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : 'rgba(0, 0, 0, 0.05)'
                                    },
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'border-control'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-border-control'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : 'rgba(0, 0, 0, 0.12)'
                                    },
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'ghost'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-ghost'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#F3F1ED'
                                    },
                                  ]
                                }
                              ]
                            },
                          ]
                        },
                      ]
                    },


                    {
                      block : 'row',
                      content : [
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'default'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-default'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#FFFFFF'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'default-android'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-default-android'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#F9F9F9'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'tone'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-tone'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : 'rgba(0,0,0,0.70)'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'disable'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-disable'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : 'rgba(0,0,0,0.08)'
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
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'success'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-success'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#00985F'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'alert'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-alert'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#FF3333'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'normal'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-normal'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#DDE3E5'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },


                      ]
                    },

                  ]
                },
                /* /Colors */


                /* Colors */
                {
                  elem: 'typo-colors',
                  content : [
                    {
                      block : 'row',
                      content : [
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'typo-primary'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-typo-primary'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#000000'
                                    },
                                  ]
                                }
                              ]
                            },
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'typo-promo'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-typo-promo'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : 'rgba(0, 0, 0, 0.7)'
                                    },
                                  ]
                                }
                              ]
                            },
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'typo-secondary'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-typo-secondary'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : 'rgba(0, 0, 0, 0.60)'
                                    },
                                  ]
                                }
                              ]
                            },
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'typo-ghost'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-typo-ghost'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : 'rgba(0, 0, 0, 0.30)'
                                    },
                                  ]
                                }
                              ]
                            },

                            /*
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'typo-inverse'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-typo-inverse'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#FFFFFF'
                                    },
                                  ]
                                }
                              ]
                            },
                            */
                          ]
                        }
                      ]
                    },
                    {
                      block : 'row',
                      content : [
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'typo-inverse'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-typo-inverse'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#FFFFFF'
                                    },
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'typo-success'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-typo-success'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#00985F'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'typo-alert'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-typo-alert'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#FF3333'
                                    },
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'typo-disable'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-typo-disable'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : 'rgba(0,0,0,0.30)'
                                    },
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
                /* /Colors */


                /* Colors */
                {
                  elem: 'link-colors',
                  content : [
                    {
                      block : 'row',
                      content : [
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'link'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-link'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#0070F0'
                                    },
                                  ]
                                }
                              ]
                            },
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color : 'link-hover' }
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-link-hover'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#CC0000'
                                    },
                                  ]
                                }
                              ]
                            },
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'link-minor'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-link-minor'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#666699'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          elemMods : { sw : 3 },
                          content : [
                            {
                              block : 'color',
                              content : [
                                {
                                  elem : 'image',
                                  elemMods : { color: 'typo-letter'}
                                },
                                {
                                  elem : 'text',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', weight : 'bold' },
                                      content : '--color-typo-letter'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm'},
                                      content : '#FF0000'
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
                /* /Colors */
              ]
            },
            {
              elem : 'section',
              content : [
                /* Spaces */
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'space',
                          content : [
                            {
                              elem : 'image',
                              content : [
                                {
                                  block : 'space-image',
                                  mods : { size : 'xxxxl' },
                                }
                              ]
                            },
                            {
                              elem : 'text',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', weight : 'bold' },
                                  content : '--space-xxxxl'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm' },
                                  content : '48px'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block : 'space',
                          content : [
                            {
                              elem : 'image',
                              content : [
                                {
                                  block : 'space-image',
                                  mods : { size : 'xxxl' },
                                }
                              ]
                            },
                            {
                              elem : 'text',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', weight : 'bold' },
                                  content : '--space-xxxl'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm' },
                                  content : '40px'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block : 'space',
                          content : [
                            {
                              elem : 'image',
                              content : [
                                {
                                  block : 'space-image',
                                  mods : { size : 'xxl' },
                                }
                              ]
                            },
                            {
                              elem : 'text',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', weight : 'bold' },
                                  content : '--space-xxl'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm' },
                                  content : '32px'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block : 'space',
                          content : [
                            {
                              elem : 'image',
                              content : [
                                {
                                  block : 'space-image',
                                  mods : { size : 'xl' },
                                }
                              ]
                            },
                            {
                              elem : 'text',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', weight : 'bold' },
                                  content : '--space-xl'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm' },
                                  content : '24px'
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
                          block : 'space',
                          content : [
                            {
                              elem : 'image',
                              content : [
                                {
                                  block : 'space-image',
                                  mods : { size : 'l' },
                                }
                              ]
                            },
                            {
                              elem : 'text',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', weight : 'bold' },
                                  content : '--space-l'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm' },
                                  content : '20px'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block : 'space',
                          content : [
                            {
                              elem : 'image',
                              content : [
                                {
                                  block : 'space-image',
                                  mods : { size : 'm' },
                                }
                              ]
                            },
                            {
                              elem : 'text',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', weight : 'bold' },
                                  content : '--space-m'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm' },
                                  content : '16px'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block : 'space',
                          content : [
                            {
                              elem : 'image',
                              content : [
                                {
                                  block : 'space-image',
                                  mods : { size : 's' },
                                }
                              ]
                            },
                            {
                              elem : 'text',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', weight : 'bold' },
                                  content : '--space-s'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm' },
                                  content : '12px'
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
                          block : 'space',
                          content : [
                            {
                              elem : 'image',
                              content : [
                                {
                                  block : 'space-image',
                                  mods : { size : 'xs' },
                                }
                              ]
                            },
                            {
                              elem : 'text',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', weight : 'bold' },
                                  content : '--space-xs'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm' },
                                  content : '8px'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block : 'space',
                          content : [
                            {
                              elem : 'image',
                              content : [
                                {
                                  block : 'space-image',
                                  mods : { size : 'xxs' },
                                }
                              ]
                            },
                            {
                              elem : 'text',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', weight : 'bold' },
                                  content : '--space-xxs'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm' },
                                  content : '4px'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block : 'space',
                          content : [
                            {
                              elem : 'image',
                              content : [
                                {
                                  block : 'space-image',
                                  mods : { size : 'xxxs' },
                                }
                              ]
                            },
                            {
                              elem : 'text',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', weight : 'bold' },
                                  content : '--space-xxxs'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm' },
                                  content : '2px'
                                }
                              ]
                            }
                          ]
                        },
                      ]
                    }
                  ]
                },
                /* Spaces */
              ]
            }
          ]
        }
      ]
    }
  ]
};
