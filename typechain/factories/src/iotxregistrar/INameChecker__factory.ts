/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  INameChecker,
  INameCheckerInterface,
} from "../../../src/iotxregistrar/INameChecker";

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
    stateMutability: "view",
    type: "function",
  },
] as const;

export class INameChecker__factory {
  static readonly abi = _abi;
  static createInterface(): INameCheckerInterface {
    return new utils.Interface(_abi) as INameCheckerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INameChecker {
    return new Contract(address, _abi, signerOrProvider) as INameChecker;
  }
}
