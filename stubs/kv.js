/**
 * Key Value Store
 * @module cxKV
 * @namespace cxKV
 * @class
 * @hideconstructor
 * @classdesc Key Value Store, Globally Synced Atomic and Eventually Consistent
 * 
 * ## Example ##
 * ```
 * const {ko, kv, incr, keys, usage} = require('cxKV');
 * async function main(data) {
 *   await kv.set('hello', 'world');
 *   await ko.set('record', {hello: 'world'});
 *   let a = await kv.get('hello');
 *   let b = await ko.get('record');
 *   return {a, b};
 * }
 * ```
 */

function kv (){

	/**
	 * Get Value (Stored as a String)
	 * 
	 * @function get
	 * @memberof cxKV
	 * @param {string} params - Key
	 * @return {Promise}
	 *
	 * @example
	 * await kv.get('hello');
	 */
	async function get (key){
	}

	/**
	 * Set Value (Stored as a String)
	 * 
	 * @function set
	 * @memberof cxKV
	 * @param {string} params - Key
	 * @param {string} msg - Value
	 * @param {integer} ttl - Value
	 * @return {Promise}
	 *
	 * @example
	 * await kv.set('hello', 'world', 3600);
	 */
	async function set (number, msg, cache = 0){
	}
}

function ko (){
	/**
	 * Get Value (Stored as a Object)
	 * 
	 * @function get
	 * @memberof cxKV
	 * @param {string} params - Key
	 * @return {Promise}
	 *
	 * @example
	 * await ko.get('record');
	 */
	async function get (key){
	}

	/**
	 * Set Value (Stored as a String)
	 * 
	 * @function set
	 * @memberof cxKV
	 * @param {string} params - Key
	 * @param {object} msg - Value
	 * @param {integer} ttl - Value
	 * @return {Promise}
	 *
	 * @example
	 * await ko.set('record', {hello: 'world'});
	 */
	async function set (number, msg, cache = 0){
	}
}

/**
 * Increment
 * 
 * @function incr
 * @memberof cxKV
 * @param {string} params - Key
 * @param {integer} params - Increment by
 * @return {Promise}
 *
 * @example
 * var newValue = await incr('counter');
 */
async function incr (key, increment = 1){
}

/**
 * Key All Keys
 * 
 * @function keys
 * @memberof cxKV
 * @return {Promise}
 *
 * @example
 * var allKeys = await keys();
 */
async function keys (){
}

/**
 * Get Usage
 * 
 * @function usage
 * @memberof cxKV
 * @return {Promise}
 *
 * @example
 * var currentUsage = await usage();
 */
async function usage (){
}