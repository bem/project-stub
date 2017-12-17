/**
 * @module icon-item
 */

modules.define(
	'icon-item',
	['i-bem-dom'],
	function(provide, bemDom) {

	/**
	 * @exports
	 * @class icon-item
	 * @bem
	 */
	provide(bemDom.declBlock(this.name, /** @lends icon-item.prototype */ {}));
});
