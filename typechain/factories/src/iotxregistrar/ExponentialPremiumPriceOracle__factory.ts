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
  ExponentialPremiumPriceOracle,
  ExponentialPremiumPriceOracleInterface,
} from "../../../src/iotxregistrar/ExponentialPremiumPriceOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract AggregatorInterface",
        name: "_usdOracle",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_rentPrices",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_startPremium",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalDays",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "prices",
        type: "uint256[]",
      },
    ],
    name: "RentPriceChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_startPremium",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_elapsed",
        type: "uint256",
      },
    ],
    name: "decayedPremium",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
        name: "expires",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "premium",
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
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "price",
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
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price1Letter",
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
    name: "price2Letter",
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
    name: "price3Letter",
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
    name: "price4Letter",
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
    name: "price5Letter",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usdOracle",
    outputs: [
      {
        internalType: "contract AggregatorInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101806040523480156200001257600080fd5b50604051620011683803806200116883398101604081905262000035916200012c565b6001600160a01b0384166101205282518490849081906000906200005d576200005d62000227565b6020026020010151608081815250508060018151811062000082576200008262000227565b602002602001015160a0818152505080600281518110620000a757620000a762000227565b602002602001015160c0818152505080600381518110620000cc57620000cc62000227565b602002602001015160e0818152505080600481518110620000f157620000f162000227565b60209081029190910101516101005250506101408290521c61016052506200023d9050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156200014357600080fd5b84516001600160a01b03811681146200015b57600080fd5b602086810151919550906001600160401b03808211156200017b57600080fd5b818801915088601f8301126200019057600080fd5b815181811115620001a557620001a562000116565b8060051b604051601f19603f83011681018181108582111715620001cd57620001cd62000116565b60405291825284820192508381018501918b831115620001ec57600080fd5b938501935b828510156200020c57845184529385019392850192620001f1565b60408b01516060909b0151999c909b50975050505050505050565b634e487b7160e01b600052603260045260246000fd5b60805160a05160c05160e05161010051610120516101405161016051610e95620002d3600039600081816108d101526108fb015260006108a80152600081816101c701526107c301526000818161015301526102d401526000818161023a015261030d01526000818161018d015261033f015260008181610213015261037101526000818160f0015261039b0152610e956000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c8063a200e15311610076578063c8a4271f1161005b578063c8a4271f146101c2578063cd5d2c741461020e578063d820ed421461023557600080fd5b8063a200e15314610188578063a34e3596146101af57600080fd5b806350e9a715116100a757806350e9a7151461012057806359b6b86c1461014e57806359e1777c1461017557600080fd5b806301ffc9a7146100c35780632c0fd74c146100eb575b600080fd5b6100d66100d1366004610c55565b61025c565b60405190151581526020015b60405180910390f35b6101127f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100e2565b61013361012e366004610c97565b61026d565b604080518251815260209283015192810192909252016100e2565b6101127f000000000000000000000000000000000000000000000000000000000000000081565b610112610183366004610d16565b610433565b6101127f000000000000000000000000000000000000000000000000000000000000000081565b6101126101bd366004610c97565b6104ce565b6101e97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e2565b6101127f000000000000000000000000000000000000000000000000000000000000000081565b6101127f000000000000000000000000000000000000000000000000000000000000000081565b60006102678261051f565b92915050565b604080518082019091526000808252602082015260006102c286868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506105b792505050565b90506000600582106102ff576102f8847f0000000000000000000000000000000000000000000000000000000000000000610d67565b90506103c2565b81600403610331576102f8847f0000000000000000000000000000000000000000000000000000000000000000610d67565b81600303610363576102f8847f0000000000000000000000000000000000000000000000000000000000000000610d67565b81600203610395576102f8847f0000000000000000000000000000000000000000000000000000000000000000610d67565b6103bf847f0000000000000000000000000000000000000000000000000000000000000000610d67565b90505b60405180604001604052806103d6836107be565b81526020016104266104218a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508c92508b91506108729050565b6107be565b9052979650505050505050565b6000806201518061044c670de0b6b3a764000085610d67565b6104569190610d7e565b9050600061046c670de0b6b3a764000083610d7e565b905084811c6000610485670de0b6b3a764000084610d67565b61048f9085610db9565b90506000670de0b6b3a76400006104a98362010000610d67565b6104b39190610d7e565b905060006104c18285610935565b9998505050505050505050565b600061051661042186868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508892508791506108729050565b95945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000148061026757507fffffffff0000000000000000000000000000000000000000000000000000000082167f50e9a715000000000000000000000000000000000000000000000000000000001492915050565b8051600090819081905b808210156107b55760008583815181106105dd576105dd610dcc565b01602001517fff000000000000000000000000000000000000000000000000000000000000001690507f800000000000000000000000000000000000000000000000000000000000000081101561064057610639600184610dfb565b92506107a2565b7fe0000000000000000000000000000000000000000000000000000000000000007fff000000000000000000000000000000000000000000000000000000000000008216101561069557610639600284610dfb565b7ff0000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000821610156106ea57610639600384610dfb565b7ff8000000000000000000000000000000000000000000000000000000000000007fff000000000000000000000000000000000000000000000000000000000000008216101561073f57610639600484610dfb565b7ffc000000000000000000000000000000000000000000000000000000000000007fff000000000000000000000000000000000000000000000000000000000000008216101561079457610639600584610dfb565b61079f600684610dfb565b92505b50826107ad81610e0e565b9350506105c1565b50909392505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561082c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108509190610e46565b905080610861846305f5e100610d67565b61086b9190610d7e565b9392505050565b60006108816276a70084610dfb565b9250428311156108935750600061086b565b600061089f8442610db9565b905060006108cd7f000000000000000000000000000000000000000000000000000000000000000083610433565b90507f00000000000000000000000000000000000000000000000000000000000000008110610929576109207f000000000000000000000000000000000000000000000000000000000000000082610db9565b9250505061086b565b50600095945050505050565b6000600183161561096857670de0b6b3a764000061095b670de0ad151d09418084610d67565b6109659190610d7e565b91505b600283161561099957670de0b6b3a764000061098c670de0a3769959680084610d67565b6109969190610d7e565b91505b60048316156109ca57670de0b6b3a76400006109bd670de09039a5fa510084610d67565b6109c79190610d7e565b91505b60088316156109fb57670de0b6b3a76400006109ee670de069c00f3e120084610d67565b6109f89190610d7e565b91505b6010831615610a2c57670de0b6b3a7640000610a1f670de01cce21c9440084610d67565b610a299190610d7e565b91505b6020831615610a5d57670de0b6b3a7640000610a50670ddf82ef46ce100084610d67565b610a5a9190610d7e565b91505b6040831615610a8e57670de0b6b3a7640000610a81670dde4f458f8e8d8084610d67565b610a8b9190610d7e565b91505b6080831615610abf57670de0b6b3a7640000610ab2670ddbe84213d5f08084610d67565b610abc9190610d7e565b91505b610100831615610af157670de0b6b3a7640000610ae4670dd71b7aa6df5b8084610d67565b610aee9190610d7e565b91505b610200831615610b2357670de0b6b3a7640000610b16670dcd86e7f28cde0084610d67565b610b209190610d7e565b91505b610400831615610b5557670de0b6b3a7640000610b48670dba71a3084ad68084610d67565b610b529190610d7e565b91505b610800831615610b8757670de0b6b3a7640000610b7a670d94961b13dbde8084610d67565b610b849190610d7e565b91505b611000831615610bb957670de0b6b3a7640000610bac670d4a171c35c9838084610d67565b610bb69190610d7e565b91505b612000831615610beb57670de0b6b3a7640000610bde670cb9da519ccfb70084610d67565b610be89190610d7e565b91505b614000831615610c1d57670de0b6b3a7640000610c10670bab76d59c18d68084610d67565b610c1a9190610d7e565b91505b618000831615610c4f57670de0b6b3a7640000610c426709d025defee4df8084610d67565b610c4c9190610d7e565b91505b50919050565b600060208284031215610c6757600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461086b57600080fd5b60008060008060608587031215610cad57600080fd5b843567ffffffffffffffff80821115610cc557600080fd5b818701915087601f830112610cd957600080fd5b813581811115610ce857600080fd5b886020828501011115610cfa57600080fd5b6020928301999098509187013596604001359550909350505050565b60008060408385031215610d2957600080fd5b50508035926020909101359150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808202811582820484141761026757610267610d38565b600082610db4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b8181038181111561026757610267610d38565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8082018082111561026757610267610d38565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610e3f57610e3f610d38565b5060010190565b600060208284031215610e5857600080fd5b505191905056fea264697066735822122040e32215f5c4d4f52803934672bd02c08b762d5f50ad6e5737379f62274d415164736f6c63430008110033";

type ExponentialPremiumPriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExponentialPremiumPriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExponentialPremiumPriceOracle__factory extends ContractFactory {
  constructor(...args: ExponentialPremiumPriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _usdOracle: PromiseOrValue<string>,
    _rentPrices: PromiseOrValue<BigNumberish>[],
    _startPremium: PromiseOrValue<BigNumberish>,
    totalDays: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ExponentialPremiumPriceOracle> {
    return super.deploy(
      _usdOracle,
      _rentPrices,
      _startPremium,
      totalDays,
      overrides || {}
    ) as Promise<ExponentialPremiumPriceOracle>;
  }
  override getDeployTransaction(
    _usdOracle: PromiseOrValue<string>,
    _rentPrices: PromiseOrValue<BigNumberish>[],
    _startPremium: PromiseOrValue<BigNumberish>,
    totalDays: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _usdOracle,
      _rentPrices,
      _startPremium,
      totalDays,
      overrides || {}
    );
  }
  override attach(address: string): ExponentialPremiumPriceOracle {
    return super.attach(address) as ExponentialPremiumPriceOracle;
  }
  override connect(signer: Signer): ExponentialPremiumPriceOracle__factory {
    return super.connect(signer) as ExponentialPremiumPriceOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExponentialPremiumPriceOracleInterface {
    return new utils.Interface(_abi) as ExponentialPremiumPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExponentialPremiumPriceOracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ExponentialPremiumPriceOracle;
  }
}
