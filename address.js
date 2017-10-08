var account = require('./account');

account.read().then(function(account) {
	console.log("Address:", account.address);
}).catch(console.log);