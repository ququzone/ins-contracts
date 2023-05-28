/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ReverseClaimer,
  ReverseClaimerInterface,
} from "../../../src/reverseRegistrar/ReverseClaimer";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract INS",
        name: "ins",
        type: "address",
      },
      {
        internalType: "address",
        name: "claimant",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161020f38038061020f83398101604081905261002f9161014b565b6040516302571be360e01b81527f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260048201526000906001600160a01b038416906302571be390602401602060405180830381865afa158015610096573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ba9190610185565b604051630f41a04d60e11b81526001600160a01b03848116600483015291925090821690631e83409a906024016020604051808303816000875af1158015610106573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061012a91906101a9565b505050506101c2565b6001600160a01b038116811461014857600080fd5b50565b6000806040838503121561015e57600080fd5b825161016981610133565b602084015190925061017a81610133565b809150509250929050565b60006020828403121561019757600080fd5b81516101a281610133565b9392505050565b6000602082840312156101bb57600080fd5b5051919050565b603f806101d06000396000f3fe6080604052600080fdfea264697066735822122012ec4e017071c5a71538203e3a239443c476bf19e400a6c9d9e43ce2674b826164736f6c63430008110033";

type ReverseClaimerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReverseClaimerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReverseClaimer__factory extends ContractFactory {
  constructor(...args: ReverseClaimerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    ins: PromiseOrValue<string>,
    claimant: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReverseClaimer> {
    return super.deploy(
      ins,
      claimant,
      overrides || {}
    ) as Promise<ReverseClaimer>;
  }
  override getDeployTransaction(
    ins: PromiseOrValue<string>,
    claimant: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(ins, claimant, overrides || {});
  }
  override attach(address: string): ReverseClaimer {
    return super.attach(address) as ReverseClaimer;
  }
  override connect(signer: Signer): ReverseClaimer__factory {
    return super.connect(signer) as ReverseClaimer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReverseClaimerInterface {
    return new utils.Interface(_abi) as ReverseClaimerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReverseClaimer {
    return new Contract(address, _abi, signerOrProvider) as ReverseClaimer;
  }
}