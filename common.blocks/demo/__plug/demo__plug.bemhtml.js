block('demo').elem('plug')(
	content()(function(n, ctx) {
		return [
		{
			elem: 'plug-header',
			content: [
			{
				elem: 'plug-bem-logo',
				content: {
					html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50"><g fill-rule="evenodd"><rect width="49" height="23"/><rect width="49" height="14" x="54"/><rect width="14" height="50" x="108"/><rect width="14" height="50" x="126"/><rect width="14" height="50" x="144"/><rect width="49" height="14" x="54" y="18"/><rect width="49" height="14" x="54" y="36"/><rect width="49" height="23" y="27"/></g></svg>'
				}
			},
			{
				elem: 'plug-slogan',
				tag: 'h1',
				content: 'Масштабируемая дизайн-система на основе БЭМ'
			}]
		},
		{
			elem: 'plug-content',
			content: [
			{
				elem: 'plug-description',
				tag: 'p',
				content: 'Для использования системы зайдите на сайт с компьютера. Почитать документацию можно на Github. Задать вопросы можно в соцсетях'
			},
			{
				elem: 'plug-action',
				content: [
				{
					elem: 'plug-button',
					tag: 'a',
					attrs: { 'href': 'https://github.com/bemdesign'},
					content: 'Репозиторий на Github'
				},
				{
					elem: 'plug-soclink',
					elemMods: { icon: 'telegram'},
					tag: 'a',
					attrs: { 'href': 'https://t.me/dotmus'},
					content: 'Телеграм'
				},
				{
					elem: 'plug-soclink',
					elemMods: { icon: 'twitter'},
					tag: 'a',
					attrs: { 'href': 'https://twitter.com/bem_design'},
					content: 'Твиттер'
				}]
			}]
		}]
	})
);