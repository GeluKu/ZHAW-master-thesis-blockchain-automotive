const path = require('path'); // module ensure the cross-platform code compatibility
const fs = require ('fs-extra'); // module to access the file system of the operation system
const solc = require('solc'); // solc= Solidity Compiler - transforms the solidity code in byte code

const buildPath= path.resolve(__dirname, 'build');
fs.removeSync(buildPath); //delete the entire build folder

const smartContractPath = path.resolve(__dirname, 'contracts', 'Vehicle.sol'); //path to the solidity contract
const source = fs.readFileSync(smartContractPath, 'utf8');
// 1 = a smart contract will be compiled :Vehicle - bytecode for the vehicle smart contract
//the compiled smart contract will be written to build folder

const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); // ensure the directory build exists and if not creates a new one

//Write compiled smart contract to file system

for (let contract in output){

    fs.outputJsonSync(path.resolve(buildPath, contract.replace(':','') +'.json'),output[contract]);
}

//module.exports = solc.compile(source, 1).contracts[':Vehicle'];