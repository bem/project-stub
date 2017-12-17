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
	mods: { type: 'full-screen', theme: 'islands' },
	content: [
	{
		block: 'demo',
		mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default' }
		},
		content: [
		// {
		// 	elem: 'layout',
		// 	elemMods: { view: 'default' },
		// 	content: [
		// 	{
		// 		elem: 'content',
		// 		content: [
		// 		{
		// 			block: 'text',
		// 			mods: { size: 'xxl', view: 'ghost', weight: 'bold' },
		// 			content: [
		// 			'Yamoney Design',
		// 			{
		// 				tag: 'a',
		// 				block: 'text',
		// 				mods: { view: 'link' },
		// 				mix: { block: 'decorator', mods: { 'indent-l': 's' } },
		// 				attrs: { href: 'https://bitbucket-public.yamoney.ru/users/meeq/repos/prototype/browse' },
		// 				content: 'на Bitbucket'
		// 			},
		// 			{
		// 				tag: 'a',
		// 				block: 'text',
		// 				mods: { view: 'link' },
		// 				mix: { block: 'decorator', mods: { 'indent-l': 's' } },
		// 				attrs: { href: 'https://t.me/bemdesign' },
		// 				content: 'в Telegram'
		// 			}]
		// 		},
		// 		{
		// 			elem: 'slogan',
		// 			content: 'Масштабируемая'
		// 		},
		// 		{
		// 			elem: 'slogan',
		// 			content: 'дизайн-система'
		// 		},
		// 		{
		// 			elem: 'slogan',
		// 			content: 'на основе БЭМ'
		// 		}]
		// 	}]
		// },
		{
			block: 'promo-cards',
			mix: { block: 'promo-cards', elem: 'offer-section' },
			mods: { view: 'ghost', slide: 'first' },
			content: [
			{
				elem: 'theme-name',
				content: 'Product'
			},
			{
				elem: 'content',
				content: [
				{
					elem: 'card',
					mix: [
						{ elem: 'offer', elemMods: { type: 'goods' } },
						{ block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					],
					content: [
						{
							block: 'offer',
							mix: [
								{ block: 'pt-card', mods: { view: 'default' } },
								{ block: 'promo-cards', elem: 'hover' },
								{ block: 'promo-cards', elem: 'offer-goods' },
							],
							mods: { view: 'nike' },
							content: [
								{
									elem: 'show',
									mix: { block: 'pt-card', elem: 'header' },
									content: [
										{
											elem: 'background',
											mix: { block: 'promo-cards', elem: 'offer-goods-background'}
										},
										{
											elem: 'goods-price',
											mix: [
												{ block: 'promo-cards', elem: 'offer-goods-price'},
												{ block: 'text', mods: {font: 'serif', style: 'italic', weight: 'bold'} }
											],
											content: '$299'
										},
										{
											elem: 'item',
											mix: { block: 'promo-cards', elem: 'offer-goods-item'}
										}
									]
								},
								{
									elem: 'goods-info',
									mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl' } },
									content: [
										{
											block: 'text',
											mix: [
												{ block: 'decorator', mods: { 'indent-b': 'xs' } },
												{ block: 'promo-cards', elem: 'offer-goods-title'},
											],
											mods: { view: 'primary', font: 'mono', weight: 'bold', size: 'xl', align: 'center', transform: 'uppercase', spacing: 's' },
											content: 'Nike Gyakusou Gaiter Boot'
										},
										{
											block: 'text',
											mods: { view: 'primary', size: 's', align: 'center' },
											mix: { block: 'promo-cards', elem: 'offer-goods-desc'},
											content: 'You have the goal. We have a gift'
										}
									]
								},
								{
									elem: 'action',
									mix: [
										{ block: 'pt-card', elem: 'footer', elemMods: { 'space-v': 'xl' } },
										{ block: 'promo-cards', elem: 'offer-goods-action'},
									],
									content: [
										{
											block: 'text',
											mods: { view: 'secondary', size: 'm', weight: 'bold', align: 'center', },
											content: 'Shop Now'
										}
									]
								}
							]
						},


						{
							block: 'offer',
							mix: [
								{ block: 'pt-card', mods: { view: 'default' } },
								{ block: 'promo-cards', elem: 'hover' },
								{ block: 'promo-cards', elem: 'offer-brand' },
							],
							content: [
								{
									elem: 'brand-show',
									mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'xl' } },
									content: [
										{
											elem: 'brand-image-wrapper',
											mix: { block: 'promo-cards', elem: 'brand-image-wrapper' },
											content: [
												{
													elem: 'brand-image',
													mix: { block: 'promo-cards', elem: 'offer-brand-image' }
												}
											]
										}
									]
								},
								{
									elem: 'brand-info',
									mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl' } },
									content: [
										{
											block: 'text',
											mods: { view: 'primary', size: 'xxl', align: 'center', transform: 'uppercase', weight: 'bold', spacing: 's' },
											mix: [{ block: 'promo-cards', elem: 'offer-brand-title' }, { block: 'decorator', mods: { 'indent-b': 'xl' } }],
											content: 'Magic For All'
										},
										{
											elem: 'brand-logo',
											mix: [
												{ block: 'promo-cards', elem: 'offer-brand-logo' },
											]
										}
									]
								},
								{
									elem: 'brand-action',
									mix: [
										{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 's' } },
										{ block: 'promo-cards', elem: 'offer-brand-action' },
									],
									content: [
										{
											block: 'text',
											mods: { view: 'primary', size: 'm', align: 'center', weight: 'bold' },
											content: 'Learn More'
										}
									]
								}
							]
						},


						{
							block: 'offer',
							mods: { view: 'brabus'},
							mix: [
								{ block: 'pt-card', mods: { view: 'default' } },
								{ block: 'promo-cards', elem: 'hover' },
								{ block: 'promo-cards', elem: 'offer-service' },
							],
							content: [
								{
									elem: 'background-wrapper',
									mix: { block: 'promo-cards', elem: 'offer-service-background'},
									content: {
										elem: 'bg-photo',
										mix: { block: 'promo-cards', elem: 'offer-service-photo'}
									}
								},
								{
									elem: 'title',
									mix: [
										{ block: 'pt-card', elem: 'header', elemMods: { 'space-v': 'xxl' } },
										{ block: 'promo-cards', elem: 'offer-service-title'},
									],
									content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'l', transform: 'uppercase', align: 'center' },
											content: 'Brabus'
										}
									]
								},
								{
									elem: 'service-info',
									mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } },
									content: [
										{
											block: 'text',
											mix: [
												{ block: 'decorator', mods: { 'indent-b': 'xl'} },
												{ block: 'promo-cards', elem: 'offer-service-desc'},
											],
											mods: { view: 'inverse', size: 'm', weight: 'semibold' },
											content: 'Luxury and comfort never comprised. The BRABUS GLE 700 Coupe will lead to an unforgettable journey'
										},
										{
											elem: 'price',
											mix: { block: 'promo-cards', elem: 'offer-service-price'},
											content: [
												{
													block: 'text',
													mods: { view: 'inverse', size: 's', style: 'italic' },
													content: 'from'
												},
												{
													block: 'text',
													mods: { view: 'inverse', size: 'xxxl', weight: 'semibold' },
													content: '$299'
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
					elem: 'description',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
					{
						elem: 'header',
						mix: [
							{ block: 'decorator', mods: { 'indent-b': 'xl' } },
							{ block: 'text', mods: { font: 'sans', weight: 'bold' }, }
						],
						content: 'Offers'
					},
					{
						block: 'text',
						mods: { size: 'xl', font: 'mono' },
						content: 'Exclusive member-only offers in the run up to Black Friday, plus the best of Nike direct to your inbox. Don\'t miss out'
					}]
				},
				{
					elem: 'list',
					content: [
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mix: { block: 'promo-cards', elem: 'offer-tab-1' },
							mods: { size: 'xl', transform: 'uppercase', view: 'letter', align: 'center' },
							content: 'Goods'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mix: { block: 'promo-cards', elem: 'offer-tab-2' },
							mods: { size: 'xl', transform: 'uppercase', view: 'primary', align: 'center' },
							content: 'Brand'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mix: { block: 'promo-cards', elem: 'offer-tab-3' },
							mods: { size: 'xl', transform: 'uppercase', view: 'primary', align: 'center' },
							content: 'Service'
						}
					}]
				}]
			},
			{
				elem: 'controls',
				content: [
				{
					block: 'icon',
					mods: { 'arrow-up-2': 'xl-primary' },
					mix: { block: 'decorator', mods: { 'indent-r': 'xxl' } }
				},
				{
					block: 'icon',
					mods: { 'arrow-down-2': 'xl-primary' }
				}]
			},
			]
		},
		{
			block: 'promo-cards',
			mods: { view: 'inverse', slide: 'first' },
			mix: { block: 'promo-cards', elem: 'media-section' },
			content: [
			{
				elem: 'theme-name',
				content: 'Video'
			},
			{
				elem: 'content',
				content: [
				{
					elem: 'card',
					mix: [{ elem: 'media', elemMods: { type: 'video' } }, { block: 'decorator', mods: { 'indent-b': 'xxxxl' } }],
					content: [
					{
						block: 'media',
						mix: [{ block: 'pt-card', mods: { view: 'inverse' } }, { block: 'promo-cards', elem: 'media-video-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'video',
							mix: { block: 'promo-cards', elem: 'media-video' },
							content: [
							{
								elem: 'play'
							}]
						},
						{
							elem: 'video-title',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-video-title' }],
							content: [
							{
								block: 'text',
								mods: { view: 'inverse', size: 'xxl' },
								content: 'Mad Lib Theater with John Cena'
							}]
						},
						{
							elem: 'footer',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-video-footer' }],
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 'xs' },
									content: [
									{
										block: 'media',
										elem: 'channel-logo'
									}]
								},
								{
									elem: 'block',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's' },
										content: 'The Tonight Show…'
									}]
								}]
							},
							{
								block: 'text',
								mods: { view: 'inverse', size: 's' },
								content: '512K views'
							}]
						}]
					},
					{
						block: 'media',
						mix: [{ block: 'pt-card', mods: { view: 'default' } }, { block: 'promo-cards', elem: 'media-text-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'article-cover',
							mix: { block: 'promo-cards', elem: 'media-cover' },
							content: [
							{
								elem: 'article-author',
								content: [
								{
									block: 'pt-icon-plus',
									mods: { 'vertical-align': 'center' },
									mix: { block: 'promo-cards', elem: 'media-author-top' },
									content: [
									{
										elem: 'icon',
										elemMods: { 'indent-right': 'xs' },
										content: [
										{
											block: 'media',
											elem: 'avatar'
										}]
									},
									{
										elem: 'block',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 's' },
											content: 'James Bridle'
										}]
									}]
								}]
							}]
						},
						{
							elem: 'article-title',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-article' }],
							content: [
							{
								block: 'text',
								mods: { view: 'primary', size: 'xxl' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: 'Something is wrong on the internet'
							},
							{
								block: 'text',
								mods: { view: 'primary', size: 'm' },
								content: 'I’m James Bridle. I’m a writer and artist concerned with technology and culture. I usually write on my own blog…'
							}]
						},
						{
							elem: 'footer',
							mix: [{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-text-footer' }],
							content: [
							{
								block: 'text',
								mods: { view: 'secondary', size: 's' },
								content: 'Nov 6 / 21 min read'
							},
							{
								block: 'text',
								mods: { view: 'primary', size: 's' },
								content: '512K views'
							}]
						}]
					},
					{
						block: 'media',
						mix: [{ block: 'pt-card', mods: { view: 'inverse' } }, { block: 'promo-cards', elem: 'media-music-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'music-cover',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-music-cover' }],
							content: [
							{
								elem: 'music-info',
								content: [
								{
									block: 'text',
									mods: { view: 'inverse', size: 'xxl', align: 'center' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
									content: 'Pitchfork Best New Music',
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 'm', align: 'center' },
									content: 'Pitchfork',
								}]
							}]
						},
						{
							block: 'playlist',
							mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'm' } }, { block: 'promo-cards', elem: 'media-playlist' }],
							content: [
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'xs' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' } },
										content: 'Pitchfork Best New Music',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light' },
											content: 'Benjamin Clementine • At Least for Now',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's' },
									content: '7:25'
								}]
							},
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'Pitchfork Best New Music',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light' },
											content: 'Benjamin Clementine • At Least for Now',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's' },
									content: '7:25'
								}]
							},
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'Pitchfork Best New Music',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light'  },
											content: 'Benjamin Clementine • At Least for Now',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's' },
									content: '7:25'
								}]
							},
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'Pitchfork Best New Music',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light' },
											content: 'Benjamin Clementine • At Least for Now',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's' },
									content: '7:25'
								}]
							}]
						}]
					}]
				},
				{
					elem: 'description',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
					{
						elem: 'header',
						mix: [
							{ block: 'decorator', mods: { 'indent-b': 'xl' } },
							{ block: 'text', mods: { font: 'sans', weight: 'bold' }, }
						],
						content: 'Media'
					},
					{
						block: 'text',
						mods: { size: 'xl', font: 'mono' },
						content: 'Exclusive member-only offers in the run up to Black Friday, plus the best of Nike direct to your inbox. Don\'t miss out'
					}]
				},
				{
					elem: 'list',
					content: [
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mods: { size: 'xl', transform: 'uppercase', view: 'letter', align: 'center' },
							mix: { block: 'promo-cards', elem: 'media-tab-1' },
							content: 'Video'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mods: { size: 'xl', transform: 'uppercase', align: 'center' },
							mix: { block: 'promo-cards', elem: 'media-tab-2' },
							content: 'Text'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mods: { size: 'xl', transform: 'uppercase', align: 'center' },
							mix: { block: 'promo-cards', elem: 'media-tab-3' },
							content: 'Music'
						}
					}]
				}]
			},
			{
				elem: 'controls',
				content: [
				{
					tag: 'a',
					elem: 'controls-item',
					attrs: { href: '#' },
					content: {
						block: 'icon',
						mods: { 'arrow-up-2': 'xl-primary' },
						mix: { block: 'decorator', mods: { 'indent-r': 'xxl' } }
					}
				},
				{
					tag: 'a',
					elem: 'controls-item',
					attrs: { href: '#' },
					content: {
						block: 'icon',
						mods: { 'arrow-down-2': 'xl-primary' }
					}
				}]
			}]
		},
		{
			block: 'promo-cards',
			mods: { view: 'inverse', slide: 'first' },
			mix: { block: 'promo-cards', elem: 'apps-section' },
			content: [
			{
				elem: 'theme-name',
				content: 'Applications'
			},
			{
				elem: 'content',
				content: [
				{
					elem: 'card',
					mix: [{ elem: 'apps', elemMods: { type: 'recommendation' } }, { block: 'decorator', mods: { 'indent-b': 'xxxxl' } }],
					content: [
					{
						block: 'app',
						mods: { view: 'monument' },
						mix: [{ block: 'pt-card', mods: { view: 'inverse' } }, { block: 'promo-cards', elem: 'apps-recommendation-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'recommendation-preview',
							mix: [{ block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'xl' } }, { block: 'promo-cards', elem: 'apps-recommendation-photo' }],
							content: [
								{
									elem: 'recommendation-developer',
								}]
						},
						{
							elem: 'recommendation-info',
							mix: [{ block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'xl' } }, { block: 'promo-cards', elem: 'apps-recommendation-info' }],
							content: [
								{
									block: 'text',
									mods: { size: 'xxxl', view: 'inverse', align: 'center' },
									mix: { block: 'decorator', mods: { 'space-b': 'l' } },
									content: 'From our Bafta award winning hit'
								},
								{
									elem: 'recommendation-description',
									content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'inverse', align: 'center'  },
											mix: { block: 'decorator', mods: { 'space-b': 'xxxl' } },
											content: 'Enjoy beautiful levels filled with illusory, meditative puzzles'
										}]
								},
								{
									elem: 'recommendation-item',
									content: [
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-right': 's' },
													content: [
														{
															block: 'apps',
															elem: 'recommendation-logo',

														}]
												},
												{
													elem: 'block',
													content: [
														{
															block: 'text',
															mods: { size: 's', view: 'inverse' },
															content: 'Monument Vallet'
														},
														{
															elem: 'recommendation-game',
															block: 'apps',
															content: [
																{
																	block: 'text',
																	mods: { size: 's', view: 'inverse' },
																	content: 'by ustwo games'
																}]
														}]
												}]
										},
										{
											elem: 'recommendation-price',
											content: [
												{
													block: 'text',
													mods: { size: 's', view: 'inverse' },
													content: '$99'
												}]
										}]
								}]
						}]
					},
					{
						block: 'app',
						mix: [{ block: 'pt-card', mods: { view: 'inverse' } }, { block: 'promo-cards', elem: 'apps-good-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'good-preview',
							mix: [{ block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'xl' } }, { block: 'promo-cards', elem: 'apps-good-photo' }],
							content: [
							{
								elem: 'good-cover',
							}]
						},
						{
							elem: 'good-info',
							mix: [{ block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'xl' } }, { block: 'promo-cards', elem: 'apps-good-info' }],
							content: [
							{
								block: 'text',
								mods: { size: 'xxxl', view: 'inverse' },
								mix: { block: 'decorator', mods: { 'space-b': 'l' } },
								content: 'From our Bafta award winning hit'
							},
							{
								elem: 'good-description',
								content: [
								{
									block: 'text',
									mods: { size: 'm', view: 'inverse' },
									mix: { block: 'decorator', mods: { 'space-b': 'xxxl' } },
									content: 'Enjoy beautiful levels filled with illusory, meditative puzzles'
								}]
							},
							{
								elem: 'good-item',
								content: [
								{
									block: 'pt-icon-plus',
									mods: { 'vertical-align': 'center' },
									content: [
									{
										elem: 'icon',
										elemMods: { 'indent-right': 's' },
										content: [
										{
											block: 'apps',
											mods: { size: 's', view: 'inverse' },
											elem: 'good-logo',
										}]
									},
									{
										elem: 'block',
										content: [
										{
											block: 'text',
											content: 'Monument Vallet'
										},
										{
											elem: 'good-developer',
											block: 'apps',
											content: [
											{
												block: 'text',
												mods: { size: 's', view: 'inverse' },
												content: 'by ustwo games'
											}]
										}]
									}]
								},
								{
									elem: 'good-price',
									content: [
									{
										block: 'text',
										mods: { size: 's', view: 'inverse' },
										content: '$99'
									}]
								}]
							}]
						}]
					}]
				},
				{
					elem: 'description',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
					{
						elem: 'header',
						mix: [
							{ block: 'decorator', mods: { 'indent-b': 'xl' } },
							{ block: 'text', mods: { font: 'sans', weight: 'bold' }, }
						],
						content: 'Applications'
					},
					{
						block: 'text',
						mods: { size: 'xl', font: 'mono' },
						content: 'Exclusive member-only offers in the run up to Black Friday, plus the best of Nike direct to your inbox. Don\'t miss out'
					}]
				},
				{
					elem: 'list',
					content: [
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mods: { size: 'xl', transform: 'uppercase', view: 'letter', align: 'center' },
							mix: { block: 'promo-cards', elem: 'apps-tab-1' },
							content: 'Recommendation'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mods: { size: 'xl', transform: 'uppercase', align: 'center' },
							mix: { block: 'promo-cards', elem: 'apps-tab-2' },
							content: 'Good'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mods: { size: 'xl', transform: 'uppercase', align: 'center' },
							mix: { block: 'promo-cards', elem: 'apps-tab-3' },
							content: 'что-то'
						}
					}]
				}]
			},
			{
				elem: 'controls',
				content: [
				{
					tag: 'a',
					elem: 'controls-item',
					attrs: { href: '#' },
					content: {
						block: 'icon',
						mods: { 'arrow-up-2': 'xl-primary' },
						mix: { block: 'decorator', mods: { 'indent-r': 'xxl' } }
					}
				},
				{
					tag: 'a',
					elem: 'controls-item',
					attrs: { href: '#' },
					content: {
						block: 'icon',
						mods: { 'arrow-down-2': 'xl-primary' }
					}
				}]
			}]
		},
		{
			block: 'promo-cards',
			mods: { view: 'inverse' },
			content: [
			{
				elem: 'content',
				elemMods: { align: 'center' },
				content: [
				{
					block: 'pt-list',
					content: [
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://github.com/Miocene' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Julia Muzafarova'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'http://instagram.com/sntx_error' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Leonid Motorin'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://www.facebook.com/kirill.back' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Kirill Fedotov'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://twitter.com/fooontic_' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Vadim Matveev'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://sava.work' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Saveliy Bobov'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://www.facebook.com/sergibysergi' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Sergi Matveev'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://github.com/joshuan' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Evgeniy Shershnev'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://github.com/koloskof' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Misha Koloskof'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xl' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://github.com/bemdesign/bem-design' },
							block: 'promo-cards',
							elem: 'new-team-member',
							content: 'JOIN TO Our TEAM'
						}]
					}]
				}]
			},
			{
				elem: 'controls',
				content: [
				{
					tag: 'a',
					elem: 'controls-item',
					attrs: { href: '#' },
					content: {
						block: 'icon',
						mods: { 'arrow-up-2': 'xl-primary' },
						mix: { block: 'decorator', mods: { 'indent-r': 'xxl' } }
					}
				},
				{
					tag: 'a',
					elem: 'controls-item',
					attrs: { href: '#' },
					content: {
						block: 'icon',
						mods: { 'arrow-down-2': 'xl-primary' }
					}
				}]
			}]
		}]
	}]
};
