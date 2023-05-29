/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AggregatorProxy,
  AggregatorProxyInterface,
} from "../../../../src/iotxregistrar/StablePriceOracle.sol/AggregatorProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_old",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161022138038061022183398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b61018e806100936000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806350d25bcd14610030575b600080fd5b61003861004a565b60405190815260200160405180910390f35b60008054604080517ffeaf968c0000000000000000000000000000000000000000000000000000000081529051839273ffffffffffffffffffffffffffffffffffffffff169163feaf968c9160048083019260a09291908290030181865afa1580156100ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100de9190610108565b509195945050505050565b805169ffffffffffffffffffff8116811461010357600080fd5b919050565b600080600080600060a0868803121561012057600080fd5b610129866100e9565b945060208601519350604086015192506060860151915061014c608087016100e9565b9050929550929590935056fea26469706673582212206ed32051411cc9c6234c1b99eaf628b23a7b06c049082249c62ad4ac8f639dcb64736f6c63430008110033";

type AggregatorProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AggregatorProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AggregatorProxy__factory extends ContractFactory {
  constructor(...args: AggregatorProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _old: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AggregatorProxy> {
    return super.deploy(_old, overrides || {}) as Promise<AggregatorProxy>;
  }
  override getDeployTransaction(
    _old: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_old, overrides || {});
  }
  override attach(address: string): AggregatorProxy {
    return super.attach(address) as AggregatorProxy;
  }
  override connect(signer: Signer): AggregatorProxy__factory {
    return super.connect(signer) as AggregatorProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AggregatorProxyInterface {
    return new utils.Interface(_abi) as AggregatorProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AggregatorProxy {
    return new Contract(address, _abi, signerOrProvider) as AggregatorProxy;
  }
}