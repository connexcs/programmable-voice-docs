# ConnexCS ScriptForge

ConnexCS ScriptForge allows you to write ECMAScript 2015 (ES6) (aka Javascript) which is executed
in a secure sandbox on the server. It is designed to be low latency and high throughput.

You can read more about how to find and use it [here](https://docs.connexcs.com/developers/scriptforge/)

## Execution Types

### Script

This is the fastest way to execute custom code and is "synchronous" execution. This should mainly be
used for manipulations or calculations. It can not use libraries or work with Promises.

### App

Feature rich applications which can include a preset (whitelist) of available modules, the penalty
of the extra features is a slightly higher latency.

### Driver

A driver works as an intemediary between ConnexCS and any external system. You can write drivers
to bridge the ConnexCS DID provisioning system to a provider of your choice, or built more complicated alerts.

## Example Applications

You can find our github repository for sample applications [here](https://github.com/connexcs/scriptforge-examples/)

## Use Cases

Below is a a short list of a few examples. However with a turing complete language, the possibilities are endless.

 * Do Not Call Lists
 * Custom Fraud Detection
 * Internal Automations
 * Capture and Process control panel and customer portal forms
 * Inbound & Outbound Call Filtering
 * Class 5 Programmable Voice Applications
 * DID Drivers
 * Time of Day Restrictions

## Basics

Script & Apps (tipically) start with a `main` function the first parameter is (tipically) an object called data.
In order to ensure that your application performs well, you should avoid doing anything which will
make the execution last longer than 10 seconds (with the exception of Class 5 Programable Voice)

### Class 4 Routing (Routes & DID)

After the routing engine has excuted its main function custom ScriptForge run last. It run presenting data
as the output to the routing engine and expects the same object structure to be passed out.
Use this with care as changes could affect the billing & stability of calls if not done correctly.

```
function main (data = {}) {
	// data.routing contains the same data you will find in the Logs
	// in the Raw Data Section
}
```

### Class 5 Programmable Voice

The execution of the Programmable Voice script is done synchronously with the call. This means that (for example)
you would initially run an `await answer()`, it would not progress to the next line untill our platform
has finished executing the operation.

**IMPORTANT** - Ensure that ALL async functions are executed with `await`, otherwise the system will loose
the synchronised state with your script and the connection will crash.

Second parameter is a [ctx](/ctx.html) object
```
function main (data = {}, ctx) {
	// ctx contains class 5 ctx object 
}
```

### Form Submission

Used to receive data from Form Builder in ConnexCS, which can be displayed in the control panel or customer portal.
```
function main (data = {}) {
	// data contains object containing key/value pairs from the form. 
}
```

### Driver
A driver is a module export and can contain a number of pre-defined functions dependant on the integration, flow is an example for DID Driver.

```
module.export = {
	search: async function ({number}) {
		// Returns Array of Objects, e.g [{did:'1234'}]
	},
	allocate: async function ({did}) {
		// The information returned by this function will be passed to 
		// https://api-docs.connexcs.com/#api-Did-Create
	},
	release: async function ({did}) {
		// Returns True / False
	},
	list: async function () {
		// Returns Array of Objects, e.g [{did:'1234'}]
	}
}
```