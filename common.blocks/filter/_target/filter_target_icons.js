/**
 * @module filter
 */

modules.define(
	'filter',
	['icon-list', 'icon-item'],
	function(provide, IconList, IconItem, Filter) {

	/**
	 * @exports
	 * @class filter
	 * @bem
	 */
	provide(Filter.declMod({ modName : 'target', modVal : 'icons' }, /** @lends filter.prototype */ {
		onSetMod : {
			'js' : {
				'inited' : function() {
					this.__base.apply(this, arguments);
				}
			}
		},

		/**
		 * Метод возвращающий класс контейнера искомых блоков
		 */
		getContainerClass: function() {
			return IconList;
		},

		/**
		 * Метод возвращающий класс искомого блока
		 */
		getItemClass: function() {
			return IconItem;
		},
	}));
});
