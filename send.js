var connect = require('./connect');

var web3 = require("./testnet");

var myacc = require('./acc');
var dest = "0x2a6a9A9E5965c16965CEd21E07651Ca3Dd5051E9";

web3.eth.personal.unlockAccount(myacc.id, myacc.pass);
web3.eth.sendTransaction({
	from: myacc.id,
	to: dest,
	value: web3.utils.toWei(0.005, "ether")
})