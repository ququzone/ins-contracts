/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace IPriceOracle {
  export type PriceStruct = {
    base: PromiseOrValue<BigNumberish>;
    premium: PromiseOrValue<BigNumberish>;
  };

  export type PriceStructOutput = [BigNumber, BigNumber] & {
    base: BigNumber;
    premium: BigNumber;
  };
}

export interface ExponentialPremiumPriceOracleInterface
  extends utils.Interface {
  functions: {
    "decayedPremium(uint256,uint256)": FunctionFragment;
    "premium(string,uint256,uint256)": FunctionFragment;
    "price(string,uint256,uint256)": FunctionFragment;
    "price1Letter()": FunctionFragment;
    "price2Letter()": FunctionFragment;
    "price3Letter()": FunctionFragment;
    "price4Letter()": FunctionFragment;
    "price5Letter()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "usdOracle()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "decayedPremium"
      | "premium"
      | "price"
      | "price1Letter"
      | "price2Letter"
      | "price3Letter"
      | "price4Letter"
      | "price5Letter"
      | "supportsInterface"
      | "usdOracle"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "decayedPremium",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "premium",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "price",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "price1Letter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price2Letter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price3Letter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price4Letter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price5Letter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "usdOracle", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "decayedPremium",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "premium", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "price1Letter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "price2Letter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "price3Letter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "price4Letter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "price5Letter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdOracle", data: BytesLike): Result;

  events: {
    "RentPriceChanged(uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RentPriceChanged"): EventFragment;
}

export interface RentPriceChangedEventObject {
  prices: BigNumber[];
}
export type RentPriceChangedEvent = TypedEvent<
  [BigNumber[]],
  RentPriceChangedEventObject
>;

export type RentPriceChangedEventFilter =
  TypedEventFilter<RentPriceChangedEvent>;

export interface ExponentialPremiumPriceOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExponentialPremiumPriceOracleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    decayedPremium(
      _startPremium: PromiseOrValue<BigNumberish>,
      _elapsed: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    premium(
      name: PromiseOrValue<string>,
      expires: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    price(
      name: PromiseOrValue<string>,
      expires: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IPriceOracle.PriceStructOutput]>;

    price1Letter(overrides?: CallOverrides): Promise<[BigNumber]>;

    price2Letter(overrides?: CallOverrides): Promise<[BigNumber]>;

    price3Letter(overrides?: CallOverrides): Promise<[BigNumber]>;

    price4Letter(overrides?: CallOverrides): Promise<[BigNumber]>;

    price5Letter(overrides?: CallOverrides): Promise<[BigNumber]>;

    supportsInterface(
      interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    usdOracle(overrides?: CallOverrides): Promise<[string]>;
  };

  decayedPremium(
    _startPremium: PromiseOrValue<BigNumberish>,
    _elapsed: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  premium(
    name: PromiseOrValue<string>,
    expires: PromiseOrValue<BigNumberish>,
    duration: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  price(
    name: PromiseOrValue<string>,
    expires: PromiseOrValue<BigNumberish>,
    duration: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IPriceOracle.PriceStructOutput>;

  price1Letter(overrides?: CallOverrides): Promise<BigNumber>;

  price2Letter(overrides?: CallOverrides): Promise<BigNumber>;

  price3Letter(overrides?: CallOverrides): Promise<BigNumber>;

  price4Letter(overrides?: CallOverrides): Promise<BigNumber>;

  price5Letter(overrides?: CallOverrides): Promise<BigNumber>;

  supportsInterface(
    interfaceID: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  usdOracle(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    decayedPremium(
      _startPremium: PromiseOrValue<BigNumberish>,
      _elapsed: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    premium(
      name: PromiseOrValue<string>,
      expires: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    price(
      name: PromiseOrValue<string>,
      expires: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IPriceOracle.PriceStructOutput>;

    price1Letter(overrides?: CallOverrides): Promise<BigNumber>;

    price2Letter(overrides?: CallOverrides): Promise<BigNumber>;

    price3Letter(overrides?: CallOverrides): Promise<BigNumber>;

    price4Letter(overrides?: CallOverrides): Promise<BigNumber>;

    price5Letter(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    usdOracle(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "RentPriceChanged(uint256[])"(prices?: null): RentPriceChangedEventFilter;
    RentPriceChanged(prices?: null): RentPriceChangedEventFilter;
  };

  estimateGas: {
    decayedPremium(
      _startPremium: PromiseOrValue<BigNumberish>,
      _elapsed: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    premium(
      name: PromiseOrValue<string>,
      expires: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    price(
      name: PromiseOrValue<string>,
      expires: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    price1Letter(overrides?: CallOverrides): Promise<BigNumber>;

    price2Letter(overrides?: CallOverrides): Promise<BigNumber>;

    price3Letter(overrides?: CallOverrides): Promise<BigNumber>;

    price4Letter(overrides?: CallOverrides): Promise<BigNumber>;

    price5Letter(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    usdOracle(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    decayedPremium(
      _startPremium: PromiseOrValue<BigNumberish>,
      _elapsed: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    premium(
      name: PromiseOrValue<string>,
      expires: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price(
      name: PromiseOrValue<string>,
      expires: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price1Letter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price2Letter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price3Letter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price4Letter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price5Letter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    usdOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
