/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestHexUtils,
  TestHexUtilsInterface,
} from "../../../src/utils/TestHexUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastInx",
        type: "uint256",
      },
    ],
    name: "hexStringToBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
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
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastInx",
        type: "uint256",
      },
    ],
    name: "hexToAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
  "0x608060405234801561001057600080fd5b506103a2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633a2988c01461003b578063437276d41461007f575b600080fd5b61004e6100493660046102ad565b6100a7565b6040805173ffffffffffffffffffffffffffffffffffffffff90931683529015156020830152015b60405180910390f35b61009261008d3660046102ad565b6100fc565b60408051928352901515602083015201610076565b6000806100ef848488888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509294939250506101449050565b9150915094509492505050565b6000806100ef848488888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509294939250506101829050565b6000806028610153858561032c565b10156101645750600090508061017a565b600080610172878787610182565b909450925050505b935093915050565b825160009060019083111561019657600080fd5b610241565b6000603a8210602f831116156101d157507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd00190565b6047821060408311161561020557507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc90190565b6067821060608311161561023957507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa90190565b5060ff919050565b60208501845b848110156102a35761025e8183015160001a61019b565b6102706001830184015160001a61019b565b60ff811460ff83141715610289576000945050506102a3565b60049190911b1760089490941b9390931792600201610247565b5050935093915050565b600080600080606085870312156102c357600080fd5b843567ffffffffffffffff808211156102db57600080fd5b818701915087601f8301126102ef57600080fd5b8135818111156102fe57600080fd5b88602082850101111561031057600080fd5b6020928301999098509187013596604001359550909350505050565b81810381811115610366577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9291505056fea2646970667358221220effd2ee5da1ddecaa612153cbf54acb4c5104f1c01b1c6cf30def75a50cb8a9164736f6c63430008110033";

type TestHexUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestHexUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestHexUtils__factory extends ContractFactory {
  constructor(...args: TestHexUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestHexUtils> {
    return super.deploy(overrides || {}) as Promise<TestHexUtils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestHexUtils {
    return super.attach(address) as TestHexUtils;
  }
  override connect(signer: Signer): TestHexUtils__factory {
    return super.connect(signer) as TestHexUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestHexUtilsInterface {
    return new utils.Interface(_abi) as TestHexUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestHexUtils {
    return new Contract(address, _abi, signerOrProvider) as TestHexUtils;
  }
}