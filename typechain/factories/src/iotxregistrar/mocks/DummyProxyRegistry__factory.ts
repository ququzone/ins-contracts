/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  DummyProxyRegistry,
  DummyProxyRegistryInterface,
} from "../../../../src/iotxregistrar/mocks/DummyProxyRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "proxies",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161018138038061018183398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b60ef806100926000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063c455279114602d575b600080fd5b60556038366004607e565b5060005473ffffffffffffffffffffffffffffffffffffffff1690565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b600060208284031215608f57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811460b257600080fd5b939250505056fea2646970667358221220ae3d5cb7ce1ca7589d758885f7ac8683b6b3dda751e3550ceb84b9a21699313164736f6c63430008110033";

type DummyProxyRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DummyProxyRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DummyProxyRegistry__factory extends ContractFactory {
  constructor(...args: DummyProxyRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _target: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DummyProxyRegistry> {
    return super.deploy(
      _target,
      overrides || {}
    ) as Promise<DummyProxyRegistry>;
  }
  override getDeployTransaction(
    _target: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_target, overrides || {});
  }
  override attach(address: string): DummyProxyRegistry {
    return super.attach(address) as DummyProxyRegistry;
  }
  override connect(signer: Signer): DummyProxyRegistry__factory {
    return super.connect(signer) as DummyProxyRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DummyProxyRegistryInterface {
    return new utils.Interface(_abi) as DummyProxyRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyProxyRegistry {
    return new Contract(address, _abi, signerOrProvider) as DummyProxyRegistry;
  }
}
