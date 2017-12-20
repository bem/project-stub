block('demo').elem('nav')(
	content()(function(n, ctx) {
		return [
			{
				tag: 'a',
				elem: 'nav-control',
				attrs: { href: 'https://bitbucket-public.yamoney.ru/pages/~MEEQ/prototype/master/browse/bundles/desktop/demo/prototype/prototype.ru.html' },
				content: {
					elem: 'nav-icon',
					elemMods: { type: 'logo' }
				}
			},
			{
				elem: 'nav-item',
				attrs: { 'data-name': 'projects' },
				mix: [{ block: 'text', mods: { size: 'm', transform: 'uppercase', view: 'primary', spacing: 'xs' } }, { block: 'link', url: '#' }],
				content: 'Projects'
			},
			{
				elem: 'nav-item',
				attrs: { 'data-name': 'documents' },
				mix: [{ block: 'text', mods: { size: 'm', transform: 'uppercase', view: 'primary', spacing: 'xs' } }, { block: 'link', url: '#' }],
				content: 'Docs'
			},
			{
				elem: 'nav-item',
				attrs: { 'data-name': 'tools' },
				mix: [{ block: 'text', mods: { size: 'm', transform: 'uppercase', view: 'primary', spacing: 'xs' } }, { block: 'link', url: '#' }],
				content: 'Tools'
			},
			{
				elem: 'nav-chat'
			}
		]
	})
);
