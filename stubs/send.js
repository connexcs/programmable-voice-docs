/**
 * Send Component
 * @module cxSend
 * @namespace cxSend
 * @class
 * @hideconstructor
 * @classdesc A component to send Email & SMS
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
	 * const cxSend = require('cxSend');
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
	 * const cxSend = require('cxSend');
	 * await cxSend.sms('447000123456', 'Hello World!');
	 */
	async function sms (number, msg){
	}
}