block('search')(
	content()(function(n, ctx) {
		return [
		{
			block: 'search2',
			input: {
				block: 'input',
				attrs: {style: 'width: 100%;'},
				mods: {size: 'ml', theme: 'normal',  pin: 'round'},
				placeholder: 'Поиск',
				content: {elem: 'control', attrs: {name: 'text'}}
			},
			button: {
				block: 'button2',
				mods: { size: 'ml', theme: 'action', type: 'submit', pin: 'clear-round'},
				text: 'Найти'
			}
		}]
	})
);
