/**
 * A class 5 real-time interface component
 * <pre><code>
 * async function main(data, ctx) {
 *	 await ctx.answer();
 *	 await ctx.tts('Call was successful. Hello World!');
 *	 await ctx.hangup();
 * }
 * </code></pre>
 * @module cxC5Ctx
 * @namespace ctx
 * @class
 * @hideconstructor
 * @classdesc A class 5 real-time interface component
 */

function ctx() {
	/**
	 * Get Variable
	 * 
	 * @function get
	 * @memberof ctx
	 * @param {string} Key
	 * @return {string} Value
	 *
	 * @example
	 * ctx.get('myVar')
	 */

	function get(key) {
	}

	/**
	 * Set Variable
	 * 
	 * @function set
	 * @memberof ctx
	 * @param {string} Key
	 * @param {string} Value
	 *
	 * @example
	 * ctx.set('myVar', 'myVal')
	 */
	 
	function set(key, value, skipWrite = false) {
	}

	/**
	 * Get / Set Header
	 * 
	 * @function header
	 * @memberof ctx
	 * @param {string} Key
	 * @param {string} Value
	 *
	 * @example
	 *     header('X-My-Header', 'myVal')
	 *
	 * @example
	 * var value = ctx.header('X-My-Header')
	 */
	function header(key, value) {
	}

	/**
	 * Answer Call
	 * 
	 * @function answer
	 * @memberof ctx
	 * @return {Promise}
	 *
	 * @example
	 * await ctx.answer()
	 */
	async function answer() {
	}

	/**
	 * Text-To-Speech
	 * 
	 * @function tts
	 * @memberof ctx
	 * @param {string} text
	 * @return {Promise}
	 *
	 * @example
	 * ctx.await tts('Thank you for calling.')
	 */
	async function tts (text) {
	}

	/**
	 * Echo
	 * 
	 * @function echo
	 * @memberof ctx
	 * @param {number} [delay] - Value in milliseconds
	 * @return {Promise}
	 *
	 * @example
	 * await ctx.echo()
	 *
	 * @example
	 * await ctx.echo(500)
	 */
	async function echo (delay = 0) {
	}
		
	/**
	 * Interactive Voice Response - IVR
	 * 
	 * @function ivr
	 * @memberof ctx
	 * @param {string} file - Audio Filename
	 * @param {number} timeout - How many seconds to wait (after audio is completed)
	 * @param {number} min - Minimum Digits to be captured
	 * @param {number} max - Maximum Digits to be captured
	 * @return {Promise<Object>}
	 *
	 * @example
	 * var {status, value} = await ctx.ivr('user/myGreeting.wav', 1, 5, 10)
	 *
	 * @example
	 * var {status, value} = await ctx.ivr('ivr/ivr-aint_nobody_got_time_for_that.wav', 10, 10, 5)
	 */
	async function ivr (file, timeout, min, max, terminators, opts = {}) {
	}

	/**
	 * Play
	 * 
	 * @function play
	 * @memberof ctx
	 * @param {string} file
	 * @return {Promise}
	 *
	 * @example
	 * await ctx.play('user/myGreeting.wav')
	 *
	 * @example
	 * await ctx.play('ivr/ivr-aint_nobody_got_time_for_that.wav')
	 */
	async function play (file) {
	}

	async function destination (app, data) {
	}

	/**
	 * Hang Up
	 * 
	 * @function hangup
	 * @memberof ctx
	 * @return {Promise}
	 *
	 * @example
	 * await ctx.hangup()
	 */
	async function hangup () {
	}	
} 
