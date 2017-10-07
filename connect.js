var Web3 = require('web3');

function connect(addr) {
	var web3 = new Web3();
	var provider = new web3.providers.HttpProvider(addr);
	web3.setProvider(provider);

	return web3;
}

module.exports = connect;