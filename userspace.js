 /**
 * CRUD functions for Userspace Database
 * @module cxUserspace
 * @namespace cxUserspace
 * @class
 * @hideconstructor
 * @classdesc Create, Read, Update & Delete from the Userspace Database
 */

function init () {
	
	/**
	 * Create Record
	 * 
	 * @function create
	 * @memberof cxUserspace
	 * @param {string} area - Datastore Name
	 * @param {string|number} key - Row Id
	 * @param {object} data - Data Object / Row
	 * @return {Promise}
	 *
	 * @example
	 *     await create('myDatabase', 1, {value: 'Hello World!'})
	 */
	function create(area, key, data) { }

	/**
	 * Create Record
	 * 
	 * @function create
	 * @memberof cxUserspace
	 * @param {string} read - Datastore Name
	 * @param {string|number} key - Row Id
	 * @return {Promise<object>}
	 *
	 * @example
	 *     var data = await read('myDatabase', 1)
	 */
	self.read = function(area, key) {
	}

	/**
	 * Update Record
	 * 
	 * @function update
	 * @memberof cxUserspace
	 * @param {string} area - Datastore Name
	 * @param {string|number} key - Row Id
	 * @param {object} data - Data Object / Row
	 * @return {Promise}
	 *
	 * @example
	 *     await update('myDatabase', 1, {value: 'Hello World!'})
	 */
	self.update = function(area, key, data) {
	}

	/**
	 * Delete Record
	 * 
	 * @function delete
	 * @memberof cxUserspace
	 * @param {string} area - Datastore Name
	 * @param {string|number} key - Row Id
	 * @return {Promise}
	 *
	 * @example
	 *     await delete('myDatabase', 1)
	 */
	self.delete = function(area, key) {
		
	}
	return self;
}