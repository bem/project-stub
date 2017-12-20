block('demo').elem('nav')(
	content()(function(n, ctx) {
		return [
			{
				elem: 'nav-item',
				attrs: { 'data-name': 'tools' },
				mix: [{ block: 'text', mods: { size: 'm', transform: 'uppercase', view: 'primary', spacing: 'xs' } }, { block: 'link', url: '#' }],
				content: 'Tools'
			},
			{
				elem: 'nav-item',
				attrs: { 'data-name': 'documents' },
				mix: [{ block: 'text', mods: { size: 'm', transform: 'uppercase', view: 'primary', spacing: 'xs' } }, { block: 'link', url: '#' }],
				content: 'Docs'
			},
			{
				elem: 'nav-item',
				attrs: { 'data-name': 'projects' },
				mix: [{ block: 'text', mods: { size: 'm', transform: 'uppercase', view: 'primary', spacing: 'xs' } }, { block: 'link', url: '#' }],
				content: 'projects'
			},
			{
				elem: 'nav-chat'
			}
		]
	})
);
