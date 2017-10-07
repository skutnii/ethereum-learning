var testnet = require('./testnet');

var pass = process.argv[2];

if ("undefined" === typeof pass) {
	console.log("Usage: node create.js <password>");
	process.exit(1);
}

testnet.eth.personal.newAccount(pass).then(function(result) {
	if (false === result) {
		console.log("Account not created");
		process.exit(1);
	}

	var account = {
		id:result,
		password:pass
	};

	console.log(JSON.stringify(account));
});