var Web3 = require('web3');
var net = require('net');

module.exports = {
	ipc: function(addr) {
		var web3 = new Web3();
		var provider = new web3.providers.IpcProvider(addr, net);
		web3.setProvider(provider);
		return web3;
	},

	http: function(addr) {
		var web3 = new Web3();
		var provider = new web3.providers.HttpProvider(addr);
		web3.setProvider(provider);
		return web3;		
	}
};