/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20Recoverable,
  ERC20RecoverableInterface,
} from "../../../src/utils/ERC20Recoverable";

const _abi = [
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
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6103f98061007e6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635d3590d514610051578063715018a6146100665780638da5cb5b1461006e578063f2fde38b1461009a575b600080fd5b61006461005f366004610343565b6100ad565b005b610064610154565b6000546040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100646100a836600461037f565b610168565b6100b5610224565b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303816000875af115801561012a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014e91906103a1565b50505050565b61015c610224565b61016660006102a5565b565b610170610224565b73ffffffffffffffffffffffffffffffffffffffff8116610218576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b610221816102a5565b50565b60005473ffffffffffffffffffffffffffffffffffffffff163314610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161020f565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461033e57600080fd5b919050565b60008060006060848603121561035857600080fd5b6103618461031a565b925061036f6020850161031a565b9150604084013590509250925092565b60006020828403121561039157600080fd5b61039a8261031a565b9392505050565b6000602082840312156103b357600080fd5b8151801515811461039a57600080fdfea2646970667358221220aea088e5b05496060fdb9d78eedda73c907177204f5b253dd5b9bfcead8f8b8364736f6c63430008110033";

type ERC20RecoverableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20RecoverableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Recoverable__factory extends ContractFactory {
  constructor(...args: ERC20RecoverableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Recoverable> {
    return super.deploy(overrides || {}) as Promise<ERC20Recoverable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20Recoverable {
    return super.attach(address) as ERC20Recoverable;
  }
  override connect(signer: Signer): ERC20Recoverable__factory {
    return super.connect(signer) as ERC20Recoverable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20RecoverableInterface {
    return new utils.Interface(_abi) as ERC20RecoverableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Recoverable {
    return new Contract(address, _abi, signerOrProvider) as ERC20Recoverable;
  }
}