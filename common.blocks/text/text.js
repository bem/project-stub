/**
 * @module text
 */

modules.define(
	'text',
	['i-bem-dom'],
	function(provide, bemDom) {

	/**
	 * @exports
	 * @class text
	 * @bem
	 */
	provide(bemDom.declBlock(this.name, /** @lends text.prototype */ {}));
});
