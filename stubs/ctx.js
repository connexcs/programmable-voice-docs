/**
 * A class 5 real-time interface component
 * 
 * @module cxC5Ctx
 * @namespace ctx
 * @class
 * @hideconstructor
 * @classdesc A class 5 real-time interface
 * 
 * ## Example ##
 * ```
 * async function main(data, ctx) {
 *	 await ctx.answer();
 *	 await ctx.tts('Call was successful. Hello World!');
 *	 await ctx.hangup();
 * }
 * ```
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
	 * Log Information
	 * 
	 * @function log
	 * @memberof ctx
	 * @param {string} Text
	 * @return null
	 *
	 * @example
	 * ctx.log('Hello World!')
	 */

	function log(text) {
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
	 * @param {string} terminators - Characters to end input such as #
	 * @param {Object} opts - Additional Options
	 * @param {number} opts.tries - How many attempts to allow
	 * @param {string} opts.invalid_file - Invalid file
	 * @param {string} opts.regexp - Regular Expression to validate input
	 * @param {string} opts.transfer_on_failure - Destination to transfer to for failure
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

	/**
	 * Bridge
	 * 
	 * @function bridge
	 * @memberof ctx
	 * @param {string} destination
	 * @return {Promise}
	 * @description Bridges the call with another destination, returns a promise when complete containing the bleg context.
	 *
	 * @example
	 * await ctx.bridge('160')
	 *
	 * @example
	 * await ctx.bridge('441234567890')
	 */
	async function bridge (app, destination) {
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
	
	/**
	 * Block DTMF
	 * 
	 * @function blockDtmf
	 * @memberof ctx
	 * @return {Promise}
	 *
	 * @example
	 * await ctx.blockDtmf()
	 */
	async function blockDtmf (digits = '0123456789') {
	}


	/**
	 * Wait For (DTMF Sequence)
	 * 
	 * @function waitFor
	 * @memberof ctx
	 * @param {string|RegExp|waitForMatch} match Positive Match
	 * @param {string|RegExp|waitForMatch} failMatch Negative Match (How to escape menu)
	 * @return {Promise} String or RegEx in match, will return string, will return truthy result for match as a function
	 *
	 * @example
	 * try {
	 *   var keys = await ctx.waitFor('\d{4}' '*', 3000);
	 *   process(keys)
	 * } catch (err) {
	 *   // Continue
	 * }
	 }
	 *
	 * @example
	 * function fn(value) {
	 *   return value > 1000;
	 *   // You can fail a match by throw new Error('fail');
	 * }
	 * try {
	 *   var keys = await ctx.waitFor(fn, '*');
	 *   process(keys);
	 * } catch (err) {
	 *   // Continue
	 * }
	 *
	 * @example
	 * // Ignore any previously entered numbers, just capture look at the last part with a Regular Expression
	 * try {
	 *	 var keys = await ctx.waitFor(/00$/, '*');
	 *   process(keys);
	 * } catch (err) {
	 *   // Continue
	 * }
	 */
	async function waitFor (match, quit, timeout=60) {
	}

	/**
	 * Call back function `waitForMatch` to be used as match in waitFor
	 *
	 * @callback waitForMatch
	 * @param {string} match Text to be matched against
	 * @return {*} result Truthy will match
	 */
} 
