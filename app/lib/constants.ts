import { type Address } from "viem";
export const SEPOLIA_CHAIN_ID = 11155111;
export const POLYGON_CHAIN_ID = 137;

export const AFFILIATE_FEE = 0.01;
export const FEE_RECIPIENT = "0x1fBF50a2B2DbC3C0Df63c1435145D00543fEf355";

export const POLYGON_AND_SEPOLIA_EXCHANGE_PROXY =
  "0xDef1C0ded9bec7F1a1670819833240f027b25EfF";

export const MAX_ALLOWANCE =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;

export const ONE_HOUR_IN_DAYS = 0.04166666666;

export const periods = {
  ONE_HOUR: ONE_HOUR_IN_DAYS,
  ONE_DAY: 1,
  ONE_WEEK: 7,
  ONE_MONTH: 31,
  ONE_YEAR: 365,
} as const;

export const periodLabels: Record<keyof typeof periods, string> = {
  ONE_HOUR: "1H",
  ONE_DAY: "1D",
  ONE_WEEK: "1W",
  ONE_MONTH: "1M",
  ONE_YEAR: "1Y",
};

export const periodWordings: Record<keyof typeof periods, string> = {
  ONE_HOUR: "Last Hour",
  ONE_DAY: "Last 24 hours",
  ONE_WEEK: "Last Week",
  ONE_MONTH: "Last Month",
  ONE_YEAR: "Last Year",
};

export type PeriodsType = (typeof periods)[keyof typeof periods];

export interface Token {
  name: string;
  address: Address;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
  coingeckoApiId?: string;
}

