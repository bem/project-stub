block('filter')(
	addJs()(true),
	content()(function() {
		return [{
			block: 'input',
			placeholder: 'Название',
			mix: {
				block: 'filter',
				elem: 'name'
			}
		},
		{
			block: 'switch',
			mods: {
				type: 'color'
			},
			mix: {
				block: 'filter',
				elem: 'color'
			}
		},
		{
			block: 'switch',
			mods: {
				type: 'size'
			},
			mix: {
				block: 'filter',
				elem: 'size'
			}
		}];
	})
);
