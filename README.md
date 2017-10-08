Test project for learning ethereum blockchain. A simple nodejs wallet working from command line.

# Setup

## Install dependencies

> $ npm install

## Create account

To start, you need to generate account.dat as follows:

> $ node create.js.

This script generates an account private key, encrypts it and saves to a file.
You will be prompted for the file and encryption password.

# Get account address

> $ node address.js

You will be prompted for the account file and encryption password.

# Retrieve account balance

> $ node balance.js

You will be prompted for the account file and encryption password.

# Send ether

> $ node send.js

You will be prompted for the transaction data.
