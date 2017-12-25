block('demo')(
	content()(function(n, ctx) {
		return [
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
