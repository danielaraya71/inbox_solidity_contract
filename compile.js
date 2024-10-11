const path = require('path');
const fs = require('fs');
const solc = require('solc');

// Get the path of the Inbox.sol file
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// Read the content of the Solidity file
const source = fs.readFileSync(inboxPath, 'utf8');

// Define the input for solc.compile in the new JSON format
const input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['abi', 'evm.bytecode']  // You can specify what output you need
            }
        }
    }
};

// Compile the Solidity contract
module.exports = JSON.parse(solc.compile(JSON.stringify(input)));

// Output the ABI and Bytecode (for debugging or further usage)
const contract = module.exports.contracts['Inbox.sol'].Inbox;
console.log('ABI:', contract.abi);
console.log('Bytecode:', contract.evm.bytecode.object);

// Export ABI and Bytecode for deployment
module.exports = contract;
