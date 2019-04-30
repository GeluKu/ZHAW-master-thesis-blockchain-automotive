const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledVehicle = require ('./build/Vehicle.json');
//const {interface, bytecode} = require('./compile');


const provider = new HDWalletProvider (
    'away torch cement pact spread inhale student unfold possible power wet bullet',
     'https://rinkeby.infura.io/v3/921a5e6844a446e8a421e76cde73c7a2');
 
    
const web3 = new Web3(provider);

console.log('Start deployment auf Rinkeby...');

const deployFunction = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy contract from the Rinkeby account: ', accounts[0]);

    vehicle= await new web3.eth.Contract(JSON.parse(compiledVehicle.interface))
    .deploy({data:compiledVehicle.bytecode, arguments: ["WDD2054781F820348", "Mercedes-Benz", "C 200 4M", "27.11.2018", "leasing vehicle geloo"]})
    .send({from:accounts[0], gas:'2000000'});

    console.log(compiledVehicle.interface);
    console.log('The adress of the new contract is: ', vehicle.options.address);

    console.log('Deployment completed');
};

deployFunction();