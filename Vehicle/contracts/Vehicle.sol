pragma solidity ^0.4.25;

//definition of a smart contract for a vehicle

contract Vehicle {

  address public ownerVehicle; //actual owner of the vehicle - manager of the smart contract for the vehicle
  mapping (address => uint) balances; //testcode

//Owner attributes
  string public ownerName; //name (prename and familiy name) of the owner
  string public emailOwner;  //contact contact for the property owner
  string public telephoneOwner; //telephone number of the vehicle owner
  string public vehiclePlateNumber; //plate number from registration country

//Vehicle attributes
  bool   public statusVehicle;   //is the property visible or not for the blockchain participants 
  string public vehicleChassisNumber; //Chassis Number according to the registration paper
  string public vehicleBrand; // For example Mercedes-Benz, BMW etc. In a future development can be a enum type
  string public vehicleSalesDesignation; //According to Mercedes-Benz master data
  uint40 public vehicleLastMilage; //last known vehicle milage
  string public vehicleLastMilageDate; // the date the last milage was recorded
  string public vehicleFirstRegistrationDate; //the first registration date of the vehicle
  string public vehicleProductionDate; //production date of the vehicle
 

  uint48 public vehicleValue;    //actual vehicle value according to owner declaration
  string public vehicleNotes; //memo field for extra information  - Vorbemerkungen

  struct Repair{
    address repairWorkshop; // Ethereum address of the partner executing the repair
    uint  repairDate; // the date the repair was executed
    uint40  mileageRepair; // vehicle mileage at the repair date
    string  repairType; // type of the repair performed (can be to a latter development type as an enum type)
    string  repairDescription; //description of the repairs performed
        
  }
// A dynamically-sized array of `Repair` structs.
  Repair[] public Repairs; //vehicle repair history as an dinamic array
  uint RepairTrailCount=0;

//Smart Contract Constructor
constructor(string memory _vehicleChassisNumber, string memory _vehicleBrand, string memory _vehicleSalesDesignation, string memory _vehicleProductionDate, string memory _vehicleNotes) public {
  
  ownerVehicle = msg.sender; // first owner is the production factory of the vehicle
  vehicleProductionDate = _vehicleProductionDate;
  vehicleChassisNumber=_vehicleChassisNumber; //Chassis Number according to the registration paper
  
  vehicleBrand = _vehicleBrand; //The brand of the vehicle will be recorded
  vehicleSalesDesignation=_vehicleSalesDesignation; //According to Mercedes-Benz master data

  vehicleNotes = _vehicleNotes;
  vehicleLastMilage=0;

  }

  modifier ownerOnly() {
    if (msg.sender == ownerVehicle) _;
  }

function setVehicleValue(uint48 newValue) public ownerOnly {
    vehicleValue = newValue;
}


function setEmailOwner(string memory newEMailAdress) public ownerOnly {
    emailOwner = newEMailAdress;
}


function addNewRepair (uint40 _mileageRepair, string memory _repairType, string memory _repairDescription ) public {
  
  Repair memory newRepair;

  newRepair.repairDate = now;
  newRepair.mileageRepair = _mileageRepair;
  newRepair.repairType = _repairType;
  newRepair.repairDescription = _repairDescription;
  newRepair.repairWorkshop = msg.sender;

  Repairs.push(newRepair);
  RepairTrailCount++;
}

function transferVehicleOwnership(address newVehicleOwner) public ownerOnly {
    ownerVehicle = newVehicleOwner;
}

}