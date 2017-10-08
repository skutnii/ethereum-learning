Test project for learning ethereum blockchain. A simple nodejs wallet.

# Initialization

To start, you need to generate account.dat as follows:

> node create.js &lt;password&gt; > account.dat.

This script generates an account private key and writes it encrypted with the password provided to the output.

# Get account address

> node account.js

You will be prompted for the password with which private key in account.dat was encrypted.

# Retrieve account balance

> node balance.js

You will be prompted for the password with which private key in account.dat was encrypted.

# Send ether

> node send.js <amount> <address>

Sends &lt;amount&gt; ether to &lt;address&gt;.
You will be prompted for the password with which private key in account.dat was encrypted.
