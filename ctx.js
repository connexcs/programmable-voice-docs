/**
 * A class 5 real-time interface component
 * @constructor 
 */

function () {
	/**
	 * Get Variable
	 * 
	 * @function get
	 * @param {string} Key
	 * @return {string} Value
	 *
	 * @example
	 *     get('myVar')
	 */

	function get(key) {
	}

	/**
	 * Set Variable
	 * 
	 * @function set
	 * @param {string} Key
	 * @param {string} Value
	 *
	 * @example
	 *     set('myVar', 'myVal')
	 */
	 
	function set(key, value, skipWrite = false) {
	}

	/**
	 * Get / Set Header
	 * 
	 * @function header
	 * @param {string} Key
	 * @param {string} Value
	 *
	 * @example
	 *     header('X-My-Header', 'myVal')
	 *
	 * @example
	 *     var value = header('X-My-Header')
	 */
	function header(key, value) {
	}

	/**
	 * Answer Call
	 * 
	 * @function answer
	 * @return {Promise}
	 *
	 * @example
	 *     await answer()
	 */
	async function answer() {
	}

	/**
	 * Text-To-Speech
	 * 
	 * @function tts
	 * @param {string} text
	 * @return {Promise}
	 *
	 * @example
	 *     await tts('Thank you for calling.')
	 */
	async function tts (text) {
	}

	/**
	 * Echo
	 * 
	 * @function echo
	 * @param {number} [delay] - Value in milliseconds
	 * @return {Promise}
	 *
	 * @example
	 *     await echo()
	 *
	 * @example
	 *     await echo(500)
	 */
	async function echo (delay = 0) {
	}
		
	/**
	 * Interactive Voice Response - IVR
	 * 
	 * @function ivr
	 * @param {string} file - Audio Filename
	 * @param {number} timeout - How many seconds to wait (after audio is completed)
	 * @param {number} min - Minimum Digits to be captured
	 * @param {number} max - Maximum Digits to be captured
	 * @return {Promise<Object>}
	 *
	 * @example
	 *     var {status, value} = await ivr('user/myGreeting.wav', 1, 5, 10)
	 *
	 * @example
	 *     var {status, value} = await ivr('ivr/ivr-aint_nobody_got_time_for_that.wav', 10, 10, 5)
	 */
	async function ivr (file, timeout, min, max, terminators, opts = {}) {
	}

	/**
	 * Play
	 * 
	 * @function play
	 * @param {string} file
	 * @return {Promise}
	 *
	 * @example
	 *     await play('user/myGreeting.wav')
	 *
	 * @example
	 *     await play('ivr/ivr-aint_nobody_got_time_for_that.wav')
	 */
	async function play (file) {
	}

	async function destination (app, data) {
	}

	/**
	 * Hang Up
	 * 
	 * @function hangup
	 * @return {Promise}
	 *
	 * @example
	 *     await hangup()
	 */
	async function hangup () {
	}	
} 
