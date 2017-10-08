var input = require('./input');
var testnet = require('./testnet');
var fs = require('fs');
var aes256 = require('nodejs-aes256');

function read() {
	var file = "";
	return new Promise(function(resolve, reject) {
		input.ask("Enter account file path.\n")
		.then(function(answer) {
			file = answer;
			return input.askPrivate("Enter password for " + file + "\n");
		})
		.then(function(password) {
			try {
				var data = fs.readFileSync(file).toString();
				var pkey = aes256.decrypt(password, data);
				var account = testnet.eth.accounts.privateKeyToAccount(pkey);
				resolve(account);
			} catch (error) {
				reject(error);
			}
		})
		.catch(reject);
	});
}

module.exports = {
	read: read
}