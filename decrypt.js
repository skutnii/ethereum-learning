var aes256 = require('nodejs-aes256');

if (process.argv.length < 4) {
	console.log(
		"Usage: node decrypt.js <data> <key>\n" +
		"Decrypts <data> that was encrypted with <key> using aes256 algorithm\n" + 
		"and logs the result to the console."
	);

	process.exit(1);
}

var key = process.argv[3];
var data = process.argv[2];

var decrypted = aes256.decrypt(key, data);
console.log(decrypted);
