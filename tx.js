var testnet = require("./testnet");
var eth = testnet.eth;
var utils = testnet.utils;

function sendTx(rawTx, account) {
	try {
		var Tx = require('ethereumjs-tx');
		var tx = new Tx(rawTx);

		var key = new Buffer(account.privateKey.slice(2), 'hex');
		tx.sign(key);
		var txData = '0x' + tx.serialize().toString('hex');
		console.log("Sending raw:", txData);

		eth.sendSignedTransaction(txData)
		.on('transactionHash', function(hash){
	    	console.log("Transaction hash:", hash);
		})
		.on('receipt', function(receipt){
		    console.log("Receipt:", receipt);
		})
		.on('confirmation', function(confirmationNumber, receipt){ 
			console.log("Confirmation ", confirmationNumber, "for receipt", receipt);
		})
		.on('error', console.log)
		.then(function(result) {
			console.log("Success\n", result);
		})
		.catch(function(error) {
			console.log(error);
		});
	} catch(error) {
		console.log(error);
	}
}

module.exports = {
	send: sendTx
}