export const POLYGON_TOKENS: Token[] = [
  {
    chainId: POLYGON_CHAIN_ID,
    name: "Wrapped Matic",
    symbol: "WMATIC",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/matic.svg",
  },
  {
    chainId: POLYGON_CHAIN_ID,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/weth.svg",
  },
  {
    chainId: POLYGON_CHAIN_ID,
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    decimals: 18,
    address: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/wbtc.svg",
  },
  {
    chainId: POLYGON_CHAIN_ID,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  {
    chainId: POLYGON_CHAIN_ID,
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
  },
  {
    chainId: POLYGON_CHAIN_ID,
    name: "Dai - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
  },
  {
    chainId: POLYGON_CHAIN_ID,
    name: "ChainLink",
    symbol: "LINK",
    decimals: 18,
    address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/link.svg",
  },
  {
    chainId: POLYGON_CHAIN_ID,
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    address: "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/uni.svg",
  },
];

export const POLYGON_TOKENS_BY_SYMBOL: Record<string, Token> = {
  wmatic: {
    chainId: POLYGON_CHAIN_ID,
    name: "Wrapped Matic",
    symbol: "WMATIC",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/matic.svg",
    coingeckoApiId: "wmatic",
  },
  weth: {
    chainId: POLYGON_CHAIN_ID,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/weth.svg",
    coingeckoApiId: "polygon-pos-bridged-weth-polygon-pos",
  },
  wbtc: {
    chainId: POLYGON_CHAIN_ID,
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    decimals: 18,
    address: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/wbtc.svg",
    coingeckoApiId: "polygon-bridged-wbtc-polygon-pos",
  },
  usdc: {
    chainId: POLYGON_CHAIN_ID,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
    coingeckoApiId: "bridged-usdc-polygon-pos-bridge",
  },
  usdt: {
    chainId: POLYGON_CHAIN_ID,
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
    coingeckoApiId: "polygon-bridged-usdt-polygon",
  },
  dai: {
    chainId: POLYGON_CHAIN_ID,
    name: "Dai - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
    coingeckoApiId: "polygon-pos-bridged-dai-polygon-pos",
  },
  link: {
    chainId: POLYGON_CHAIN_ID,
    name: "ChainLink",
    symbol: "LINK",
    decimals: 18,
    address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/link.svg",
    coingeckoApiId: "chainlink",
  },
  uni: {
    chainId: POLYGON_CHAIN_ID,
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    address: "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/uni.svg",
    coingeckoApiId: "uniswap",
  },
};

export const SEPOLIA_TOKENS: Token[] = [
  {
    chainId: SEPOLIA_CHAIN_ID,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0xfff9976782d46cc05630d1f6ebab18b2324d6b14",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/weth.svg",
  },
  {
    chainId: SEPOLIA_CHAIN_ID,
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/uni.svg",
  },
  {
    chainId: SEPOLIA_CHAIN_ID,
    name: "ChainLink",
    symbol: "LINK",
    decimals: 18,
    address: "0x779877a7b0d9e8603169ddbd7836e478b4624789",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/link.svg",
  },
];

export const SEPOLIA_TOKENS_BY_SYMBOL: Record<string, Token> = {
  weth: {
    chainId: SEPOLIA_CHAIN_ID,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0xfff9976782d46cc05630d1f6ebab18b2324d6b14",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/weth.svg",
    coingeckoApiId: "weth",
  },
  uni: {
    chainId: SEPOLIA_CHAIN_ID,
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/uni.svg",
    coingeckoApiId: "uniswap",
  },
  link: {
    chainId: SEPOLIA_CHAIN_ID,
    name: "ChainLink",
    symbol: "LINK",
    decimals: 18,
    address: "0x779877a7b0d9e8603169ddbd7836e478b4624789",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/link.svg",
    coingeckoApiId: "chainlink",
  },
};

export const POLYGON_TOKENS_BY_ADDRESS: Record<string, Token> = {
  "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270": {
    chainId: POLYGON_CHAIN_ID,
    name: "Wrapped Matic",
    symbol: "WMATIC",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/matic.svg",
  },
  "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359": {
    chainId: POLYGON_CHAIN_ID,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063": {
    chainId: POLYGON_CHAIN_ID,
    name: "Dai - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
  },
};

export const SEPOLIA_TOKENS_BY_ADDRESS: Record<string, Token> = {
  "0xfff9976782d46cc05630d1f6ebab18b2324d6b14": {
    chainId: SEPOLIA_CHAIN_ID,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0xfff9976782d46cc05630d1f6ebab18b2324d6b14",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/weth.svg",
  },
  "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984": {
    chainId: SEPOLIA_CHAIN_ID,
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/uni.svg",
  },
  "0x779877a7b0d9e8603169ddbd7836e478b4624789": {
    chainId: SEPOLIA_CHAIN_ID,
    name: "ChainLink",
    symbol: "LINK",
    decimals: 18,
    address: "0x779877a7b0d9e8603169ddbd7836e478b4624789",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/link.svg",
  },
};

// export const POLYGON_AMOY_TOKENS: Token[] = [
//   {
//     chainId: 80002,
//     name: "Wrapped Matic",
//     symbol: "MATIC",
//     decimals: 18,
//     address: "0x0000000000000000000000000000000000000000", // Native MATIC doesn't have a contract address
//     logoURI:
//       "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/matic.svg",
//   },
//   {
//     chainId: 80002,
//     name: "Wrapped Ether",
//     symbol: "WETH",
//     decimals: 18,
//     address: "0x3c8fCf987F37860F7DbaE09d7Fd2B4c672984935", // WETH on Mumbai
//     logoURI:
//       "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png",
//   },
//   {
//     chainId: 80002,
//     name: "Dai Stablecoin",
//     symbol: "DAI",
//     decimals: 18,
//     address: "0x001B3B4d0f3714ca98Ba10F6042daEBF0B1B7b6F", // DAI on Mumbai
//     logoURI:
//       "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
//   },
//   {
//     chainId: 80002,
//     name: "USD Coin",
//     symbol: "USDC",
//     decimals: 6,
//     address: "0x2058A9d7613aBcBf439E3f3459bE12B760A8a430", // USDC on Mumbai
//     logoURI:
//       "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
//   },
//   {
//     chainId: 80002,
//     name: "Tether USD",
//     symbol: "USDT",
//     decimals: 6,
//     address: "0x3813e82e6f7098b9583FC0F33a962D02018B6803", // USDT on Mumbai
//     logoURI:
//       "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
//   },
// ];

// export const POLYGON_AMOY_TOKENS_BY_SYMBOL: Record<string, Token> = {
//   matic: {
//     chainId: 80002,
//     name: "Mumbai Matic",
//     symbol: "MATIC",
//     decimals: 18,
//     address: "0x0000000000000000000000000000000000000000",
//     logoURI:
//       "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/matic.svg",
//     coingeckoApiId: "matic-network",
//   },
//   weth: {
//     chainId: 80002,
//     name: "Wrapped Ether",
//     symbol: "WETH",
//     decimals: 18,
//     address: "0x3c8fCf987F37860F7DbaE09d7Fd2B4c672984935",
//     logoURI:
//       "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png",
//     coingeckoApiId: "weth",
//   },
//   dai: {
//     chainId: 80002,
//     name: "Dai Stablecoin",
//     symbol: "DAI",
//     decimals: 18,
//     address: "0x001B3B4d0f3714ca98Ba10F6042daEBF0B1B7b6F",
//     logoURI:
//       "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
//     coingeckoApiId: "dai",
//   },
//   usdc: {
//     chainId: 80002,
//     name: "USD Coin",
//     symbol: "USDC",
//     decimals: 6,
//     address: "0x2058A9d7613aBcBf439E3f3459bE12B760A8a430",
//     logoURI:
//       "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
//     coingeckoApiId: "usd-coin",
//   },
//   usdt: {
//     chainId: 80002,
//     name: "Tether USD",
//     symbol: "USDT",
//     decimals: 6,
//     address: "0x3813e82e6f7098b9583FC0F33a962D02018B6803",
//     logoURI:
//       "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
//     coingeckoApiId: "tether",
//   },
// };
