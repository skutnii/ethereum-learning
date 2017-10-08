var testnet = require('./testnet');
var account = require('./account');

account.read()
.then(function(acc) {
	testnet.eth.getBalance(acc.address).then(console.log);
})
