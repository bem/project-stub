block('demo')(
	content()(function(n, ctx) {
		return [
			{
				elem: 'plug'
			},
			{
				elem: 'header'
			},
			{
				elem: 'menu'
			},
			ctx.content
		]
	})
);
