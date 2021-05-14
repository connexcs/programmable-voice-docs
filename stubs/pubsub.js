/**
 * Publish / Subscribe
 * @module cxPubSub
 * @namespace cxPubSub
 * @class
 * @hideconstructor
 * @classdesc Global Publish / Subscribe messaging bus
 * 
 * ## Example ##
 * ```
 * const {publish, subscribe} = require('cxPubSub');
 * async function main(data) {
 *   subscribe('myEvent', (data) => {
 *     console.log(data);
 *   })
 *   publish('myEvent', {my: 'data'})
 *   return {a, b};
 * }
 * ```
 */

function kv (){

	/**
	 * Publish
	 * 
	 * @function publish
	 * @memberof cxPubSub
	 * @param {string} params - Event Name
	 * @param {object} params - Payload
	 * @return {Promise}
	 *
	 * @example
	 * publish('myEvent', {my: 'data'});
	 */
	async function publish (key){
	}

	/**
	 * Subscribe
	 * 
	 * @function subscribe
	 * @memberof cxPubSub
	 * @param {string} params - Event Name
	 * @param {callback} callback - Callback Function
	 * @return {Promise}
	 *
	 * @example
	 * subscribe('myEvent', (data) => {
	 *   console.log(data);
	 * });
	 */
	async function subscribe (number, msg){
	}
}