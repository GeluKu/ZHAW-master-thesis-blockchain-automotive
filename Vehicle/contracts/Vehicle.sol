pragma solidity ^0.4.25;

//definition of a smart contract for a Mercedes-Benz vehicle


contract Vehicle {

  address public owner; //actual owner of the vehicle - manager of the smart contract for the vehicle
  mapping (address => uint) balances; //testcode

  string public ownerName //name (prename and familiy name) of the owner
  string public email;  //contact contact for the property owner
  string public telephone; //telephone number of the vehicle owner

  bool public statusVehicle;   //is the property visible or not for the blockchain participants 
  
    
// vehicle attributes according to Mercedes-Benz vehicle definition
  string public vehicleChassyNumber; //Chassy Number according to the registration paper
  string public vehicleSalesDesignation; //According to Mercedes-Benz master data
  uint public vehicleActual Milage; //last known vehicle milage

  uint public vehicleValue;    //actual vehicle value according to owner declaration

  string public vehicleyNotes; //memo field for extra information  - Vorbemerkungen


//Smart Contract Constructor
constructor(string memory eMail, uint propValue) public {
    owner = msg.sender;
    status = true;
    email = eMail;
    propertyValue = propValue; 

  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

function setVehicleValue(uint newValue) public {
    vehicleValue = newValue;
}

function getVehicleValue() public view returns (uint pValue) {
    return vehicleValue;
}

function setEmail(string memory newEMailAdress) public {
    email = newEMailAdress;
}


function queryBalance() public view returns (uint256) {
        return this.balance;
    }

}