/**
 * @module icon-list
 */

modules.define(
	'icon-list',
	['i-bem-dom'],
	function(provide, bemDom) {

	/**
	 * @exports
	 * @class icon-list
	 * @bem
	 */
	provide(bemDom.declBlock(this.name, /** @lends icon-list.prototype */ {}));
});
