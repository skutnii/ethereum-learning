var testnet = require("./testnet");
var eth = testnet.eth;
var utils = testnet.utils;

var fs = require('fs');

var gasPrice = parseInt(eth.gasPrice);
var gasPriceHex = utils.toHex(gasPrice);

var rawTx = {
	nonce: "",
	to: "",
	amount: "",
	gasLimit: "",
	gasPrice:gasPriceHex,
	data: '0x000000000',
	chainId: utils.toHex(testnet.version.network)
};

var account = null;
var input = require('./input');

input.ask("Enter amount.\n")
.then(function(amount) {
	rawTx.amount = utils.toWei(amount, "ether");
	return input.ask("Enter destination address.\n");
})
.then(function(to) {
	rawTx.to = to;
	return input.ask("Enter gas limit.\n");
})
.then(function(gas) {
	rawTx.gasLimit = utils.toHex(gas);
	return require('./account').read();
})
.then(function(acc) {
	account = acc;
	console.log("Sending from account", account.address + "...");
	return eth.getTransactionCount(account.address);
})
.then(function(count) {
	rawTx.nonce = utils.toHex(count);
	console.log('Transaction count:', count);
	require('./tx').send(rawTx, account);
})
.catch(console.log);


