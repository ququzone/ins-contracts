/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  NameGriefer,
  NameGrieferInterface,
} from "../../../../src/wrapper/test/NameGriefer";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract INameWrapper",
        name: "_wrapper",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
    ],
    name: "destroy",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
    name: "wrapper",
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
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610ddf380380610ddf83398101604081905261002f91610136565b806001600160a01b031660a0816001600160a01b0316815250506000816001600160a01b0316636f14a0d16040518163ffffffff1660e01b8152600401602060405180830381865afa158015610089573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ad9190610136565b6001600160a01b03818116608081905260405163a22cb46560e01b815291851660048301526001602483015291925063a22cb46590604401600060405180830381600087803b1580156100ff57600080fd5b505af1158015610113573d6000803e3d6000fd5b50505050505061015a565b6001600160a01b038116811461013357600080fd5b50565b60006020828403121561014857600080fd5b81516101538161011e565b9392505050565b60805160a051610c4c610193600039600081816101050152818161027c0152818161042401526105250152600060b90152610c4c6000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063ac210cc711610050578063ac210cc714610100578063bc197c8114610127578063f23a6e611461019357600080fd5b806301ffc9a7146100775780631ca8f08e1461009f5780636f14a0d1146100b4575b600080fd5b61008a610085366004610794565b6101a6565b60405190151581526020015b60405180910390f35b6100b26100ad366004610826565b61023f565b005b6100db7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610096565b6100db7f000000000000000000000000000000000000000000000000000000000000000081565b6101626101353660046108d6565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610096565b6101626101a1366004610991565b6102ee565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061023957507f4e2312e0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6040517feb8ae53000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063eb8ae530906102b890859085903090600090600401610a09565b600060405180830381600087803b1580156102d257600080fd5b505af11580156102e6573d6000803e3d6000fd5b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff87163014610374576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f70657261746f72206d7573742062652075730000000000000000000000000060448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8616156103f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f546f6b656e206d757374206265206e6577000000000000000000000000000000604482015260640161036b565b6040517f20c38e2b000000000000000000000000000000000000000000000000000000008152600481018690526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906320c38e2b90602401600060405180830381865afa158015610480573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526104c69190810190610aaa565b90506000806104d583826105c6565b909250905060006104e68483610697565b6040517fd8c9921a00000000000000000000000000000000000000000000000000000000815260048101829052602481018590523060448201529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063d8c9921a90606401600060405180830381600087803b15801561057e57600080fd5b505af1158015610592573d6000803e3d6000fd5b507ff23a6e61000000000000000000000000000000000000000000000000000000009e9d5050505050505050505050505050565b60008083518310610633576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f726561644c6162656c3a20496e646578206f7574206f6620626f756e64730000604482015260640161036b565b600084848151811061064757610647610b92565b016020015160f81c905080156106735761066c85610666866001610bf0565b83610770565b9250610678565b600092505b6106828185610bf0565b61068d906001610bf0565b9150509250929050565b60008060006106a685856105c6565b90925090508161073257600185516106be9190610c03565b8414610726576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f6e616d65686173683a204a756e6b20617420656e64206f66206e616d65000000604482015260640161036b565b50600091506102399050565b61073c8582610697565b6040805160208101929092528101839052606001604051602081830303815290604052805190602001209250505092915050565b825160009061077f8385610bf0565b111561078a57600080fd5b5091016020012090565b6000602082840312156107a657600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146107d657600080fd5b9392505050565b60008083601f8401126107ef57600080fd5b50813567ffffffffffffffff81111561080757600080fd5b60208301915083602082850101111561081f57600080fd5b9250929050565b6000806020838503121561083957600080fd5b823567ffffffffffffffff81111561085057600080fd5b61085c858286016107dd565b90969095509350505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461088c57600080fd5b919050565b60008083601f8401126108a357600080fd5b50813567ffffffffffffffff8111156108bb57600080fd5b6020830191508360208260051b850101111561081f57600080fd5b60008060008060008060008060a0898b0312156108f257600080fd5b6108fb89610868565b975061090960208a01610868565b9650604089013567ffffffffffffffff8082111561092657600080fd5b6109328c838d01610891565b909850965060608b013591508082111561094b57600080fd5b6109578c838d01610891565b909650945060808b013591508082111561097057600080fd5b5061097d8b828c016107dd565b999c989b5096995094979396929594505050565b60008060008060008060a087890312156109aa57600080fd5b6109b387610868565b95506109c160208801610868565b94506040870135935060608701359250608087013567ffffffffffffffff8111156109eb57600080fd5b6109f789828a016107dd565b979a9699509497509295939492505050565b60608152836060820152838560808301376000608085830181019190915273ffffffffffffffffffffffffffffffffffffffff9384166020830152919092166040830152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020808385031215610abd57600080fd5b825167ffffffffffffffff80821115610ad557600080fd5b818501915085601f830112610ae957600080fd5b815181811115610afb57610afb610a7b565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715610b4157610b41610a7b565b816040528281528886848701011115610b5957600080fd5b600093505b82841015610b7b5784840186015181850187015292850192610b5e565b600086848301015280965050505050505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561023957610239610bc1565b8181038181111561023957610239610bc156fea26469706673582212209eaef661bc3e9d7661447ae56d7f0f159fbfc7460f4f4dc1bfb7790d9a92b76864736f6c63430008110033";

type NameGrieferConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NameGrieferConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NameGriefer__factory extends ContractFactory {
  constructor(...args: NameGrieferConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _wrapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NameGriefer> {
    return super.deploy(_wrapper, overrides || {}) as Promise<NameGriefer>;
  }
  override getDeployTransaction(
    _wrapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_wrapper, overrides || {});
  }
  override attach(address: string): NameGriefer {
    return super.attach(address) as NameGriefer;
  }
  override connect(signer: Signer): NameGriefer__factory {
    return super.connect(signer) as NameGriefer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NameGrieferInterface {
    return new utils.Interface(_abi) as NameGrieferInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NameGriefer {
    return new Contract(address, _abi, signerOrProvider) as NameGriefer;
  }
}