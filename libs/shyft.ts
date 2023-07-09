import { SHYFT_API_KEY, SHYFT_BASE_URL } from "@/config/api"
import fetcher from "./fetcher"
import {
  GetAllNFTResult,
  GetCollectionsResult,
  GetNFTResult,
  GetPortfolioResult,
  GetTokenBalanceResult,
  GetTxHistoryResult,
  Network,
  ShyftBaseResponse,
} from "@/types"

export const getPortfolio = (address: string, network: Network) => {
  return fetcher<ShyftBaseResponse<GetPortfolioResult>>(
    `${SHYFT_BASE_URL}/v1/wallet/get_portfolio?network=${network}&wallet=${address}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": SHYFT_API_KEY,
      },
    }
  )
}

export const getTxHistory = (
  address: string,
  network: Network,
  tx_num: number = 10,
  before_tx_signature: string = ""
) => {
  return fetcher<ShyftBaseResponse<GetTxHistoryResult[]>>(
    `${SHYFT_BASE_URL}/v1/wallet/transaction_history?network=${network}&wallet=${address}&tx_num=${tx_num}${
      before_tx_signature ? `&before_tx_signature=${before_tx_signature}` : ""
    }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": SHYFT_API_KEY,
      },
    }
  )
}

export const getNFTCollections = (address: string, network: Network) => {
  return fetcher<ShyftBaseResponse<GetCollectionsResult>>(
    `${SHYFT_BASE_URL}/v1/wallet/collections?network=${network}&wallet_address=${address}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": SHYFT_API_KEY,
      },
    }
  )
}

export const getAllNFTs = (address: string, network: Network) => {
  return fetcher<ShyftBaseResponse<GetAllNFTResult[]>>(
    `${SHYFT_BASE_URL}/v1/nft/read_all?network=${network}&address=${address}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": SHYFT_API_KEY,
      },
    }
  )
}

export const readNFT = (address: string, network: Network) => {
  return fetcher<ShyftBaseResponse<GetNFTResult>>(
    `${SHYFT_BASE_URL}/v1/nft/read?network=${network}&token_address=${address}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": SHYFT_API_KEY,
      },
    }
  )
}

export const getTokenBalances = (address: string, network: Network) => {
  return fetcher<ShyftBaseResponse<GetTokenBalanceResult[]>>(
    `${SHYFT_BASE_URL}/v1/wallet/all_tokens?network=${network}&wallet=${address}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": SHYFT_API_KEY,
      },
    }
  )
}

export const getWalletStatistic = async (wallet: string, network: Network) => {
  const portfolio = await getPortfolio(wallet, network)
  const tokens = await getTokenBalances(wallet, network)
  const nfts = await getAllNFTs(wallet, network)
  const collectons = await getNFTCollections(wallet, network)
  const transactions = await getTxHistory(wallet, network)

  return {
    portfolio: portfolio.result,
    tokens: tokens.result,
    nfts: nfts.result,
    collectons: collectons.result,
    transactions: transactions.result,
  }
}
