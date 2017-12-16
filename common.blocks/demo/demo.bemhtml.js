block('demo')(
	content()(function(n, ctx) {
		return [
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
