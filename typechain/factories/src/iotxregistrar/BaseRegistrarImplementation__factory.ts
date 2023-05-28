/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BaseRegistrarImplementation,
  BaseRegistrarImplementationInterface,
} from "../../../src/iotxregistrar/BaseRegistrarImplementation";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract INS",
        name: "_ins",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_baseNode",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    name: "ControllerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    name: "ControllerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
    ],
    name: "NameMigrated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
    ],
    name: "NameRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
    ],
    name: "NameRenewed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    name: "addController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "available",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseNode",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "controllers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ins",
    outputs: [
      {
        internalType: "contract INS",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "nameExpires",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "reclaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "register",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "registerOnly",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    name: "removeController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "renew",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
    ],
    name: "setResolver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200253c3803806200253c833981016040819052620000349162000109565b60408051602080820183526000808352835191820190935282815290916200005d8382620001ea565b5060016200006c8282620001ea565b5050506200008962000083620000b360201b60201c565b620000b7565b600880546001600160a01b0319166001600160a01b039390931692909217909155600955620002b6565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600080604083850312156200011d57600080fd5b82516001600160a01b03811681146200013557600080fd5b6020939093015192949293505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200017057607f821691505b6020821081036200019157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001e557600081815260208120601f850160051c81016020861015620001c05750805b601f850160051c820191505b81811015620001e157828155600101620001cc565b5050505b505050565b81516001600160401b0381111562000206576200020662000145565b6200021e816200021784546200015b565b8462000197565b602080601f8311600181146200025657600084156200023d5750858301515b600019600386901b1c1916600185901b178555620001e1565b600085815260208120601f198616915b82811015620002875788860151825594840194600190910190840162000266565b5085821015620002a65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61227680620002c66000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806395d89b4111610104578063c87b56dd116100a2578063e985e9c511610071578063e985e9c5146103e0578063f2fde38b1461041c578063f6a74ed71461042f578063fca247ac1461044257600080fd5b8063c87b56dd14610381578063d6e4fa8614610394578063da8c229e146103b4578063ddf7fcb0146103d757600080fd5b8063a7fc7a07116100de578063a7fc7a071461033e578063b88d4fde14610351578063c1a287e214610364578063c475abff1461036e57600080fd5b806395d89b411461031057806396e494e814610318578063a22cb4651461032b57600080fd5b806342842e0e116101715780636f14a0d11161014b5780636f14a0d1146102d157806370a08231146102e4578063715018a6146102f75780638da5cb5b146102ff57600080fd5b806342842e0e146102985780634e543b26146102ab5780636352211e146102be57600080fd5b8063095ea7b3116101ad578063095ea7b31461023c5780630e297b451461025157806323b872dd1461027257806328ed4f6c1461028557600080fd5b806301ffc9a7146101d457806306fdde03146101fc578063081812fc14610211575b600080fd5b6101e76101e2366004611d98565b610455565b60405190151581526020015b60405180910390f35b61020461053a565b6040516101f39190611e23565b61022461021f366004611e36565b6105cc565b6040516001600160a01b0390911681526020016101f3565b61024f61024a366004611e64565b6105f3565b005b61026461025f366004611e90565b610729565b6040519081526020016101f3565b61024f610280366004611ec8565b610740565b61024f610293366004611ef8565b6107c7565b61024f6102a6366004611ec8565b610912565b61024f6102b9366004611f28565b61092d565b6102246102cc366004611e36565b6109bb565b600854610224906001600160a01b031681565b6102646102f2366004611f28565b6109de565b61024f610a78565b6006546001600160a01b0316610224565b610204610a8c565b6101e7610326366004611e36565b610a9b565b61024f610339366004611f45565b610ac1565b61024f61034c366004611f28565b610ad0565b61024f61035f366004611fa7565b610b42565b6102646276a70081565b61026461037c3660046120a5565b610bd0565b61020461038f366004611e36565b610d7a565b6102646103a2366004611e36565b60009081526007602052604090205490565b6101e76103c2366004611f28565b600a6020526000908152604090205460ff1681565b61026460095481565b6101e76103ee3660046120c7565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61024f61042a366004611f28565b610dee565b61024f61043d366004611f28565b610e7e565b610264610450366004611e90565b610eed565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a70000000000000000000000000000000000000000000000000000000014806104e857507fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000145b8061053457507fffffffff0000000000000000000000000000000000000000000000000000000082167f28ed4f6c00000000000000000000000000000000000000000000000000000000145b92915050565b606060008054610549906120f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610575906120f5565b80156105c25780601f10610597576101008083540402835291602001916105c2565b820191906000526020600020905b8154815290600101906020018083116105a557829003601f168201915b5050505050905090565b60006105d782610efc565b506000908152600460205260409020546001600160a01b031690565b60006105fe82610f60565b9050806001600160a01b0316836001600160a01b03160361068c5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b336001600160a01b03821614806106a857506106a881336103ee565b61071a5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610683565b6107248383610fc5565b505050565b6000610738848484600061104b565b949350505050565b61074a338261128d565b6107bc5760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f766564000000000000000000000000000000000000006064820152608401610683565b610724838383611308565b6008546009546040517f02571be3000000000000000000000000000000000000000000000000000000008152600481019190915230916001600160a01b0316906302571be390602401602060405180830381865afa15801561082d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108519190612148565b6001600160a01b03161461086457600080fd5b61086e338361128d565b61087757600080fd5b6008546009546040517f06ab59230000000000000000000000000000000000000000000000000000000081526004810191909152602481018490526001600160a01b038381166044830152909116906306ab5923906064016020604051808303816000875af11580156108ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107249190612165565b61072483838360405180602001604052806000815250610b42565b610935611567565b6008546009546040517f1896f70a00000000000000000000000000000000000000000000000000000000815260048101919091526001600160a01b03838116602483015290911690631896f70a90604401600060405180830381600087803b1580156109a057600080fd5b505af11580156109b4573d6000803e3d6000fd5b5050505050565b60008181526007602052604081205442106109d557600080fd5b61053482610f60565b60006001600160a01b038216610a5c5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e657200000000000000000000000000000000000000000000006064820152608401610683565b506001600160a01b031660009081526003602052604090205490565b610a80611567565b610a8a60006115c1565b565b606060018054610549906120f5565b6000818152600760205260408120544290610aba906276a7009061217e565b1092915050565b610acc33838361162b565b5050565b610ad8611567565b6001600160a01b0381166000818152600a602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055517f0a8bb31534c0ed46f380cb867bd5c803a189ced9a764e30b3a4991a9901d74749190a250565b610b4c338361128d565b610bbe5760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f766564000000000000000000000000000000000000006064820152608401610683565b610bca84848484611717565b50505050565b6008546009546040517f02571be3000000000000000000000000000000000000000000000000000000008152600481019190915260009130916001600160a01b03909116906302571be390602401602060405180830381865afa158015610c3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5f9190612148565b6001600160a01b031614610c7257600080fd5b336000908152600a602052604090205460ff16610c8e57600080fd5b6000838152600760205260409020544290610cad906276a7009061217e565b1015610cb857600080fd5b610cc56276a7008361217e565b6000848152600760205260409020546276a70090610ce490859061217e565b610cee919061217e565b11610cf857600080fd5b60008381526007602052604081208054849290610d1690849061217e565b90915550506000838152600760205260409081902054905184917f9b87a00e30f1ac65d898f070f8a3488fe60517182d0a2098e1b4b93a54aa9bd691610d5e91815260200190565b60405180910390a2505060009081526007602052604090205490565b6060610d8582610efc565b6000610d9c60408051602081019091526000815290565b90506000815111610dbc5760405180602001604052806000815250610de7565b80610dc6846117a0565b604051602001610dd79291906121b8565b6040516020818303038152906040525b9392505050565b610df6611567565b6001600160a01b038116610e725760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610683565b610e7b816115c1565b50565b610e86611567565b6001600160a01b0381166000818152600a602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055517f33d83959be2573f5453b12eb9d43b3499bc57d96bd2f067ba44803c859e811139190a250565b6000610738848484600161104b565b6000818152600260205260409020546001600160a01b0316610e7b5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610683565b6000818152600260205260408120546001600160a01b0316806105345760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610683565b600081815260046020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038416908117909155819061101282610f60565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6008546009546040517f02571be3000000000000000000000000000000000000000000000000000000008152600481019190915260009130916001600160a01b03909116906302571be390602401602060405180830381865afa1580156110b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110da9190612148565b6001600160a01b0316146110ed57600080fd5b336000908152600a602052604090205460ff1661110957600080fd5b61111285610a9b565b61111b57600080fd5b6111286276a7004261217e565b6276a700611136854261217e565b611140919061217e565b1161114a57600080fd5b611154834261217e565b6000868152600760209081526040808320939093556002905220546001600160a01b031615611186576111868561185e565b6111908486611929565b8115611233576008546009546040517f06ab59230000000000000000000000000000000000000000000000000000000081526004810191909152602481018790526001600160a01b038681166044830152909116906306ab5923906064016020604051808303816000875af115801561120d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112319190612165565b505b6001600160a01b038416857fb3d987963d01b2f68493b4bdb130988f157ea43070d4ad840fee0466ed9370d9611269864261217e565b60405190815260200160405180910390a3611284834261217e565b95945050505050565b600080611299836109bb565b9050806001600160a01b0316846001600160a01b031614806112d45750836001600160a01b03166112c9846105cc565b6001600160a01b0316145b8061073857506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff16610738565b826001600160a01b031661131b82610f60565b6001600160a01b0316146113975760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610683565b6001600160a01b0382166114125760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610683565b826001600160a01b031661142582610f60565b6001600160a01b0316146114a15760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610683565b600081815260046020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000009081169091556001600160a01b038781168086526003855283862080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6006546001600160a01b03163314610a8a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610683565b600680546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03160361168c5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610683565b6001600160a01b0383811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611722848484611308565b61172e84848484611acc565b610bca5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610683565b606060006117ad83611c88565b600101905060008167ffffffffffffffff8111156117cd576117cd611f78565b6040519080825280601f01601f1916602001820160405280156117f7576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461180157509392505050565b600061186982610f60565b905061187482610f60565b600083815260046020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000009081169091556001600160a01b0385168085526003845282852080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190558785526002909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6001600160a01b03821661197f5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610683565b6000818152600260205260409020546001600160a01b0316156119e45760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610683565b6000818152600260205260409020546001600160a01b031615611a495760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610683565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160a01b0384163b15611c80576040517f150b7a020000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063150b7a0290611b299033908990889088906004016121e7565b6020604051808303816000875af1925050508015611b82575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611b7f91810190612223565b60015b611c35573d808015611bb0576040519150601f19603f3d011682016040523d82523d6000602084013e611bb5565b606091505b508051600003611c2d5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610683565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610738565b506001610738565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611cd1577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310611cfd576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310611d1b57662386f26fc10000830492506010015b6305f5e1008310611d33576305f5e100830492506008015b6127108310611d4757612710830492506004015b60648310611d59576064830492506002015b600a83106105345760010192915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610e7b57600080fd5b600060208284031215611daa57600080fd5b8135610de781611d6a565b60005b83811015611dd0578181015183820152602001611db8565b50506000910152565b60008151808452611df1816020860160208601611db5565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610de76020830184611dd9565b600060208284031215611e4857600080fd5b5035919050565b6001600160a01b0381168114610e7b57600080fd5b60008060408385031215611e7757600080fd5b8235611e8281611e4f565b946020939093013593505050565b600080600060608486031215611ea557600080fd5b833592506020840135611eb781611e4f565b929592945050506040919091013590565b600080600060608486031215611edd57600080fd5b8335611ee881611e4f565b92506020840135611eb781611e4f565b60008060408385031215611f0b57600080fd5b823591506020830135611f1d81611e4f565b809150509250929050565b600060208284031215611f3a57600080fd5b8135610de781611e4f565b60008060408385031215611f5857600080fd5b8235611f6381611e4f565b915060208301358015158114611f1d57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060008060808587031215611fbd57600080fd5b8435611fc881611e4f565b93506020850135611fd881611e4f565b925060408501359150606085013567ffffffffffffffff80821115611ffc57600080fd5b818701915087601f83011261201057600080fd5b81358181111561202257612022611f78565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561206857612068611f78565b816040528281528a602084870101111561208157600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156120b857600080fd5b50508035926020909101359150565b600080604083850312156120da57600080fd5b82356120e581611e4f565b91506020830135611f1d81611e4f565b600181811c9082168061210957607f821691505b602082108103612142577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121561215a57600080fd5b8151610de781611e4f565b60006020828403121561217757600080fd5b5051919050565b80820180821115610534577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600083516121ca818460208801611db5565b8351908301906121de818360208801611db5565b01949350505050565b60006001600160a01b038087168352808616602084015250836040830152608060608301526122196080830184611dd9565b9695505050505050565b60006020828403121561223557600080fd5b8151610de781611d6a56fea264697066735822122047b845d2fb5a76e67fb1fa170509348734f89eab6a27a659eac891bb19660c8c64736f6c63430008110033";

type BaseRegistrarImplementationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseRegistrarImplementationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseRegistrarImplementation__factory extends ContractFactory {
  constructor(...args: BaseRegistrarImplementationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ins: PromiseOrValue<string>,
    _baseNode: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BaseRegistrarImplementation> {
    return super.deploy(
      _ins,
      _baseNode,
      overrides || {}
    ) as Promise<BaseRegistrarImplementation>;
  }
  override getDeployTransaction(
    _ins: PromiseOrValue<string>,
    _baseNode: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ins, _baseNode, overrides || {});
  }
  override attach(address: string): BaseRegistrarImplementation {
    return super.attach(address) as BaseRegistrarImplementation;
  }
  override connect(signer: Signer): BaseRegistrarImplementation__factory {
    return super.connect(signer) as BaseRegistrarImplementation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseRegistrarImplementationInterface {
    return new utils.Interface(_abi) as BaseRegistrarImplementationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseRegistrarImplementation {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BaseRegistrarImplementation;
  }
}
