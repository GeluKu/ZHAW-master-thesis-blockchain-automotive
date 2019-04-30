const assert = require('assert');
const testRPC = require('ganache-cli');
const Web3 = require('web3');  //W von Web3 da ein Konstruktor Funktion
const web3 = new Web3(ganache.provider());

const compiledVehicle = require ('../build/vehicle.json');

let accounts;
let vehicle;
let vehicleAddress;

beforeEach(async() => {
    // Liste alle Ethereum Accounts von TestRPC lokal Ethereum
    accounts = await web3.eth.getAccounts();

    // Der Smart Contract wird über den ersten Ethereum Account accounts[0]

    vehicle= await new web3.eth.Contract(JSON.parse(compiledVehicle.interface))
    .deploy({data:compiledVehicle.bytecode, arguments: ['WDC1569031J433809', 'Mercedes-Benz', 'GLA 220d EC']})
    .send({from:accounts[0], gas:'1000000'});
});



//Testing Account Creation & Smart Contract Deployment on TestRPC
describe ('Estate Object', ()=> {
    it('can deploy TestRPC Nodes', ()=> {
        console.log(accounts);
    });
    it('can deploy a smart contract', ()=> {
        console.log('Contract deployed has the adress: ', estate.options.address);
        assert.ok(estate.options.address);
    });

    it('contructor test with default values', async ()=>{
        const eMail = await estate.methods.email().call();
        assert.equal(eMail, 'gelu.liuta@gmail.com');
    });

    it('can change E-Mail Adress of the contract', async ()=>{
       await estate.methods.setEmail('ady.liuta@gmail.com').send({from: accounts[0]});
       const eMail = await estate.methods.email().call();
        assert.equal(eMail, 'ady.liuta@gmail.com');
    });
});
