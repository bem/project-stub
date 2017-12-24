module.exports = {
  block: 'page',
  title: 'BEM Layouts',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'offer.min.css' },
      { elem: 'css', url: '../../assets/ibm-type/css/ibm-type.css' },
      { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
  ],
  mix: {
      block: 'theme',
      mods: { color: 'default', space: 'default', size: 'default' }
  },
  attrs: {
    style: 'background: #F5F5F5;'
  },
  scripts: [{ elem: 'js', url: 'offer.min.js' }],
  mods: { theme: 'islands' },
  content: [

    {
			block: 'promo-cards',
			mix: { block: 'promo-cards', elem: 'offer-section' },
			mods: { view: 'ghost', slide: 'first' },
			content: [
			{
				elem: 'theme-name',
				elemMods: { slide: 'first' },
				content: 'goods'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'second' },
				content: 'brand'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'third' },
				content: 'service'
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
							content: [
								{
									elem: 'goods-header',
									content: [
										{
											elem: 'goods-background',
											mix: { block: 'promo-cards', elem: 'offer-goods-background'}
										},
										{
											elem: 'goods-price',
											mix: [
												{ block: 'promo-cards', elem: 'offer-goods-price'},
												{ block: 'text', mods: {font: 'serif', style: 'italic', weight: 'bold'} }
											],
											content: '$299'
										}
									]
								},
                {
                  elem: 'goods-item',
                  mix: [
                    { block: 'pt-card', elem: 'header' },
                    { block: 'promo-cards', elem: 'offer-goods-item'}
                  ],
                  content: [
                    {
                      elem: 'goods-image-wrapper',
                      mix: { block: 'pt-card', elem: 'image' },
                      content: [
                        {
                          block: 'image',
                          url: '../../assets/i/offer-goods-image.png'
                        }
                      ]
                    }
                  ]
                },
								{
									elem: 'goods-info',
									mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl', 'space-h': 'l', 'space-t': 'xxs' } },
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
                  elem: 'brand-content',
                  mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' } },
                  content: [
                    {
  										elem: 'brand-image-wrapper',
  										mix: [
                        { block: 'promo-cards', elem: 'offer-brand-image' },
                        { block: 'pt-card', elem: 'image' }
                      ],
                      content: [
                        {
													block: 'image',
                          url: '../../assets/i/offer-brand-image.png'
                        }
                      ]
										},
                    {
											block: 'text',
											mods: { view: 'primary', size: 'xxl', align: 'center', transform: 'uppercase', weight: 'bold', spacing: 's' },
											mix: [
                        { block: 'promo-cards', elem: 'offer-brand-title' }, { block: 'decorator', mods: { 'indent-b': 'xl' } },
                        { block: 'decorator', mods: { 'indent-t': 's'} }
                      ],
											content: 'Ape shall never kill ape'
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
							mix: [
								{ block: 'pt-card', mods: { view: 'inverse' } },
								{ block: 'promo-cards', elem: 'hover' },
								{ block: 'promo-cards', elem: 'offer-service' },
							],
							content: [
                {
                  elem: 'service-image-wrapper',
                  mix: [
                    { block: 'pt-card', elem: 'image', elemMods: { size: 'cover' } },
                    { block: 'promo-cards', elem: 'offer-service-background'},
                  ],
                  content: [
                    {
                      block: 'image',
                      mix: { block: 'promo-cards', elem: 'offer-service-photo'},
                      url: '../../assets/i/offer-service-image.png'
                    }
                  ]
                },
								// {
								// 	elem: 'background-wrapper',
								// 	mix: { block: 'promo-cards', elem: 'offer-service-background'},
								// 	content: {
								// 		elem: 'bg-photo',
								// 		mix: { block: 'promo-cards', elem: 'offer-service-photo'}
								// 	}
								// },
								{
									elem: 'title',
									mix: [
										{ block: 'pt-card', elem: 'header', elemMods: { 'space-v': 'xxl' } },
										{ block: 'promo-cards', elem: 'offer-service-title'},
									],
									content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xl', font: 'serif', weight: 'bold', transform: 'uppercase', align: 'center' },
											content: 'Brabus'
										}
									]
								},
								{
									elem: 'service-info',
									mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
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
													mods: { view: 'inverse', size: 's', weight: 'semibold' },
													content: 'from'
												},
												{
													block: 'text',
													mods: { view: 'inverse', size: 'xxxl', weight: 'semibold' },
													content: '$1200'
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
					elemMods: { slide: 'first' },
					content: [
					{
						elem: 'header',
						mix: [
							{ block: 'decorator', mods: { 'indent-b': 'xl' } },
							{ block: 'text', mods: { font: 'sans', weight: 'bold' }, }
						],
						content: 'Goods'
					},
					{
						block: 'text',
						mods: { size: 'xl', font: 'mono' },
						content: 'Exclusive member-only offers in the run up to Black Friday, plus the best of Nike direct to your inbox. Don\'t miss out'
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'second' },
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
					elem: 'description',
					elemMods: { slide: 'third' },
					content: [
					{
						elem: 'header',
						mix: [
							{ block: 'decorator', mods: { 'indent-b': 'xl' } },
							{ block: 'text', mods: { font: 'sans', weight: 'bold' }, }
						],
						content: 'Service'
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
			// {
			// 	elem: 'controls',
			// 	content: [
			// 	{
			// 		block: 'icon',
			// 		mods: { 'arrow-up-2': 'xl-primary' },
			// 		mix: { block: 'decorator', mods: { 'indent-r': 'xxl' } }
			// 	},
			// 	{
			// 		block: 'icon',
			// 		mods: { 'arrow-down-2': 'xl-primary' }
			// 	}]
			// },
			]
		},

  /*
    {
      block: 'offer',
      attrs: { style: 'height: 456px; margin: 100px auto;' },
      mix: { block: 'pt-card', mods: { view: 'default' } },
      content: [
        {
          elem: 'show',
          mix: { block: 'pt-card', elem: 'header' },
          content: [
            {
              elem: 'background'
            },
            {
              elem: 'price-centralized',
              content: [
                {
                  elem: 'goods-price',
                  content: '$299'
                }
              ]
            },
            {
              elem: 'item'
            }
          ]
        },
        {
          elem: 'goods-info',
          mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-v': 'xxl' } },
          content: [
            {
              block: 'text',
              mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
              mods: { view: 'primary', size: 'xl', align: 'center', transform: 'uppercase', spacing: 's' },
              content: 'Nike Gyakusou Gaiter Boot'
            },
            {
              block: 'text',
              mods: { view: 'primary', size: 's', align: 'center' },
              content: 'You have the goal. We have a gift'
            }
          ]
        },
        {
          elem: 'action',
          mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-v': 'xl' } },
          content: [
            {
              block: 'text',
              mods: { view: 'secondary', size: 'm', align: 'center', weight: 'semibold' },
              content: 'Shop Now'
            },
            {
              elem: 'border-bottom'
            }
          ]
        }
      ]
    },


    {
      block: 'offer',
      mods: { view: 'brabus'},
      attrs: { style: 'height: 456px; margin: 100px auto;' },
      mix: { block: 'pt-card', mods: { view: 'inverse' } },
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
          mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-v': 'xxl' } },
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
              mix: { block: 'decorator', mods: { 'indent-b': 'xl'} },
              mods: { view: 'inverse', size: 'm', weight: 'semibold' },
              content: 'Luxury and comfort never comprised. The BRABUS GLE 700 Coupe will lead to an unforgettable journey'
            },
            {
              elem: 'price',
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

    {
      block: 'offer',
      attrs: { style: 'height: 456px; margin: 100px auto;' },
      mix: { block: 'pt-card', mods: { view: 'default' } },
      content: [
        {
          elem: 'brand-show',
          mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'xl' } },
          content: [
            {
              elem: 'brand-image-wrapper',
              content: [
                {
                  elem: 'brand-image'
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
              mods: { view: 'primary', size: 'xxl', align: 'center', transform: 'uppercase', spacing: 's' },
              content: 'Magic For All'
            },
            {
              elem: 'brand-logo',
              mix: { block: 'decorator', mods: { 'indent-t': 'xl' } }
            }
          ]
        },
        {
          elem: 'brand-action',
          mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 's' } },
          content: [
            {
              block: 'text',
              mods: { view: 'primary', size: 'm', align: 'center', weight: 'bold' },
              content: 'Learn More'
            }
          ]
        }
      ]
    }
  */
  ]
}
