/**
 * Call Origination
 * @module cxOriginate
 * @namespace cxOriginate
 * @class
 * @hideconstructor
 * @classdesc Originate outbound calls from ConnexCS
 * 
 */

function originate (){
	/**
	 * Originate
	 * 
	 * @function originate
	 * @memberof cxOriginate
	 * @param {number} companyId - Company ID which originates the call
	 * @param {string} serverAlias - Server to send the call through
	 * @param {string} destination - Destination Phone Number
	 * @param {string} cli - CLI to send
	 * @param {string} extension - Internal Destination (Leg B)
	 * @return {Promise}
	 *
	 * @example
	 * await originate.originate(1234, 'myServerName', '123456789', '1122334455', '160');
	 */
	async function originate (companyId, alias, destination, cli, extension){

	}
}