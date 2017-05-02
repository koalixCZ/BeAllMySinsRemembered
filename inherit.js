/**
 * Common prototypal inheritance.
 * @param {function} child
 * @param {function} base
 */
function inherit(child, base) {			// eslint-disable-line no-unused-vars
	"use strict";

	/**
	 * @constructor
	 */
	function Temp() {
		this.constructor = child;
	}

	Temp.prototype = base.prototype;
	child.prototype = new Temp();
}