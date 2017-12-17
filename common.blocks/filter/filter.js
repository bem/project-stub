/**
 * @module filter
 */

modules.define(
	'filter',
	['i-bem-dom', 'jquery', 'input', 'demo__content', 'text'],
	function(provide, bemDom, $, Input, DemoContent, Text) {

	/**
	 * @exports
	 * @class filter
	 * @bem
	 */
	provide(bemDom.declBlock(this.name, /** @lends filter.prototype */ {
		onSetMod : {
			'js' : {
				'inited' : function() {
					var blockFilter = this;

					this.allItems = this.getAllItems();

					this.elementName = this._elem('name');
					this.blockInput = this.elementName.findMixedBlock(Input);
					this.controlInput = this.blockInput._elem('control');

					this.controlInput._domEvents().on('keyup', function() {
						var value = this.domElem.val();

						blockFilter.getItemsBySubstring(value);
					});
					
				}
			}
		},

		/**
		 * Метод возвращающий класс контейнера искомых блоков
		 */
		getContainerClass: function() {},

		/**
		 * Метод возвращающий класс искомого блока
		 */
		getItemClass: function() {},

		/**
		 * Метод возвращающий все блоки имеющиеся в целевом контейнере
		 *
		 * @param  {Object} container Класс блока-контейнера
		 * @param  {Object} item Класс искомых блоков
		 * @return {Object[]} искомые блоки
		 */
		getAllItems: function(container, item) {
			this.Container = this.getContainerClass();
			this.Item = this.getItemClass();

			if (this.Container && this.Item) {
				this.demoContent = this.findParentBlock(DemoContent);
				this.container = this.demoContent.findChildBlock(this.Container)

				return this.container.findChildBlocks(this.Item);
			}
		},

		getItemsBySubstring: function(substring) {
			this.allItems.forEach(function(item) {
				var itemNameElem = item._elem('name');
				var itemNameBlock = itemNameElem.findChildBlock(Text);
				var itemNameText = itemNameBlock.domElem.text().toLowerCase();
				var includes = itemNameText.includes(substring.toLowerCase());

				if (!includes && substring) {
					item.setMod('hidden', 'yes');
				} else {
					item.delMod('hidden');
				}
			});
		},


	}));
});
