import {
  getNFTCollections,
  getPortfolio,
  getSolScanCollectionNFTs,
  getTxHistory,
  readNFT,
  topNftCollection,
} from "@/libs/shyft"
import { PromisePool } from "@supercharge/promise-pool"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"])
    return res.send("Method not allowed.")
  }
  //   const wallet = "63EEC9FfGyksm7PkVC6z8uAmqozbQcTzbkWJNsgqjkFs"
  // const wallet = "5AHKzmDcjeAAnafTivi5u7dWYw3jUQh2VBRDzSd9ztVr"
  //   const wallet = "2fmz8SuNVyxEP6QwKQs6LNaT2ATszySPEJdhUDesxktc"
  const wallet = "8Ew6iQXcTRHAUNNu3X9VBn1g1bJkXEZJ9gFD2AGKtdPB"
  const key = process.env.NEXT_PUBLIC_SHYFT_API!

  //   const result = await getPortfolio(wallet, "mainnet-beta")
  // const result = await getNFTCollections(wallet, 'devnet')
  //   const result1 = await getTxHistory(wallet, "mainnet-beta")

  //   const lastTx = result1.result[result1.result.length - 1]

  //   const result2 = await getTxHistory(wallet, "devnet", 5, lastTx.transaction.signatures?.[0])

  const nfts = await fetchNFTsFromSolscan()

  return res.json(nfts)
}

const fetchNFTsFromSolscan = async () => {
  const topCollections = await topNftCollection()
  const collections = topCollections.data

  const { results } = await PromisePool.for(collections)
    .withConcurrency(5)
    .process(async (collection: any) => {
      const collectionNfts = await getSolScanCollectionNFTs(collection.collection_id)
      const nft = collectionNfts.data?.[0]
      const nftDetail = await readNFT(nft.token_address, "mainnet-beta")

      return {
        image: collection.nft_image,
        name: collection.collection_name,
        address: nftDetail.result.collection.address,
      }
    })

  return results
}

const findAllTx = async (wallet: string) => {
  let allTxs = [] as any
  let lastTx = ""
  let stop = false

  while (!stop) {
    console.log("find all tx from signature: " + lastTx)
    const response = await getTxHistory(wallet, "mainnet-beta", 10, lastTx)
    console.log("res check", response.result.length)
    if (response.success && response.result && Array.isArray(response.result) && response.result.length > 0) {
      const txs = response.result
      allTxs = allTxs.concat(txs)
      lastTx = txs[txs.length - 1].transaction.signatures?.[0]
      await sleep(300)
    } else {
      stop = true
    }
  }

  return allTxs
}

const sleep = (time = 1000) =>
  new Promise((resolve: any) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
