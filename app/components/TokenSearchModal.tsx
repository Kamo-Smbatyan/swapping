import React, { useState } from "react";

type Token = {
  name: string;
  symbol: string;
  chain: string;
};

const mostPopularTokens = [
  { name: "ETH", symbol: "ETH", chain: "Ethereum" },
  { name: "WETH", symbol: "WETH", chain: "Ethereum" },
  { name: "USDT", symbol: "USDT", chain: "Ethereum" },
  { name: "USDC", symbol: "USDC", chain: "Ethereum" },
  { name: "DAI", symbol: "DAI", chain: "Ethereum" },
  { name: "WBTC", symbol: "WBTC", chain: "Ethereum" },
];

const trendingTokens = [
  { name: "Rekt", symbol: "REKT", chain: "Ethereum" },
  { name: "ETH GUY", symbol: "ETHGUY", chain: "Ethereum" },
  { name: "Wojak Coin", symbol: "WOJAK", chain: "Ethereum" },
  {
    name: "Department Of Government Efficiency",
    symbol: "DOGE",
    chain: "Ethereum",
  },
  { name: "Mog Coin", symbol: "Mog", chain: "Ethereum" },
];

const TokenSearchModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  isOpen = true;
  const [searchTerm, setSearchTerm] = useState("");

  if (!isOpen) return null;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[90%] max-w-lg bg-white rounded-lg shadow-lg p-6">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <input
          type="text"
          placeholder="Search token name or paste address"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="mb-4">
          <h3 className="text-sm font-bold text-gray-700 mb-2">Most popular</h3>
          <div className="flex flex-wrap gap-2">
            {mostPopularTokens.map((token) => (
              <button
                key={token.symbol}
                className="px-4 py-2 bg-gray-100 text-sm font-semibold text-gray-700 rounded-md hover:bg-gray-200"
              >
                {token.symbol}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-700 mb-2">Trending</h3>
          <ul className="divide-y divide-gray-200">
            {trendingTokens
              .filter((token) =>
                token.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((token) => (
                <li
                  key={token.symbol}
                  className="py-2 flex justify-between items-center"
                >
                  <div>
                    <p className="text-gray-800 font-semibold">{token.name}</p>
                    <p className="text-sm text-gray-500">{token.symbol}</p>
                  </div>
                  <span className="text-sm text-gray-500">{token.chain}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TokenSearchModal;
