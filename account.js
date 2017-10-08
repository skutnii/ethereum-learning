var readline = require('readline');
var Promise = require('promise');
var testnet = require('./testnet');
var fs = require('fs');
var aes256 = require('nodejs-aes256');

function read() {
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

		reader.question("Enter password for account.dat\n", function(password) {
			try {
				var data = fs.readFileSync('./account.dat').toString();
				var pkey = aes256.decrypt(password, data);
				var account = testnet.eth.accounts.privateKeyToAccount(pkey);
				resolve(account);
			} catch (error) {
				reject(error);
			}

			reader.close();
		});

		mutableStdout.muted = true;
	});
}

module.exports = {
	read: read
}