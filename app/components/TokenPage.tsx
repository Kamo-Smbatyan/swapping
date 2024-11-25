"use client";

import PriceChart from "@/components/PriceChart";
import SeparatorVertical from "@/components/SeparatorVertical";
import { Button, buttonVariants } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { periods, type PeriodsType, type Token } from "@/lib/constants";
import {
  cn,
  copyAddressToClipboard,
  getNetworkLogo,
  getPeriodWording,
  getTokensBySymbolByChain,
} from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Copy, FileSearch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import { type Address, parseUnits } from "viem";
import { useAccount, useBalance, useChainId, useSwitchChain } from "wagmi";
import {
  type ZeroExApiPriceResponse,
  type ZeroExApiQuoteResponse,
} from "../../types";
import PeriodButtons from "./PeriodButtons";
import PriceForm from "./PriceForm";
import QuoteForm from "./QuoteForm";
import Spinner from "./Spinner";

interface Props {
  address: Address | undefined;
  priceResponse: ZeroExApiPriceResponse | undefined;
  setPriceResponse: (price: ZeroExApiPriceResponse) => void;
}

const PriceFormMemo = memo(PriceForm);

const TokenPage = () => {
  const [period, setPeriod] = useState<PeriodsType>(periods.ONE_DAY);
  const [sellAmount, setSellAmount] = useState<string>("");
  const [sellToken, setSellToken] = useState<string>("weth");
  const [sellTokenData, setSellTokenData] = useState<Token | undefined>();
  const [buyAmount, setBuyAmount] = useState<string>("");
  const [buyToken, setBuyToken] = useState<string>("link");
  const [buyTokenData, setBuyTokenData] = useState<Token | undefined>();
  const [price, setPrice] = useState<string>();
  const [delta, setDelta] = useState<number | undefined>();
  const [finalize, setFinalize] = useState(false);
  const [priceResponse, setPriceResponse] = useState<
    ZeroExApiPriceResponse | undefined
  >();
  const [quote, setQuote] = useState<ZeroExApiQuoteResponse | undefined>();

  const { address, chain } = useAccount();
  const chainId = useChainId() || 1;
  const { switchChain } = useSwitchChain();

  useEffect(() => {
    const tokens = getTokensBySymbolByChain(chainId);
    setSellTokenData(tokens[sellToken]);
    setBuyTokenData(tokens[buyToken]);
  }, [chain?.id, sellToken, buyToken, chainId]);

  const { data: balance } = useBalance({
    address: address,
    token: sellTokenData?.address,
  });

  const insufficientBalance =
    balance && sellAmount && sellTokenData
      ? parseUnits(sellAmount, sellTokenData?.decimals) > balance.value
      : true;

  const swapTokenDirection = () => {
    setSellToken(buyToken);
    setBuyToken(sellToken);
    setBuyAmount("");
    setPrice("");
  };

  return (
    <div className="py-6 px-4">
      <div className="flex flex-col lg:flex-row items-start pl-5 lg:items-center justify-between">
        <div className="text-3xl pb-4 flex items-end gap-x-2 font-semibol">
          <span className="relative">
            {sellTokenData?.logoURI && (
              <Image
                width={42}
                height={42}
                className="relative"
                src={sellTokenData?.logoURI}
                alt={`${sellTokenData?.name}'s' icon`}
              />
            )}
            {getNetworkLogo(chainId) !== undefined && (
              <Image
                width={18}
                height={18}
                className="absolute -bottom-1 -right-1"
                src={getNetworkLogo(chainId) as string}
                alt={`${chain?.name}'s' logo`}
              />
            )}
          </span>{" "}
          <span className="min-w-fit text-foreground">
            {sellTokenData?.name}
          </span>
          <span className="text-zinc-500 text-lg mt-1 ml-2">
            {sellTokenData?.symbol}
          </span>
        </div>
        <div className="flex flex-col items-start sm:flex-row sm:items-center justify-center gap-2 sm:gap-4">
          <Button
            onClick={swapTokenDirection}
            variant="outline"
            className="rounded-3xl bg-zinc-300/20 hover:bg-zinc-400/20 flex gap-x-1.5 transition-all"
          >
            {buyTokenData?.logoURI && (
              <Image
                width={16}
                height={16}
                src={buyTokenData?.logoURI}
                alt={`${buyTokenData?.name}'s' icon`}
              />
            )}
            Switch to {buyTokenData?.symbol}
          </Button>
          <SeparatorVertical />
          <div className="flex items-center gap-1 pr-4">
            {sellTokenData?.address && (
              <Button
                onClick={() => copyAddressToClipboard(sellTokenData)}
                variant="outline"
                className="rounded-3xl flex items-center bg-zinc-300/20 hover:bg-zinc-400/20 text-muted-foreground gap-x-1.5 transition-all"
              >
                Address:
                <span className="text-foreground">
                  {sellTokenData?.address.slice(0, 5)}...
                  {sellTokenData?.address.slice(-3)}
                </span>
                <Copy className="h-4 w-4" />
              </Button>
            )}
            <Link
              href={`https://blockchair.com/${chain?.name
                .replace(/\s+/g, "-")
                .toLowerCase()}/address/${sellTokenData?.address}`}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full p-3 bg-zinc-300/20 hover:bg-zinc-400/20 transition-all"
              )}
              target="_blank"
            >
              <FileSearch className="h-4 w-4 text-foreground hover:cursor-pointer hover:text-zinc-900" />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-2 grid grid-cols-1 lg:grid-cols-5 gap-y-4 lg:gap-4">
        <Card className="col-span-3 pb-0 overflow-hidden h-fit">
          <CardHeader className="flex pt-4 flex-col sm:flex-row items-start sm:items-center justify-between">
            <CardTitle className="text-3xl sm:pl-3 text-foreground font-normal gap-y-1.5 flex flex-col items-start justify-start">
              <span className="pt-4">
                {price && sellTokenData ? (
                  `$${price}`
                ) : (
                  <Skeleton className="w-[150px] h-[35px] rounded-3xl" />
                )}
              </span>
              <div className="flex text-sm gap-x-2">
                <span
                  className={
                    delta && delta > 0 ? "text-green-500" : "text-red-500"
                  }
                >
                  {delta && sellTokenData ? (
                    `${delta?.toFixed(2)}%`
                  ) : (
                    <Skeleton className="w-[50px] h-[20px] rounded-3xl" />
                  )}
                </span>{" "}
                <span className="text-foreground">
                  {getPeriodWording(period)}
                </span>
              </div>
            </CardTitle>
            <PeriodButtons
              period={period}
              setPeriod={setPeriod}
              setDelta={setDelta}
            />
          </CardHeader>
          <CardContent className="p-0 relative h-[346px]">
            {sellTokenData && buyTokenData ? (
              <PriceChart
                sellToken={sellTokenData?.coingeckoApiId as string}
                buyToken={buyTokenData?.coingeckoApiId as string}
                period={period}
                setPrice={setPrice}
                setDelta={setDelta}
              />
            ) : (
              <div className="w-full h-[300px] flex flex-col items-center gap-y-2 text-center justify-center">
                <Spinner />
                <p>
                  Try selecting different buy/sell tokens or refreshing the page
                </p>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="col-span-2 flex flex-col">
          <CardHeader className="flex pb-4 border-b border-border/50 flex-row items-center justify-between">
            <CardTitle className="text-lg font-mediumtext-foreground">
              Market
            </CardTitle>
          </CardHeader>
          {finalize && priceResponse ? (
            <QuoteForm
              address={address}
              priceResponse={priceResponse}
              setPriceResponse={setPriceResponse}
              quote={quote}
              setQuote={setQuote}
              setFinalize={setFinalize}
              chainId={chainId}
              setSellAmount={setSellAmount}
              setBuyAmount={setBuyAmount}
            />
          ) : (
            <CardContent className="p-0 flex flex-col w-full h-full rounded-lg">
              <PriceFormMemo
                sellToken={sellToken}
                setSellToken={setSellToken}
                setSellTokenData={setSellTokenData}
                sellAmount={sellAmount}
                setSellAmount={setSellAmount}
                sellTokenData={sellTokenData}
                buyToken={buyToken}
                setBuyToken={setBuyToken}
                setBuyTokenData={setBuyTokenData}
                buyAmount={buyAmount}
                setBuyAmount={setBuyAmount}
                buyTokenData={buyTokenData}
                balance={balance}
                setPrice={setPrice}
                setPriceResponse={setPriceResponse}
                swapTokenDirection={swapTokenDirection}
                takerAddress={address}
              />
            </CardContent>
          )}
          {!finalize && (
            <CardFooter className="flex py-4 flex-row justify-between">
              {!address ? (
                <div className="w-full flex justify-center">
                  <ConnectButton />
                </div>
              ) : (
                <div className="w-full flex justify-center">
                  <Button onClick={() => {}} className="w-full rounded-full">
                    Swap
                  </Button>
                </div>
              )}
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
};

export default TokenPage;
