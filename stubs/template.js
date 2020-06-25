/**
 * Template Builder
 * @module cxTemplate
 * @namespace cxTemplate
 * @class
 * @hideconstructor
 * @classdesc Use templates in the system and compile them with your variables
 * 
 * ## Example ##
 * ```
 * const cxTemplate = require('cxTemplate');
 * async function main(data) {
 *   let { html } = await cxTemplate.compile('myCustomPage', {name: 'Joe Blogs'});
 *   return html;
 * }
 * ```
 */

function template () {

	/**
	 * Build Template from Variables
	 * 
	 * @function compile
	 * @memberof cxTemplate
	 * @param {string} name - Template Name
	 * @param {object} vars - Variables to inject into template
	 * @return {Promise}
	 *
	 * @example
	 * var { text, html, sms, subject } = await cxTemplate.compile('alert', {name: 'Joe Blogs'});
	 */
	function compile (name, vars) { }
}