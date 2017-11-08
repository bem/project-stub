module.exports = {
	block: 'page',
	title: 'BEM Open Source',
	favicon: '/favicon.ico',
	head: [
			{ elem: 'meta', attrs: { name: 'description', content: '' } },
			{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
			{ elem: 'css', url: 'opensource.min.css' },
			{ elem: 'css', url: '../../assets/bem-grid/bem-grid-l.css' },
			{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	mix: {
			block: 'theme',
			mods: { color: 'default', space: 'default', size: 'default' }
	},
	scripts: [{ elem: 'js', url: 'opensource.min.js' }],
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
				pagename: 'opensource',
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
							content: 'Open Source'
						},
						{
							block: 'text',
							mods: { size: 'xxl', view: 'primary' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
							content: 'Стань частью BEM DESIGN'
						},
						{
							block : 'row',
							content : [
								{
									elem : 'col',
									elemMods : { sw : 6 },
									content : [
										{
											block: 'opensource-item',
											mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
											content: [
												{
													elem: 'header',
													content: [
														{
															block: 'text',
															mods: { view: 'link', size: 'm' },
															tag: 'a',
															attrs: {
																href: 'https://github.com/bemdesign/bem-layouts',
																target: '_blank'
															},
															content: 'bem-layout'
														},
														{
															elem: 'level-list',
															content: [
																{
																	elem: 'level-item',
																	content: [
																		{
																			block: 'icon',
																			mods: { 'allert-1': 's-inverse' }
																		}
																	]
																},
																{
																	elem: 'level-item',
																	content: [
																		{
																			block: 'icon',
																			mods: { 'allert-1': 's-inverse' }
																		}
																	]
																},
																{
																	elem: 'level-item',
																	content: [
																		{
																			block: 'icon',
																			mods: { 'allert-1': 's-inverse' }
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'content',
													content: [
														{
															block: 'text',
															mods: { view: 'primary', size: 'xxl', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
															content: 'Заголовок'
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Описание описание описание описание. Описание описание описание описание. Описание описание описание описание.'
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Описание описание описание описание. Описание описание описание описание. Описание описание описание описание.'
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Описание описание описание описание. Описание описание описание описание. Описание описание описание описание.'
														}
													]
												},
												{
													elem: 'action',
													content: [
														{
															elem: 'event',
															content: [

																{
																		block: 'button',
																		mods: {
																				theme: 'islands',
																				size: 'l',
																				view: 'action',
																				type: 'link'
																		},
																		url: 'https://t.me/joinchat/ADACr0LTMVRtYa9vzFXEMQ',
																		text: 'Предложить решение'
																}
															]
														},
														{
															elem: 'event',
															content: [
																{
																		block: 'button',
																		mods: {
																				theme: 'islands',
																				size: 'l',
																				view: 'normal',
																				type: 'link'
																		},
																		url: 'https://github.com/bemdesign/bem-layouts',
																		text: 'Обсудить'
																}
															]
														}
													]
												}
											]
										},
                    {
                      block: 'opensource-item',
                      mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
                      content: [
                        {
                          elem: 'header',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'link', size: 'm' },
                              tag: 'a',
                              attrs: {
                                href: 'https://github.com/bemdesign/bem-layouts',
                                target: '_blank'
                              },
                              content: 'bem-layout'
                            },
                            {
                              elem: 'level-list',
                              content: [
                                {
                                  elem: 'level-item',
                                  content: [
                                    {
                                      block: 'icon',
                                      mods: { 'allert-1': 's-inverse' }
                                    }
                                  ]
                                },
                                {
                                  elem: 'level-item',
                                  content: [
                                    {
                                      block: 'icon',
                                      mods: { 'allert-1': 's-inverse' }
                                    }
                                  ]
                                },
                                {
                                  elem: 'level-item',
                                  content: [
                                    {
                                      block: 'icon',
                                      mods: { 'allert-1': 's-inverse' }
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem: 'content',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'primary', size: 'xxl', weight: 'bold' },
                              mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
                              content: 'Заголовок'
                            },
                            {
                              block: 'text',
                              mods: { view: 'primary', size: 'm' },
                              mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                              content: 'Описание описание описание описание. Описание описание описание описание. Описание описание описание описание.'
                            },
                            {
                              block: 'text',
                              mods: { view: 'primary', size: 'm' },
                              mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                              content: 'Описание описание описание описание. Описание описание описание описание. Описание описание описание описание.'
                            }
                          ]
                        },
                        {
                          elem: 'action',
                          content: [
                            {
                              elem: 'event',
                              content: [

                                {
                                    block: 'button',
                                    mods: {
                                        theme: 'islands',
                                        size: 'l',
                                        view: 'action',
                                        type: 'link'
                                    },
                                    url: 'https://t.me/joinchat/ADACr0LTMVRtYa9vzFXEMQ',
                                    text: 'Предложить решение'
                                }
                              ]
                            },
                            {
                              elem: 'event',
                              content: [
                                {
                                    block: 'button',
                                    mods: {
                                        theme: 'islands',
                                        size: 'l',
                                        view: 'normal',
                                        type: 'link'
                                    },
                                    url: 'https://github.com/bemdesign/bem-layouts',
                                    text: 'Обсудить'
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
                  elem : 'col',
                  elemMods : { sw : 6 },
                  content : [
                    {
                      block: 'opensource-item',
                      mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
                      content: [
                        {
                          elem: 'header',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'link', size: 'm' },
                              tag: 'a',
                              attrs: {
                                href: 'https://github.com/bemdesign/bem-layouts',
                                target: '_blank'
                              },
                              content: 'bem-layout'
                            },
                            {
                              elem: 'level-list',
                              content: [
                                {
                                  elem: 'level-item',
                                  content: [
                                    {
                                      block: 'icon',
                                      mods: { 'allert-1': 's-inverse' }
                                    }
                                  ]
                                },
                                {
                                  elem: 'level-item',
                                  content: [
                                    {
                                      block: 'icon',
                                      mods: { 'allert-1': 's-inverse' }
                                    }
                                  ]
                                },
                                {
                                  elem: 'level-item',
                                  content: [
                                    {
                                      block: 'icon',
                                      mods: { 'allert-1': 's-inverse' }
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem: 'content',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'primary', size: 'xxl', weight: 'bold' },
                              mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
                              content: 'Заголовок'
                            },
                            {
                              block: 'text',
                              mods: { view: 'primary', size: 'm' },
                              mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                              content: 'Описание описание описание описание. Описание описание описание описание. Описание описание описание описание.'
                            },
                            {
                              block: 'text',
                              mods: { view: 'primary', size: 'm' },
                              mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                              content: 'Описание описание описание описание. Описание описание описание описание. Описание описание описание описание.'
                            }
                          ]
                        },
                        {
                          elem: 'action',
                          content: [
                            {
                              elem: 'event',
                              content: [

                                {
                                    block: 'button',
                                    mods: {
                                        theme: 'islands',
                                        size: 'l',
                                        view: 'action',
                                        type: 'link'
                                    },
                                    url: 'https://t.me/joinchat/ADACr0LTMVRtYa9vzFXEMQ',
                                    text: 'Предложить решение'
                                }
                              ]
                            },
                            {
                              elem: 'event',
                              content: [
                                {
                                    block: 'button',
                                    mods: {
                                        theme: 'islands',
                                        size: 'l',
                                        view: 'normal',
                                        type: 'link'
                                    },
                                    url: 'https://github.com/bemdesign/bem-layouts',
                                    text: 'Обсудить'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      block: 'opensource-item',
                      mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
                      content: [
                        {
                          elem: 'header',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'link', size: 'm' },
                              tag: 'a',
                              attrs: {
                                href: 'https://github.com/bemdesign/bem-layouts',
                                target: '_blank'
                              },
                              content: 'bem-layout'
                            },
                            {
                              elem: 'level-list',
                              content: [
                                {
                                  elem: 'level-item',
                                  content: [
                                    {
                                      block: 'icon',
                                      mods: { 'allert-1': 's-inverse' }
                                    }
                                  ]
                                },
                                {
                                  elem: 'level-item',
                                  content: [
                                    {
                                      block: 'icon',
                                      mods: { 'allert-1': 's-inverse' }
                                    }
                                  ]
                                },
                                {
                                  elem: 'level-item',
                                  content: [
                                    {
                                      block: 'icon',
                                      mods: { 'allert-1': 's-inverse' }
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem: 'content',
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'primary', size: 'xxl', weight: 'bold' },
                              mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
                              content: 'Заголовок'
                            },
                            {
                              block: 'text',
                              mods: { view: 'primary', size: 'm' },
                              mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                              content: 'Описание описание описание описание. Описание описание описание описание. Описание описание описание описание.'
                            },
                            {
                              block: 'text',
                              mods: { view: 'primary', size: 'm' },
                              mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                              content: 'Описание описание описание описание. Описание описание описание описание. Описание описание описание описание.'
                            }
                          ]
                        },
                        {
                          elem: 'action',
                          content: [
                            {
                              elem: 'event',
                              content: [

                                {
                                    block: 'button',
                                    mods: {
                                        theme: 'islands',
                                        size: 'l',
                                        view: 'action',
                                        type: 'link'
                                    },
                                    url: 'https://t.me/joinchat/ADACr0LTMVRtYa9vzFXEMQ',
                                    text: 'Предложить решение'
                                }
                              ]
                            },
                            {
                              elem: 'event',
                              content: [
                                {
                                    block: 'button',
                                    mods: {
                                        theme: 'islands',
                                        size: 'l',
                                        view: 'normal',
                                        type: 'link'
                                    },
                                    url: 'https://github.com/bemdesign/bem-layouts',
                                    text: 'Обсудить'
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
						}
					]
				}
			]
		},
	]
};
