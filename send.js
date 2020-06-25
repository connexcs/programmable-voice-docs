/**
 * Send Component
 * @module cxSend
 * @namespace cxSend
 * @class
 * @hideconstructor
 * @classdesc A component to send Email & SMS
 */

function init (){

	/**
	 * Send Email
	 * 
	 * @function email
	 * @param {object} params - Parameters for Emailing
	 * @return {Promise}
	 *
	 * @example
	 * var params = {
	 *		to: "receiver@sender.com",
	 *		subject: "Message title",
	 * 		text: "Plaintext version of the message",
	 *		html: "<p>HTML version of the message</p>"
	 * };
	 * await email(params);
	 */
	async function email (params){
	}

	/**
	 * Send SMS
	 * 
	 * @function sms
	 * @param {string} params - Telephone Number
	 * @param {string} msg - SMS Message (160 Chars)
	 * @return {Promise}
	 *
	 * @example
	 * await sms('447000123456', 'Hello World!');
	 */
	async function sms (number, msg){
	}
}