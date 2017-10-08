var testnet = require('./testnet');
var input = require('./input');

var file = "";
input.ask("Enter destination file path.\n")
.then(function(answer) {
	file = answer;
	return input.askPrivate("Enter encryption password.\n");
})
.then(function(pass) {
	try {
		var account = testnet.eth.accounts.create();

		var aes256 = require('nodejs-aes256');
		var data = aes256.encrypt(pass, account.privateKey);
		require('fs').writeFileSync(file, data, {
			flag: "wx"
		});

		console.log("Successfully wrote to", file + '.');
	} catch (error) {
		console.log(error);
	}
});
