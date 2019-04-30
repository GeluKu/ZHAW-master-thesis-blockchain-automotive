import web3 from "./web3";

//contract address from deploy.js
const address = "0x7B1962443d31B6D6D75218A55c2fb8e391ccBfB7";

//ABI (interface) for the vehicle smart contract from deploy.js
const abi = [
  {
    constant: false,
    inputs: [
      { name: "_mileageRepair", type: "uint40" },
      { name: "_repairType", type: "string" },
      { name: "_repairDescription", type: "string" }
    ],
    name: "addNewRepair",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "vehicleFirstRegistrationDate",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "newValue", type: "uint48" }],
    name: "setVehicleValue",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "vehicleSalesDesignation",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "vehiclePlateNumber",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "newEMailAdress", type: "string" }],
    name: "setEmailOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "vehicleValue",
    outputs: [{ name: "", type: "uint48" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "Repairs",
    outputs: [
      { name: "repairWorkshop", type: "address" },
      { name: "repairDate", type: "uint256" },
      { name: "mileageRepair", type: "uint40" },
      { name: "repairType", type: "string" },
      { name: "repairDescription", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "ownerName",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "vehicleChassisNumber",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "vehicleLastMilage",
    outputs: [{ name: "", type: "uint40" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "ownerVehicle",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "telephoneOwner",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "vehicleLastMilageDate",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "statusVehicle",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "emailOwner",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "vehicleNotes",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "vehicleProductionDate",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "vehicleBrand",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { name: "_vehicleChassisNumber", type: "string" },
      { name: "_vehicleBrand", type: "string" },
      { name: "_vehicleSalesDesignation", type: "string" },
      { name: "_vehicleProductionDate", type: "string" },
      { name: "_vehicleNotes", type: "string" }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
];
//ABI (interface) for the contract


export default new web3.eth.Contract(abi, address);
