import HTMLFlipBook from "react-pageflip"
import React from "react"
import { BookPreCover, BookPostCover } from "./page-cover"
import { Page } from "./page"
import PageIntro from "./page-intro"
import WalletIntro from "./wallet-info"
import LatestTx from "./latest-tx"
import TokenDescription from "./tokens-description"
import NFTsDescription from "./nfts-description"
import {
  GetAllNFTResult,
  GetCollectionsResult,
  GetPortfolioResult,
  GetTokenBalanceResult,
  GetTxHistoryResult,
} from "@/types"
import DefiDescription from "./defi-description"
import NFTExample from "./nft-example"
import LastPage from "./last-page"

type AppBookProps = {
  wallet: string
  portfolio: GetPortfolioResult
  tokens: GetTokenBalanceResult[]
  nfts: GetAllNFTResult[]
  collections: GetCollectionsResult
  transactions: GetTxHistoryResult[]
}

export default function AppBook({ wallet, tokens, nfts, collections, portfolio, transactions }: AppBookProps) {
  const lastesTx = transactions?.[0]

  return (
    // @ts-ignore
    <HTMLFlipBook
      width={550}
      height={500}
      size="stretch"
      minWidth={315}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1533}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
      className="z-50 mx-auto"
    >
      <BookPreCover wallet={wallet} />
      <Page>
        <PageIntro />
      </Page>
      <Page>
        <WalletIntro balance={portfolio.sol_balance} tokens={portfolio.num_tokens} nfts={portfolio.num_nfts} />
      </Page>
      <Page>
        <LatestTx blocktime={lastesTx?.blockTime} slot={lastesTx?.slot} lamports={lastesTx?.meta.fee} />
      </Page>
      <Page>
        <TokenDescription tokens={tokens} total={portfolio.num_tokens} />
      </Page>
      <Page>
        <DefiDescription tokens={tokens} total={portfolio.num_tokens} />
      </Page>
      <Page>
        <NFTsDescription nfts={portfolio.nfts} collections={collections} total={portfolio.num_nfts} />
      </Page>
      <Page>
        {nfts.length > 0 ? <NFTExample nfts={nfts} collections={collections} total={portfolio.num_nfts} /> : undefined}
      </Page>
      <Page>
        <LastPage />
      </Page>
      <BookPostCover wallet={wallet} />
    </HTMLFlipBook>
  )
}
