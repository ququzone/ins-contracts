/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BulkRenewal,
  BulkRenewalInterface,
} from "../../../src/iotxregistrar/BulkRenewal";

const _abi = [
  {
    inputs: [
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
        internalType: "string[]",
        name: "names",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "renewAll",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "names",
        type: "string[]",
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
        internalType: "uint256",
        name: "total",
        type: "uint256",
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
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161094538038061094583398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516108b46100916000396000818160b9015261048501526108b46000f3fe60806040526004361061003f5760003560e01c806301ffc9a7146100445780633971d467146100795780636f14a0d1146100a7578063e8d6dbb414610100575b600080fd5b34801561005057600080fd5b5061006461005f3660046105e2565b610115565b60405190151581526020015b60405180910390f35b34801561008557600080fd5b5061009961009436600461062b565b6101ae565b604051908152602001610070565b3480156100b357600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610070565b61011361010e36600461062b565b610288565b005b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a70000000000000000000000000000000000000000000000000000000014806101a857507fffffffff0000000000000000000000000000000000000000000000000000000082167fd1a70fd300000000000000000000000000000000000000000000000000000000145b92915050565b6000806101b9610432565b90508360005b8181101561027e5760008373ffffffffffffffffffffffffffffffffffffffff166383e7f6ff8989858181106101f7576101f76106a6565b905060200281019061020991906106d5565b896040518463ffffffff1660e01b815260040161022893929190610741565b6040805180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610798565b60208101519051019490940193506001016101bf565b5050509392505050565b6000610292610432565b9050826000805b828110156103fc5760008473ffffffffffffffffffffffffffffffffffffffff166383e7f6ff8989858181106102d1576102d16106a6565b90506020028101906102e391906106d5565b896040518463ffffffff1660e01b815260040161030293929190610741565b6040805180830381865afa15801561031e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103429190610798565b905060008160200151826000015161035a919061080e565b90508573ffffffffffffffffffffffffffffffffffffffff1663acf1a841828b8b8781811061038b5761038b6106a6565b905060200281019061039d91906106d5565b8b6040518563ffffffff1660e01b81526004016103bc93929190610741565b6000604051808303818588803b1580156103d557600080fd5b505af11580156103e9573d6000803e3d6000fd5b5050509190940193505050600101610299565b5060405133904780156108fc02916000818181858888f19350505050158015610429573d6000803e3d6000fd5b50505050505050565b6040517f0178b8bf0000000000000000000000000000000000000000000000000000000081527fb2b692c69df4aa3b0a24634d20a3ba1b44c3299d09d6c4377577e20b09e68395600482015260009081907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690630178b8bf90602401602060405180830381865afa1580156104e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105059190610848565b6040517f124a319c0000000000000000000000000000000000000000000000000000000081527fb2b692c69df4aa3b0a24634d20a3ba1b44c3299d09d6c4377577e20b09e6839560048201527f612e8c0900000000000000000000000000000000000000000000000000000000602482015290915073ffffffffffffffffffffffffffffffffffffffff82169063124a319c90604401602060405180830381865afa1580156105b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105dc9190610848565b91505090565b6000602082840312156105f457600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461062457600080fd5b9392505050565b60008060006040848603121561064057600080fd5b833567ffffffffffffffff8082111561065857600080fd5b818601915086601f83011261066c57600080fd5b81358181111561067b57600080fd5b8760208260051b850101111561069057600080fd5b6020928301989097509590910135949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261070a57600080fd5b83018035915067ffffffffffffffff82111561072557600080fd5b60200191503681900382131561073a57600080fd5b9250929050565b6040815282604082015282846060830137600060608483010152600060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601168301019050826020830152949350505050565b6000604082840312156107aa57600080fd5b6040516040810181811067ffffffffffffffff821117156107f4577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b808201808211156101a8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561085a57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461062457600080fdfea26469706673582212202cb64704a90339f80d1d78305301385b4fc2e460cf38e44534f865013c12670764736f6c63430008110033";

type BulkRenewalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BulkRenewalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BulkRenewal__factory extends ContractFactory {
  constructor(...args: BulkRenewalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ins: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BulkRenewal> {
    return super.deploy(_ins, overrides || {}) as Promise<BulkRenewal>;
  }
  override getDeployTransaction(
    _ins: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ins, overrides || {});
  }
  override attach(address: string): BulkRenewal {
    return super.attach(address) as BulkRenewal;
  }
  override connect(signer: Signer): BulkRenewal__factory {
    return super.connect(signer) as BulkRenewal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BulkRenewalInterface {
    return new utils.Interface(_abi) as BulkRenewalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BulkRenewal {
    return new Contract(address, _abi, signerOrProvider) as BulkRenewal;
  }
}
