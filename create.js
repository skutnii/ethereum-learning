var testnet = require('./testnet');

var pass = process.argv[2];

if ("undefined" === typeof pass) {
	console.log("Usage: node create.js <password>\n" +
	"Creates a new account and logs encrypted private key to the console.\n" +
	"Can be used to generate account.dat as follows:\n"+
	"node create.js <password> > account.dat.");
	process.exit(1);
}

var account = testnet.eth.accounts.create();

var aes256 = require('nodejs-aes256');
var data = aes256.encrypt(pass, account.privateKey);

console.log(data);