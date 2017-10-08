var aes256 = require('nodejs-aes256');

if (process.argv.length < 4) {
	console.log(
		"Usage: node encrypt.js <data> <key>\n" +
		"Encrypts <data> with <key> using aes256 algorithm and logs data to the console."
	);

	process.exit(1);
}

var key = process.argv[3];
var data = process.argv[2];

var encrypted = aes256.encrypt(key, data);
console.log(encrypted);
