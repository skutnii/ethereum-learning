var testnet = require("./testnet");
var eth = testnet.eth;
var utils = testnet.utils;

var fs = require('fs');

if (process.argv.length < 4) {
	console.log("Usage: node send.js <amount> <account>.\n", 
		"Sends <amount> ethereum to <account>.\n",
		"The sender account must be defined in account.dat file.\n",
		"Use create.js to generate it.");
	process.exit(1);
}

var amount = process.argv[2];
var dest = process.argv[3];

require('./account').read().then(function(account) {
	console.log("Starting...");

	eth.getTransactionCount(account.address).then(function(count) {
		console.log('Transaction count:', count);

		var gasPrice = parseInt(eth.gasPrice);
		var gasPriceHex = utils.toHex(gasPrice);
		var rawTx = {
			nonce: utils.toHex(count),
			to: dest,
			amount: utils.toWei(amount, "ether"),
			gasLimit: utils.toHex(35000),
			data: '0x00',
  			chainId: utils.toHex(testnet.version.network)
  		};

		require('./tx').send(rawTx, account);
	});
});


