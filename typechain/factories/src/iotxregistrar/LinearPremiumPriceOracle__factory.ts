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
  LinearPremiumPriceOracle,
  LinearPremiumPriceOracleInterface,
} from "../../../src/iotxregistrar/LinearPremiumPriceOracle";

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
        name: "_initialPremium",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_premiumDecreaseRate",
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
    inputs: [],
    name: "initialPremium",
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
    inputs: [],
    name: "premiumDecreaseRate",
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
    inputs: [
      {
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "timeUntilPremium",
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
  "0x6101a06040526276a700610140523480156200001a57600080fd5b50604051620010ad380380620010ad8339810160408190526200003d9162000134565b6001600160a01b0384166101205282518490849081906000906200006557620000656200022f565b602002602001015160808181525050806001815181106200008a576200008a6200022f565b602002602001015160a0818152505080600281518110620000af57620000af6200022f565b602002602001015160c0818152505080600381518110620000d457620000d46200022f565b602002602001015160e0818152505080600481518110620000f957620000f96200022f565b6020908102919091010151610100525050610160919091526101805250620002459050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156200014b57600080fd5b84516001600160a01b03811681146200016357600080fd5b602086810151919550906001600160401b03808211156200018357600080fd5b818801915088601f8301126200019857600080fd5b815181811115620001ad57620001ad6200011e565b8060051b604051601f19603f83011681018181108582111715620001d557620001d56200011e565b60405291825284820192508381018501918b831115620001f457600080fd5b938501935b828510156200021457845184529385019392850192620001f9565b60408b01516060909b0151999c909b50975050505050505050565b634e487b7160e01b600052603260045260246000fd5b60805160a05160c05160e0516101005161012051610140516101605161018051610d95620003186000396000818161029e015281816105cf01526109a101526000818161019001528181610542015281816105a0015281816109ca0152610a00015260008181610573015261095a0152600081816101f1015281816108a30152610a29015260008181610169015261038301526000818161026401526103bc0152600081816101b701526103ee01526000818161023d0152610420015260008181610106015261044a0152610d956000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c8063a34e359611610081578063d820ed421161005b578063d820ed421461025f578063ed6c33ed14610286578063f05af2b71461029957600080fd5b8063a34e3596146101d9578063c8a4271f146101ec578063cd5d2c741461023857600080fd5b806359b6b86c116100b257806359b6b86c146101645780637d3fb8b71461018b578063a200e153146101b257600080fd5b806301ffc9a7146100d95780632c0fd74c1461010157806350e9a71514610136575b600080fd5b6100ec6100e7366004610b55565b6102c0565b60405190151581526020015b60405180910390f35b6101287f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100f8565b610149610144366004610b97565b61031c565b604080518251815260209283015192810192909252016100f8565b6101287f000000000000000000000000000000000000000000000000000000000000000081565b6101287f000000000000000000000000000000000000000000000000000000000000000081565b6101287f000000000000000000000000000000000000000000000000000000000000000081565b6101286101e7366004610b97565b6104e2565b6102137f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100f8565b6101287f000000000000000000000000000000000000000000000000000000000000000081565b6101287f000000000000000000000000000000000000000000000000000000000000000081565b610128610294366004610c16565b610533565b6101287f000000000000000000000000000000000000000000000000000000000000000081565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fa377dd960000000000000000000000000000000000000000000000000000000014806103165750610316826105ff565b92915050565b6040805180820190915260008082526020820152600061037186868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061069792505050565b90506000600582106103ae576103a7847f0000000000000000000000000000000000000000000000000000000000000000610c67565b9050610471565b816004036103e0576103a7847f0000000000000000000000000000000000000000000000000000000000000000610c67565b81600303610412576103a7847f0000000000000000000000000000000000000000000000000000000000000000610c67565b81600203610444576103a7847f0000000000000000000000000000000000000000000000000000000000000000610c67565b61046e847f0000000000000000000000000000000000000000000000000000000000000000610c67565b90505b60405180604001604052806104858361089e565b81526020016104d56104d08a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508c92508b91506109529050565b61089e565b9052979650505050505050565b600061052a6104d086868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508892508791506109529050565b95945050505050565b600061053e82610a24565b91507f000000000000000000000000000000000000000000000000000000000000000082111561056d57600080fd5b610597837f0000000000000000000000000000000000000000000000000000000000000000610ac7565b925060006105c57f000000000000000000000000000000000000000000000000000000000000000084610ae3565b905060006105f3827f0000000000000000000000000000000000000000000000000000000000000000610b06565b905061052a8582610ac7565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000148061031657507fffffffff0000000000000000000000000000000000000000000000000000000082167f50e9a715000000000000000000000000000000000000000000000000000000001492915050565b8051600090819081905b808210156108955760008583815181106106bd576106bd610c7e565b01602001517fff000000000000000000000000000000000000000000000000000000000000001690507f800000000000000000000000000000000000000000000000000000000000000081101561072057610719600184610cad565b9250610882565b7fe0000000000000000000000000000000000000000000000000000000000000007fff000000000000000000000000000000000000000000000000000000000000008216101561077557610719600284610cad565b7ff0000000000000000000000000000000000000000000000000000000000000007fff00000000000000000000000000000000000000000000000000000000000000821610156107ca57610719600384610cad565b7ff8000000000000000000000000000000000000000000000000000000000000007fff000000000000000000000000000000000000000000000000000000000000008216101561081f57610719600484610cad565b7ffc000000000000000000000000000000000000000000000000000000000000007fff000000000000000000000000000000000000000000000000000000000000008216101561087457610719600584610cad565b61087f600684610cad565b92505b508261088d81610cc0565b9350506106a1565b50909392505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561090c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109309190610cf8565b905080610941846305f5e100610c67565b61094b9190610d11565b9392505050565b600061097e837f0000000000000000000000000000000000000000000000000000000000000000610ac7565b9250428311156109905750600061094b565b60006109c661099f4286610ae3565b7f000000000000000000000000000000000000000000000000000000000000000090610b20565b90507f00000000000000000000000000000000000000000000000000000000000000008111156109fa57600091505061094b565b61052a817f0000000000000000000000000000000000000000000000000000000000000000610d4c565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab69190610cf8565b90506305f5e1006109418285610c67565b600080610ad48385610cad565b90508381101561094b57600080fd5b600082821115610af257600080fd5b6000610afe8385610d4c565b949350505050565b6000808211610b1457600080fd5b6000610afe8385610d11565b600082600003610b3257506000610316565b6000610b3e8385610c67565b905082610b4b8583610d11565b1461094b57600080fd5b600060208284031215610b6757600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461094b57600080fd5b60008060008060608587031215610bad57600080fd5b843567ffffffffffffffff80821115610bc557600080fd5b818701915087601f830112610bd957600080fd5b813581811115610be857600080fd5b886020828501011115610bfa57600080fd5b6020928301999098509187013596604001359550909350505050565b60008060408385031215610c2957600080fd5b50508035926020909101359150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808202811582820484141761031657610316610c38565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8082018082111561031657610316610c38565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610cf157610cf1610c38565b5060010190565b600060208284031215610d0a57600080fd5b5051919050565b600082610d47577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b8181038181111561031657610316610c3856fea2646970667358221220cce610c3b1e88e7591b73fe3739ff2b47091d9f39e58298687cbd5f22afce50664736f6c63430008110033";

type LinearPremiumPriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LinearPremiumPriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LinearPremiumPriceOracle__factory extends ContractFactory {
  constructor(...args: LinearPremiumPriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _usdOracle: PromiseOrValue<string>,
    _rentPrices: PromiseOrValue<BigNumberish>[],
    _initialPremium: PromiseOrValue<BigNumberish>,
    _premiumDecreaseRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LinearPremiumPriceOracle> {
    return super.deploy(
      _usdOracle,
      _rentPrices,
      _initialPremium,
      _premiumDecreaseRate,
      overrides || {}
    ) as Promise<LinearPremiumPriceOracle>;
  }
  override getDeployTransaction(
    _usdOracle: PromiseOrValue<string>,
    _rentPrices: PromiseOrValue<BigNumberish>[],
    _initialPremium: PromiseOrValue<BigNumberish>,
    _premiumDecreaseRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _usdOracle,
      _rentPrices,
      _initialPremium,
      _premiumDecreaseRate,
      overrides || {}
    );
  }
  override attach(address: string): LinearPremiumPriceOracle {
    return super.attach(address) as LinearPremiumPriceOracle;
  }
  override connect(signer: Signer): LinearPremiumPriceOracle__factory {
    return super.connect(signer) as LinearPremiumPriceOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LinearPremiumPriceOracleInterface {
    return new utils.Interface(_abi) as LinearPremiumPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LinearPremiumPriceOracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LinearPremiumPriceOracle;
  }
}