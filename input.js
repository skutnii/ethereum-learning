var readline = require('readline');
var Promise = require('promise');

function ask(prompt) {
	return new Promise(function(resolve, reject) {
		var reader = readline.createInterface({
	  		input: process.stdin,
	  		output: process.stdout
		});

		reader.question(prompt, function(answer) {
			reader.close();
			resolve(answer);
		});
	});
}

function askPrivate(prompt) {
	return new Promise(function(resolve, reject) {
		var Writable = require('stream').Writable;

		var mutableStdout = new Writable({
		  	write: function(chunk, encoding, callback) {
		    	if (!this.muted) {
		      		process.stdout.write(chunk, encoding);
		    	}
		    	
		    	callback();
		  	}
		});

		mutableStdout.muted = false;		
		var reader = readline.createInterface({
	  		input: process.stdin,
	  		output: mutableStdout,
	  		terminal: true
		});

		reader.question(prompt, function(answer) {
			reader.close();
			resolve(answer);
		});

		mutableStdout.muted = true;
	});	
}

module.exports = {
	ask: ask,
	askPrivate: askPrivate
}