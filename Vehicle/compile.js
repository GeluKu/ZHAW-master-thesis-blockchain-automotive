const path = require('path'); // module ensure the cross-platform code compatibility
const fs = require ('fs'); // module to access the file system of the operation system
const solc = require('solc'); // solc= Solidity Compiler - transforms the solidity code in byte code

const smartContractPath = path.resolve(__dirname, 'contracts', 'Vehicle.sol'); //path to the solidity contract
const source = fs.readFileSync(smartContractPath, 'utf8');
// 1 = a smart contract will be compiled :Vehicle - bytecode for the vehicle smart contract
//console.log (solc.compile(source, 1).contracts[':Vehicle']);

module.exports = solc.compile(source, 1).contracts[':Vehicle'];