/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  IOTXRegistrarController,
  IOTXRegistrarControllerInterface,
} from "../../../src/iotxregistrar/IOTXRegistrarController";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract BaseRegistrarImplementation",
        name: "_base",
        type: "address",
      },
      {
        internalType: "contract IPriceOracle",
        name: "_prices",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minCommitmentAge",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxCommitmentAge",
        type: "uint256",
      },
      {
        internalType: "contract ReverseRegistrar",
        name: "_reverseRegistrar",
        type: "address",
      },
      {
        internalType: "contract INameWrapper",
        name: "_nameWrapper",
        type: "address",
      },
      {
        internalType: "contract INS",
        name: "_ins",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
    ],
    name: "CommitmentTooNew",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
    ],
    name: "CommitmentTooOld",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "DurationTooShort",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientValue",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxCommitmentAgeTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxCommitmentAgeTooLow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "NameNotAvailable",
    type: "error",
  },
  {
    inputs: [],
    name: "ResolverRequiredWhenDataSupplied",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
    ],
    name: "UnexpiredCommitmentExists",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "label",
        type: "bytes32",
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
        name: "baseCost",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "premium",
        type: "uint256",
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
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "label",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cost",
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
    inputs: [],
    name: "MIN_REGISTRATION_DURATION",
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
        internalType: "string",
        name: "name",
        type: "string",
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
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
    ],
    name: "commit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "commitments",
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
        internalType: "string",
        name: "name",
        type: "string",
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
      {
        internalType: "bytes32",
        name: "secret",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "reverseRecord",
        type: "bool",
      },
      {
        internalType: "uint16",
        name: "ownerControlledFuses",
        type: "uint16",
      },
    ],
    name: "makeCommitment",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "maxCommitmentAge",
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
    name: "minCommitmentAge",
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
    name: "nameWrapper",
    outputs: [
      {
        internalType: "contract INameWrapper",
        name: "",
        type: "address",
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
    inputs: [],
    name: "prices",
    outputs: [
      {
        internalType: "contract IPriceOracle",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "recoverFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
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
      {
        internalType: "bytes32",
        name: "secret",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "reverseRecord",
        type: "bool",
      },
      {
        internalType: "uint16",
        name: "ownerControlledFuses",
        type: "uint16",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "renew",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "rentPrice",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "base",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "premium",
            type: "uint256",
          },
        ],
        internalType: "struct IPriceOracle.Price",
        name: "price",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reverseRegistrar",
    outputs: [
      {
        internalType: "contract ReverseRegistrar",
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
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "valid",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101406040523480156200001257600080fd5b506040516200244938038062002449833981016040819052620000359162000222565b80336200004281620001b9565b6040516302571be360e01b81527f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260048201526000906001600160a01b038416906302571be390602401602060405180830381865afa158015620000aa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d09190620002b6565b604051630f41a04d60e11b81526001600160a01b03848116600483015291925090821690631e83409a906024016020604051808303816000875af11580156200011d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001439190620002dd565b5050505084841162000168576040516307cb550760e31b815260040160405180910390fd5b428411156200018a57604051630b4319e560e21b815260040160405180910390fd5b506001600160a01b0395861660805293851660a05260c09290925260e0528216610100521661012052620002f7565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146200021f57600080fd5b50565b600080600080600080600060e0888a0312156200023e57600080fd5b87516200024b8162000209565b60208901519097506200025e8162000209565b8096505060408801519450606088015193506080880151620002808162000209565b60a0890151909350620002938162000209565b60c0890151909250620002a68162000209565b8091505092959891949750929550565b600060208284031215620002c957600080fd5b8151620002d68162000209565b9392505050565b600060208284031215620002f057600080fd5b5051919050565b60805160a05160c05160e05161010051610120516120ca6200037f6000396000818161038f015281816108470152610c6f015260008181610238015261131e0152600081816103f601528181610e6b015261111a01526000818161031001526110a301526000818161042a0152610a6e015260008181610ab00152610dcd01526120ca6000f3fe60806040526004361061015f5760003560e01c80638d839ffe116100c0578063aeb8ce9b11610074578063d3419bf311610059578063d3419bf314610418578063f14fcbc81461044c578063f2fde38b1461046c57600080fd5b8063aeb8ce9b146103c4578063ce1e09c0146103e457600080fd5b80639791c097116100a55780639791c0971461035d578063a8e5fbc01461037d578063acf1a841146103b157600080fd5b80638d839ffe146102fe5780638da5cb5b1461033257600080fd5b806374694a2b11610117578063839df945116100fc578063839df9451461027f57806383e7f6ff146102ac5780638a95b09f146102e757600080fd5b806374694a2b14610213578063808698531461022657600080fd5b80635d3590d5116101485780635d3590d5146101b057806365a69dcf146101d0578063715018a6146101fe57600080fd5b806301ffc9a7146101645780633ccfd60b14610199575b600080fd5b34801561017057600080fd5b5061018461017f3660046115e4565b61048c565b60405190151581526020015b60405180910390f35b3480156101a557600080fd5b506101ae610525565b005b3480156101bc57600080fd5b506101ae6101cb36600461164f565b61056f565b3480156101dc57600080fd5b506101f06101eb366004611811565b610616565b604051908152602001610190565b34801561020a57600080fd5b506101ae6106c1565b6101ae610221366004611914565b6106d5565b34801561023257600080fd5b5061025a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610190565b34801561028b57600080fd5b506101f061029a3660046119de565b60016020526000908152604090205481565b3480156102b857600080fd5b506102cc6102c73660046119f7565b610a24565b60408051825181526020928301519281019290925201610190565b3480156102f357600080fd5b506101f06224ea0081565b34801561030a57600080fd5b506101f07f000000000000000000000000000000000000000000000000000000000000000081565b34801561033e57600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff1661025a565b34801561036957600080fd5b50610184610378366004611a3c565b610b84565b34801561038957600080fd5b5061025a7f000000000000000000000000000000000000000000000000000000000000000081565b6101ae6103bf366004611a71565b610b99565b3480156103d057600080fd5b506101846103df366004611a3c565b610d84565b3480156103f057600080fd5b506101f07f000000000000000000000000000000000000000000000000000000000000000081565b34801561042457600080fd5b5061025a7f000000000000000000000000000000000000000000000000000000000000000081565b34801561045857600080fd5b506101ae6104673660046119de565b610e54565b34801561047857600080fd5b506101ae610487366004611abd565b610ee2565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000148061051f57507fffffffff0000000000000000000000000000000000000000000000000000000082167f612e8c0900000000000000000000000000000000000000000000000000000000145b92915050565b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116914780156108fc02929091818181858888f1935050505015801561056c573d6000803e3d6000fd5b50565b610577610f96565b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303816000875af11580156105ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106109190611ad8565b50505050565b885160208a01206000908415801590610643575073ffffffffffffffffffffffffffffffffffffffff8716155b1561067a576040517fd3f605c400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808a8a8a8a8a8a8a8a60405160200161069b99989796959493929190611bee565b604051602081830303815290604052805190602001209150509998505050505050505050565b6106c9610f96565b6106d36000611017565b565b60006107188b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508c9250610a24915050565b6020810151815191925061072b91611c8c565b341015610764576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108078b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050896108028e8e8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508d8d8d8d8d8d8d8d610616565b61108c565b6040517fa401498200000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063a401498290610886908f908f908f908f908e908b90600401611c9f565b6020604051808303816000875af11580156108a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c99190611cf6565b905084156108f4576108f4878d8d6040516108e5929190611d0f565b6040518091039020888861120e565b831561093d5761093d8c8c8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508b925033915061131c9050565b8973ffffffffffffffffffffffffffffffffffffffff168c8c604051610964929190611d0f565b60405180910390207f69e37f151eb98a09618ddaa80c8cfaf1ce5996867c489f45b555b412271ebf278e8e86600001518760200151876040516109ab959493929190611d1f565b60405180910390a3602082015182516109c49190611c8c565b341115610a16576020820151825133916108fc916109e29190611c8c565b6109ec9034611d50565b6040518115909202916000818181858888f19350505050158015610a14573d6000803e3d6000fd5b505b505050505050505050505050565b6040805180820190915260008082526020820152825160208401206040517fd6e4fa86000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff908116916350e9a7159187917f00000000000000000000000000000000000000000000000000000000000000009091169063d6e4fa8690602401602060405180830381865afa158015610af9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1d9190611cf6565b866040518463ffffffff1660e01b8152600401610b3c93929190611dd1565b6040805180830381865afa158015610b58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7c9190611df6565b949350505050565b60006003610b91836113dd565b101592915050565b60008383604051610bab929190611d0f565b604080519182900382206020601f870181900481028401810190925285835292508291600091610bf891908890889081908401838280828437600092019190915250889250610a24915050565b8051909150341015610c36576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fc475abff00000000000000000000000000000000000000000000000000000000815260048101839052602481018590526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063c475abff906044016020604051808303816000875af1158015610ccd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf19190611cf6565b8251909150341115610d3957815133906108fc90610d0f9034611d50565b6040518115909202916000818181858888f19350505050158015610d37573d6000803e3d6000fd5b505b837f3da24c024582931cfaf8267d8ed24d13a82a8068d5bd337d30ec45cea4e506ae8888856000015185604051610d739493929190611e45565b60405180910390a250505050505050565b80516020820120600090610d9783610b84565b8015610e4d57506040517f96e494e8000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906396e494e890602401602060405180830381865afa158015610e29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4d9190611ad8565b9392505050565b6000818152600160205260409020544290610e90907f000000000000000000000000000000000000000000000000000000000000000090611c8c565b10610ecf576040517f0a059d71000000000000000000000000000000000000000000000000000000008152600481018290526024015b60405180910390fd5b6000908152600160205260409020429055565b610eea610f96565b73ffffffffffffffffffffffffffffffffffffffff8116610f8d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610ec6565b61056c81611017565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610ec6565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008181526001602052604090205442906110c8907f000000000000000000000000000000000000000000000000000000000000000090611c8c565b1115611103576040517f5320bcf900000000000000000000000000000000000000000000000000000000815260048101829052602401610ec6565b600081815260016020526040902054429061113f907f000000000000000000000000000000000000000000000000000000000000000090611c8c565b11611179576040517fcb7690d700000000000000000000000000000000000000000000000000000000815260048101829052602401610ec6565b61118283610d84565b6111ba57826040517f477707e8000000000000000000000000000000000000000000000000000000008152600401610ec69190611e6c565b6000818152600160205260408120556224ea00821015611209576040517f9a71997b00000000000000000000000000000000000000000000000000000000815260048101839052602401610ec6565b505050565b604080517fb2b692c69df4aa3b0a24634d20a3ba1b44c3299d09d6c4377577e20b09e68395602080830191909152818301869052825180830384018152606083019384905280519101207fe32954eb00000000000000000000000000000000000000000000000000000000909252859073ffffffffffffffffffffffffffffffffffffffff82169063e32954eb906112ae90859088908890606401611e7f565b6000604051808303816000875af11580156112cd573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526113139190810190611ea2565b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637a806d6b3383858760405160200161136c9190611fa1565b6040516020818303038152906040526040518563ffffffff1660e01b815260040161139a9493929190611fe2565b6020604051808303816000875af11580156113b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106109190611cf6565b8051600090819081905b808210156115db5760008583815181106114035761140361202d565b01602001517fff000000000000000000000000000000000000000000000000000000000000001690507f80000000000000000000000000000000000000000000000000000000000000008110156114665761145f600184611c8c565b92506115c8565b7fe0000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000821610156114bb5761145f600284611c8c565b7ff0000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000821610156115105761145f600384611c8c565b7ff8000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000821610156115655761145f600484611c8c565b7ffc000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000821610156115ba5761145f600584611c8c565b6115c5600684611c8c565b92505b50826115d38161205c565b9350506113e7565b50909392505050565b6000602082840312156115f657600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610e4d57600080fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461164a57600080fd5b919050565b60008060006060848603121561166457600080fd5b61166d84611626565b925061167b60208501611626565b9150604084013590509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156117015761170161168b565b604052919050565b600067ffffffffffffffff8211156117235761172361168b565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261176057600080fd5b813561177361176e82611709565b6116ba565b81815284602083860101111561178857600080fd5b816020850160208301376000918101602001919091529392505050565b60008083601f8401126117b757600080fd5b50813567ffffffffffffffff8111156117cf57600080fd5b6020830191508360208260051b85010111156117ea57600080fd5b9250929050565b801515811461056c57600080fd5b803561ffff8116811461164a57600080fd5b60008060008060008060008060006101008a8c03121561183057600080fd5b893567ffffffffffffffff8082111561184857600080fd5b6118548d838e0161174f565b9a5061186260208d01611626565b995060408c0135985060608c0135975061187e60808d01611626565b965060a08c013591508082111561189457600080fd5b506118a18c828d016117a5565b90955093505060c08a01356118b5816117f1565b91506118c360e08b016117ff565b90509295985092959850929598565b60008083601f8401126118e457600080fd5b50813567ffffffffffffffff8111156118fc57600080fd5b6020830191508360208285010111156117ea57600080fd5b6000806000806000806000806000806101008b8d03121561193457600080fd5b8a3567ffffffffffffffff8082111561194c57600080fd5b6119588e838f016118d2565b909c509a508a915061196c60208e01611626565b995060408d0135985060608d0135975061198860808e01611626565b965060a08d013591508082111561199e57600080fd5b506119ab8d828e016117a5565b90955093505060c08b01356119bf816117f1565b91506119cd60e08c016117ff565b90509295989b9194979a5092959850565b6000602082840312156119f057600080fd5b5035919050565b60008060408385031215611a0a57600080fd5b823567ffffffffffffffff811115611a2157600080fd5b611a2d8582860161174f565b95602094909401359450505050565b600060208284031215611a4e57600080fd5b813567ffffffffffffffff811115611a6557600080fd5b610b7c8482850161174f565b600080600060408486031215611a8657600080fd5b833567ffffffffffffffff811115611a9d57600080fd5b611aa9868287016118d2565b909790965060209590950135949350505050565b600060208284031215611acf57600080fd5b610e4d82611626565b600060208284031215611aea57600080fd5b8151610e4d816117f1565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b81835260006020808501808196508560051b810191508460005b87811015611be157828403895281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1883603018112611b9757600080fd5b8701858101903567ffffffffffffffff811115611bb357600080fd5b803603821315611bc257600080fd5b611bcd868284611af5565b9a87019a9550505090840190600101611b58565b5091979650505050505050565b60006101008b835273ffffffffffffffffffffffffffffffffffffffff808c1660208501528a60408501528960608501528089166080850152508060a0840152611c3b8184018789611b3e565b94151560c0840152505061ffff9190911660e090910152979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561051f5761051f611c5d565b60a081526000611cb360a08301888a611af5565b905073ffffffffffffffffffffffffffffffffffffffff808716602084015285604084015280851660608401525061ffff83166080830152979650505050505050565b600060208284031215611d0857600080fd5b5051919050565b8183823760009101908152919050565b608081526000611d33608083018789611af5565b602083019590955250604081019290925260609091015292915050565b8181038181111561051f5761051f611c5d565b60005b83811015611d7e578181015183820152602001611d66565b50506000910152565b60008151808452611d9f816020860160208601611d63565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b606081526000611de46060830186611d87565b60208301949094525060400152919050565b600060408284031215611e0857600080fd5b6040516040810181811067ffffffffffffffff82111715611e2b57611e2b61168b565b604052825181526020928301519281019290925250919050565b606081526000611e59606083018688611af5565b6020830194909452506040015292915050565b602081526000610e4d6020830184611d87565b838152604060208201526000611e99604083018486611b3e565b95945050505050565b60006020808385031215611eb557600080fd5b825167ffffffffffffffff80821115611ecd57600080fd5b818501915085601f830112611ee157600080fd5b815181811115611ef357611ef361168b565b8060051b611f028582016116ba565b9182528381018501918581019089841115611f1c57600080fd5b86860192505b83831015611f9457825185811115611f3a5760008081fd5b8601603f81018b13611f4c5760008081fd5b878101516040611f5e61176e83611709565b8281528d82848601011115611f735760008081fd5b611f82838c8301848701611d63565b85525050509186019190860190611f22565b9998505050505050505050565b60008251611fb3818460208701611d63565b7f2e696f0000000000000000000000000000000000000000000000000000000000920191825250600301919050565b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152808516604084015250608060608301526120236080830184611d87565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361208d5761208d611c5d565b506001019056fea2646970667358221220ea31e947b1d6148192d506ddb6935c61555d30f0d859a1ec88a65e33a4d0653b64736f6c63430008110033";

type IOTXRegistrarControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IOTXRegistrarControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IOTXRegistrarController__factory extends ContractFactory {
  constructor(...args: IOTXRegistrarControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _base: PromiseOrValue<string>,
    _prices: PromiseOrValue<string>,
    _minCommitmentAge: PromiseOrValue<BigNumberish>,
    _maxCommitmentAge: PromiseOrValue<BigNumberish>,
    _reverseRegistrar: PromiseOrValue<string>,
    _nameWrapper: PromiseOrValue<string>,
    _ins: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<IOTXRegistrarController> {
    return super.deploy(
      _base,
      _prices,
      _minCommitmentAge,
      _maxCommitmentAge,
      _reverseRegistrar,
      _nameWrapper,
      _ins,
      overrides || {}
    ) as Promise<IOTXRegistrarController>;
  }
  override getDeployTransaction(
    _base: PromiseOrValue<string>,
    _prices: PromiseOrValue<string>,
    _minCommitmentAge: PromiseOrValue<BigNumberish>,
    _maxCommitmentAge: PromiseOrValue<BigNumberish>,
    _reverseRegistrar: PromiseOrValue<string>,
    _nameWrapper: PromiseOrValue<string>,
    _ins: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _base,
      _prices,
      _minCommitmentAge,
      _maxCommitmentAge,
      _reverseRegistrar,
      _nameWrapper,
      _ins,
      overrides || {}
    );
  }
  override attach(address: string): IOTXRegistrarController {
    return super.attach(address) as IOTXRegistrarController;
  }
  override connect(signer: Signer): IOTXRegistrarController__factory {
    return super.connect(signer) as IOTXRegistrarController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IOTXRegistrarControllerInterface {
    return new utils.Interface(_abi) as IOTXRegistrarControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOTXRegistrarController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IOTXRegistrarController;
  }
}