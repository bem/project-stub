block('demo').elem('nav')(
	content()(function(n, ctx) {
		return [
			{
				elem: 'nav-item',
				attrs: { 'data-name': 'tools' },
				mix: [{ block: 'text', mods: { size: 'xl', transform: 'uppercase', view: 'primary', spacing: 'xs', font: 'mono' } }, { block: 'link', url: '#' }],
				content: 'Tools'
			},
			{
				elem: 'nav-item',
				attrs: { 'data-name': 'documents' },
				mix: [{ block: 'text', mods: { size: 'xl', transform: 'uppercase', view: 'primary', spacing: 'xs', font: 'mono'  } }, { block: 'link', url: '#' }],
				content: 'Docs'
			},
			{
				elem: 'nav-item',
				attrs: { 'data-name': 'projects' },
				mix: [{ block: 'text', mods: { size: 'xl', transform: 'uppercase', view: 'primary', spacing: 'xs', font: 'mono' } }, { block: 'link', url: '#' }],
				content: 'Projects'
			},
			{
				elem: 'nav-chat',
				tag: 'a',
				attrs: { href: 'https://t.me/bemdesign', target: '_blank' },
			}
		]
	})
);
