/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ZeroWidthNameChecker,
  ZeroWidthNameCheckerInterface,
} from "../../../src/iotxregistrar/ZeroWidthNameChecker";

const _abi = [
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610611806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80639791c09714610030575b600080fd5b61004361003e3660046104b9565b610057565b604051901515815260200160405180910390f35b6000600361006483610330565b101561007257506000919050565b8160005b600282516100849190610580565b8110156103265781818151811061009d5761009d610599565b6020910101516001600160f81b0319167fe2000000000000000000000000000000000000000000000000000000000000001480156101095750816100e28260016105af565b815181106100f2576100f2610599565b6020910101516001600160f81b031916600160ff1b145b1561021a578161011a8260026105af565b8151811061012a5761012a610599565b6020910101516001600160f81b0319167f8b0000000000000000000000000000000000000000000000000000000000000014806101b157508161016e8260026105af565b8151811061017e5761017e610599565b6020910101516001600160f81b0319167f8c00000000000000000000000000000000000000000000000000000000000000145b806102065750816101c38260026105af565b815181106101d3576101d3610599565b6020910101516001600160f81b0319167f8d00000000000000000000000000000000000000000000000000000000000000145b15610215575060009392505050565b610314565b81818151811061022c5761022c610599565b01602001516001600160f81b0319167fef0000000000000000000000000000000000000000000000000000000000000003610314578161026d8260016105af565b8151811061027d5761027d610599565b6020910101516001600160f81b0319167fbb000000000000000000000000000000000000000000000000000000000000001480156103055750816102c28260026105af565b815181106102d2576102d2610599565b6020910101516001600160f81b0319167fbf00000000000000000000000000000000000000000000000000000000000000145b15610314575060009392505050565b8061031e816105c2565b915050610076565b5060019392505050565b8051600090819081905b8082101561049a57600085838151811061035657610356610599565b01602001516001600160f81b0319169050600160ff1b8110156103855761037e6001846105af565b9250610487565b7fe0000000000000000000000000000000000000000000000000000000000000006001600160f81b0319821610156103c25761037e6002846105af565b7ff0000000000000000000000000000000000000000000000000000000000000006001600160f81b0319821610156103ff5761037e6003846105af565b7ff8000000000000000000000000000000000000000000000000000000000000006001600160f81b03198216101561043c5761037e6004846105af565b7ffc000000000000000000000000000000000000000000000000000000000000006001600160f81b0319821610156104795761037e6005846105af565b6104846006846105af565b92505b5082610492816105c2565b93505061033a565b50909392505050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156104cb57600080fd5b813567ffffffffffffffff808211156104e357600080fd5b818401915084601f8301126104f757600080fd5b813581811115610509576105096104a3565b604051601f8201601f19908116603f01168101908382118183101715610531576105316104a3565b8160405282815287602084870101111561054a57600080fd5b826020860160208301376000928101602001929092525095945050505050565b634e487b7160e01b600052601160045260246000fd5b818103818111156105935761059361056a565b92915050565b634e487b7160e01b600052603260045260246000fd5b808201808211156105935761059361056a565b6000600182016105d4576105d461056a565b506001019056fea2646970667358221220ddfe21e14b08b9e2883b0e715a3383dc16b6c5e2e8e044ce35d52a34a9a546fe64736f6c63430008110033";

type ZeroWidthNameCheckerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZeroWidthNameCheckerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZeroWidthNameChecker__factory extends ContractFactory {
  constructor(...args: ZeroWidthNameCheckerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZeroWidthNameChecker> {
    return super.deploy(overrides || {}) as Promise<ZeroWidthNameChecker>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ZeroWidthNameChecker {
    return super.attach(address) as ZeroWidthNameChecker;
  }
  override connect(signer: Signer): ZeroWidthNameChecker__factory {
    return super.connect(signer) as ZeroWidthNameChecker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZeroWidthNameCheckerInterface {
    return new utils.Interface(_abi) as ZeroWidthNameCheckerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZeroWidthNameChecker {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ZeroWidthNameChecker;
  }
}