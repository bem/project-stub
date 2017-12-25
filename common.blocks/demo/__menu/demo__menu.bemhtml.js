block('demo').elem('menu')(
	content()(function(n, ctx) {
		return [
		{
			elem: 'menu-sections-col',
			attrs: { 'data-name': 'tools', style: 'display: none;' },
			content: [
			{
				elem: 'menu-section',
				// attrs: { 'data-name': 'tools', 'style': 'display: none;' },
				content: [
				{
					elem: 'menu-section-name',
					content: 'Tools'
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
								'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/themes/themes.html'
							},
							mix: { block: 'demo', elem: 'menu-item-link' },
							content: 'Themes'
						},
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: 'Russian version'
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@miocene, @koloskof'
						}]
					}]
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
								'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/typo/typo.html'
							},
							mix: { block: 'demo', elem: 'menu-item-link' },
							content: 'Typography'
						},
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: 'Russian version'
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@koloskof @kirillback @miocene'
						}]
					}]
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
								'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/icons/icons.html'
							},
							mix: { block: 'demo', elem: 'menu-item-link' },
							content: 'Icons'
						},
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: 'Russian version'
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@kirillback, @miocene'
						}]
					}]
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
								'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/patterns/patterns.html'
							},
							mix: { block: 'demo', elem: 'menu-item-link' },
							content: 'Patterns'
						},
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: 'Russian version'
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@koloskof'
						}]
					}]
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
								'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/layouts/layouts.html'
							},
							mix: { block: 'demo', elem: 'menu-item-link' },
							content: 'Grids'
						},
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: 'Russian version'
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@kirillback @codensleep'
						}]
					}]
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
								'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/animations/animations.html'
							},
							mix: { block: 'demo', elem: 'menu-item-link' },
							content: 'Animations'
						},
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: 'Russian version'
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@miocene'
						}]
					}]
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
								'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/illustations/illustations.html'
							},
							mix: { block: 'demo', elem: 'menu-item-link' },
							content: 'Illustrations'
						},
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: 'Russian version'
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@lerazhelezova'
						}]
					}]
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
								'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/vectors/vectors.html'
							},
							mix: { block: 'demo', elem: 'menu-item-link' },
							content: 'Vectors'
						},
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: 'Russian version'
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@dandycolor, @miocene'
						}]
					}]
				}]
			}]
		},
		{
			elem: 'menu-sections-col',
			attrs: { 'data-name': 'documents', style: 'display: none;' },
			content: [
			{
				elem: 'menu-section',
				// attrs: { 'data-name': 'documents', 'style': 'display: none;' },
				content: [
				{
					elem: 'menu-section-name',
					content: 'Docs'
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
								'href': 'https://habrahabr.ru/company/yamoney/blog/341028/'
							},
							mix: { block: 'demo', elem: 'menu-item-link' },
							content: 'Prototyping process'
						},
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: 'Russian version'
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@koloskof'
						}]
					}]
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
								'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/opensource/opensource.html'
							},
							mix: { block: 'demo', elem: 'menu-item-link' },
							content: 'Join BEM Design'
						},
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: 'Russian version'
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@miocene @koloskof'
						}]
					}]
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
								'href': 'https://bemdesign.github.io/bem-design/desktop.bundles/article-icons/article-icons.html'
							},
							mix: { block: 'demo', elem: 'menu-item-link' },
							content: 'How to design icons'
						},
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: 'Russian version'
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@kirillback'
						}]
					}]
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
								'href': 'https://@koloskof.github.io/bemxjstdemo/'
							},
							mix: { block: 'demo', elem: 'menu-item-link' },
							content: 'Templates'
						},
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: 'Документация'
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@miripiruni'
						}]
					}]
				}]
			}]
		},
		{
			elem: 'menu-sections-col',
			attrs: { 'data-name': 'projects', style: 'display: none;' },
			content: [
			{
				elem: 'menu-section',
				// attrs: { 'data-name': 'projects', 'style': 'display: none;' },
				content: [
				{
					elem: 'menu-section-name',
					content: 'Projects'
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
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@codensleep'
						}]
					}]
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
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@koloskof'
						}]
					}]
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
						}]
					},
					{
						elem: 'menu-item-row',
						content: [
						{
							block: 'text',
							mods: { 'view': 'inverse', 'size': 'm' },
							content: '@miocene'
						}]
					}]
				}]
			}]
		}];
	})
);