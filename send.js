var testnet = require("./testnet");
var eth = testnet.eth;
var utils = testnet.utils;

var fs = require('fs');

var rawTx = {
	nonce: "",
	to: "",
	value: "",
	gasLimit: "",
	gasPrice:"",
	chainId: utils.toHex(testnet.version.network)
};

var input = require('./input');

input.ask("Enter amount.\n")
.then(function(amount) {
	var wei = utils.toHex(utils.toWei(amount, "ether"));
	rawTx.value = wei;
	return input.ask("Enter destination address.\n");
})
.then(function(to) {
	rawTx.to = to;
	return input.ask("Enter gas limit.\n");
})
.then(function(gas) {
	rawTx.gasLimit = utils.toHex(gas);
	return input.ask("Enter gas price (in gwei)\n");
})
.then(function(price) {
	var wei = utils.toWei(price, "gwei");
	var gasPrice = parseInt(wei);
	rawTx.gasPrice = utils.toHex(gasPrice);
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


