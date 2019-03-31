import Web3 from 'web3';

//using the web3 blockchain provider from browser injected by Metamask)
const web3 = new Web3(window.web3.currentProvider); 

export default web3;