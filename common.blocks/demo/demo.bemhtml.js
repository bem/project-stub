block('demo')(
	content()(function(n, ctx) {
		return [
			{
				tag: 'a',
				attrs: { 'href': 'http://bem.design' },
				elem: 'logo',
				content: {
					elem: 'logo-icon',
					elemMods: { type: 'logo' }
				}
			},
			{
				elem: 'plug'
			},
			{
				elem: 'menu'
			},
			{
				elem: 'nav'
			},
			ctx.content
		]
	})
);
