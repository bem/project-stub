block('demo')(
	content()(function(n, ctx) {
		return [
			{
				elem: 'header'
			},
			{
				elem: 'menu',
				section: ctx.params.menusection,
				active: ctx.params.pagename
			},
			ctx.content
		]
	})
);
