/**
 * @module demo__content
 */

modules.define(
	'demo__content',
	['i-bem-dom'],
	function(provide, bemDom) {

	/**
	 * @exports
	 * @class demo__content
	 * @bem
	 */
	provide(bemDom.declBlock(this.name, /** @lends demo__content.prototype */ {}));
});
