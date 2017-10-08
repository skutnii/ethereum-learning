if ("undefined" !== typeof web3) {
	module.exports = web3;
} else {
	var connect = require('./connect');
	var testnet = connect.http("http://136.243.173.186:8540");

	module.exports = testnet;
}
