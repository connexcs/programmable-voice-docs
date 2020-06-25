/**
 * Send Component
 * @module cxSend
 * @namespace cxSend
 * @class
 * @hideconstructor
 * @classdesc A component to send Email & SMS
 * 
 * ## Example ##
 * ```
 * const cxSend = require('cxSend');
 * async function main(data) {
 *   let params = {
 *    to: "receiver@sender.com",
 *    subject: "Message title",
 *    text: "Plaintext version of the message",
 *    html: "<p>HTML version of the message</p>"
 *   };
 *   await cxSend.email(params);
 *   return 'Email Sent';
 * }
 * ```
 */

function send (){

	/**
	 * Send Email
	 * 
	 * @function email
	 * @memberof cxSend
	 * @param {object} params - Parameters for Emailing
	 * @return {Promise}
	 *
	 * @example
	 * var params = {
	 *  to: "receiver@sender.com",
	 *  subject: "Message title",
	 *  text: "Plaintext version of the message",
	 *  html: "<p>HTML version of the message</p>"
	 * };
	 * await cxSend.email(params);
	 */
	async function email (params){
	}

	/**
	 * Send SMS
	 * 
	 * @function sms
	 * @memberof cxSend
	 * @param {string} params - Telephone Number
	 * @param {string} msg - SMS Message (160 Chars)
	 * @return {Promise}
	 *
	 * @example
	 * await cxSend.sms('447000123456', 'Hello World!');
	 */
	async function sms (number, msg){
	}
}