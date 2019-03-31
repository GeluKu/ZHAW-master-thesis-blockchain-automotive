pragma solidity ^0.4.25;

//definition of a smart contract for a Mercedes-Benz vehicle


contract Vehicle {

  address public ownerVehicle; //actual owner of the vehicle - manager of the smart contract for the vehicle
  mapping (address => uint) balances; //testcode

  string public ownerName; //name (prename and familiy name) of the owner
  string public emailOwner;  //contact contact for the property owner
  string public telephone; //telephone number of the vehicle owner

  bool public statusVehicle;   //is the property visible or not for the blockchain participants 
  
    
// vehicle attributes according to Mercedes-Benz vehicle definition
  string public vehicleChassyNumber; //Chassy Number according to the registration paper
  string public vehicleBrand; // For example Mercedes-Benz, BMW etc. In a future development can be a enum type
  string public vehicleSalesDesignation; //According to Mercedes-Benz master data
  uint40 public vehicleActualMilage; //last known vehicle milage

  uint48 public vehicleValue;    //actual vehicle value according to owner declaration
  string public vehicleyNotes; //memo field for extra information  - Vorbemerkungen

  struct Repair{
    address partner; // Ethereum address of the partner executing the repair
    string  repairDate; // the date the repair was executed
    string  repairDescription; //description of the repairs performed
    uint40  mileageReparir; // vehicle mileage at the repair date
    string  repairType; // type of the repair performed (can be to a latter development type as an enum type)
  }
// A dynamically-sized array of `Repair` structs.
  Repair[] public repairs; //vehicle repair history as an dinamic array


//Smart Contract Constructor
constructor(string memory _vehicleChassyNumber, string _vehicleBrand, string memory _vehicleSalesDesignation) public {
  
  ownerVehicle = msg.sender; // first owner is the production factory of the vehicle

  vehicleChassyNumber=_vehicleChassyNumber; //Chassy Number according to the registration paper
  vehicleBrand = _vehicleBrand; //The brand of the vehicle will be recorded
  vehicleSalesDesignation=_vehicleSalesDesignation; //According to Mercedes-Benz master data
  vehicleActualMilage=0;
  }

  modifier restricted() {
    if (msg.sender == ownerVehicle) _;
  }

function setVehicleValue(uint48 newValue) public {
    vehicleValue = newValue;
}

function getVehicleValue() public view returns (uint48) {
    return vehicleValue;
}

function setEmailOwner(string memory newEMailAdress) public {
    emailOwner = newEMailAdress;
}

function getEmailOwner() public view returns (string) {
    return emailOwner;
}

}