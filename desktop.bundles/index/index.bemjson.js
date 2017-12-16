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
			mods: { view: 'ghost', slide: 'first' },
			content: [
			{
				elem: 'theme-name',
				// elemMods: { position: 'center' },
				content: 'Product'
			},
			{
				elem: 'content',
				content: [
				{
					elem: 'card',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
					{
						block: 'media',
						attrs: {
							style: 'width: 296px; height: 456px; border-radius: 12px;'
						},
						mix: { block: 'pt-card', mods: { view: 'inverse' } },
						content: [
						{
							elem: 'video',
							content: [
								{
									elem: 'play'
								}
							]
						},
						{
							elem: 'title',
							mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
							content: [
								{
									block: 'text',
									mods: { view: 'inverse', size: 'xxl' },
									content: 'Mad Lib Theater with John Cena'
								}
							]
						},
						{
							elem: 'footer',
							mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
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
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { view: 'inverse', size: 's' },
													content: 'The Tonight Show…'
												}
											]
										}
									]
								},
								{
									elem: 'view',
									content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 's' },
											content: '512K views'
										}
									]
								}
							]
						}]
					}]
				},
				{
					elem: 'description',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
					{
						elem: 'header',
						mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
						content: 'Media Content'
					},
					{
						block: 'text',
						attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
						mods: { size: 'xl' },
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
							content: 'Video'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mods: { size: 'xl', transform: 'uppercase', view: 'primary', align: 'center' },
							content: 'Text'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mods: { size: 'xl', transform: 'uppercase', view: 'primary', align: 'center' },
							content: 'Music'
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
		}]
	}]
};