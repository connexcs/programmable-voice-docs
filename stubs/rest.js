 /**
 * ConnexCS API
 * @module cxRest
 * @namespace cxRest
 * @class
 * @hideconstructor
 * @classdesc Communicate back into ConnexCS through the [API](https://api-docs.connexcs.com/)
 * 
 * ## Example ##
 * ```
 * const cxRest = require('cxRest');
 * const api = cxRest.auth("api@yourdomain.com"); 
 * 
 * async function main(data) {
 *   var customers = await api.get('customer');
 *   // Do something with result
 *   return customers
 * }
 * ```
 */

function rest () {
	
	/**
	 * Create Record
	 * 
	 * @function create
	 * @memberof cxRest
	 * @param {string} area - Datastore Name
	 * @param {string|number} key - Row Id
	 * @param {object} data - Data Object / Row
	 * @return {Promise}
	 *
	 * @example
	 * await rest.create('customer', {name: 'Joe Blogs'}})
	 */
	async function create(area, key, data) { }

	/**
	 * Create Record
	 * 
	 * @function read
	 * @memberof cxRest
	 * @param {string} read - Datastore Name
	 * @param {string|number} key - Row Id
	 * @return {Promise<object>}
	 *
	 * @example
	 * var data = await rest.read('customer/1234')
	 */
	async function read (area, key) { }

	/**
	 * Update Record
	 * 
	 * @function update
	 * @memberof cxRest
	 * @param {string} area - Datastore Name
	 * @param {string|number} key - Row Id
	 * @param {object} data - Data Object / Row
	 * @return {Promise}
	 *
	 * @example
	 * await rest.update('customer/1234', {name: 'Alice'})
	 */
	async function update(area, key, data) { }

	/**
	 * Delete Record
	 * 
	 * @function delete
	 * @memberof cxRest
	 * @param {string} area - Datastore Name
	 * @param {string|number} key - Row Id
	 * @return {Promise}
	 *
	 * @example
	 * await rest.delete('customer/1234')
	 */
	self.delete = async function (area, key) {	}
	return self;
}
