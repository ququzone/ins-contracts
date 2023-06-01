/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  StaticBulkRenewal,
  StaticBulkRenewalInterface,
} from "../../../src/iotxregistrar/StaticBulkRenewal";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IOTXRegistrarController",
        name: "_controller",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
  "0x608060405234801561001057600080fd5b5060405161066138038061066183398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6105ce806100936000396000f3fe6080604052600436106100345760003560e01c806301ffc9a7146100395780633971d4671461006e578063e8d6dbb41461009c575b600080fd5b34801561004557600080fd5b506100596100543660046103b9565b6100b1565b60405190151581526020015b60405180910390f35b34801561007a57600080fd5b5061008e610089366004610402565b61014a565b604051908152602001610065565b6100af6100aa366004610402565b610218565b005b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000148061014457507fffffffff0000000000000000000000000000000000000000000000000000000082167fd1a70fd300000000000000000000000000000000000000000000000000000000145b92915050565b600082815b8181101561020f576000805473ffffffffffffffffffffffffffffffffffffffff166383e7f6ff8888858181106101885761018861047d565b905060200281019061019a9190610493565b886040518463ffffffff1660e01b81526004016101b9939291906104e1565b6040805180830381865afa1580156101d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f9919061051a565b602081015190510193909301925060010161014f565b50509392505050565b816000805b82811015610384576000805473ffffffffffffffffffffffffffffffffffffffff166383e7f6ff8888858181106102565761025661047d565b90506020028101906102689190610493565b886040518463ffffffff1660e01b8152600401610287939291906104e1565b6040805180830381865afa1580156102a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c7919061051a565b90506000816020015182600001516102df9190610577565b60005490915073ffffffffffffffffffffffffffffffffffffffff1663acf1a841828a8a878181106103135761031361047d565b90506020028101906103259190610493565b8a6040518563ffffffff1660e01b8152600401610344939291906104e1565b6000604051808303818588803b15801561035d57600080fd5b505af1158015610371573d6000803e3d6000fd5b505050919094019350505060010161021d565b5060405133904780156108fc02916000818181858888f193505050501580156103b1573d6000803e3d6000fd5b505050505050565b6000602082840312156103cb57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146103fb57600080fd5b9392505050565b60008060006040848603121561041757600080fd5b833567ffffffffffffffff8082111561042f57600080fd5b818601915086601f83011261044357600080fd5b81358181111561045257600080fd5b8760208260051b850101111561046757600080fd5b6020928301989097509590910135949350505050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e198436030181126104aa57600080fd5b83018035915067ffffffffffffffff8211156104c557600080fd5b6020019150368190038213156104da57600080fd5b9250929050565b604081528260408201528284606083013760006060848301015260006060601f19601f8601168301019050826020830152949350505050565b60006040828403121561052c57600080fd5b6040516040810181811067ffffffffffffffff8211171561055d57634e487b7160e01b600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b8082018082111561014457634e487b7160e01b600052601160045260246000fdfea2646970667358221220ce9e5bec6ff73812c64fa9a638a383764991fb2b57951026791c944fd723932064736f6c63430008110033";

type StaticBulkRenewalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StaticBulkRenewalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StaticBulkRenewal__factory extends ContractFactory {
  constructor(...args: StaticBulkRenewalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _controller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StaticBulkRenewal> {
    return super.deploy(
      _controller,
      overrides || {}
    ) as Promise<StaticBulkRenewal>;
  }
  override getDeployTransaction(
    _controller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_controller, overrides || {});
  }
  override attach(address: string): StaticBulkRenewal {
    return super.attach(address) as StaticBulkRenewal;
  }
  override connect(signer: Signer): StaticBulkRenewal__factory {
    return super.connect(signer) as StaticBulkRenewal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StaticBulkRenewalInterface {
    return new utils.Interface(_abi) as StaticBulkRenewalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StaticBulkRenewal {
    return new Contract(address, _abi, signerOrProvider) as StaticBulkRenewal;
  }
}
