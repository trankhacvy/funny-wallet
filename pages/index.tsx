import React, { useState } from "react"
import dynamic from "next/dynamic"
import { Typography } from "@/components/ui/typography"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { getWalletStatistic } from "@/libs/shyft"

const AppBook = dynamic(
  import("@/components/book").then((mod) => mod.default),
  {
    ssr: false,
  }
)

type GetWalletStatistic = ReturnType<typeof getWalletStatistic>

export default function HomePage() {
  const [wallet, setWallet] = useState("8JYVFy3pYsPSpPRsqf43KSJFnJzn83nnRLQgG88XKB8q")
  const [statistic, setStatistic] = useState<Awaited<Promise<PromiseLike<GetWalletStatistic>>>>()
  const [loading, setLoading] = useState(false)

  const fetchWalletStatistic = async () => {
    try {
      setLoading(true)
      const res = await getWalletStatistic(wallet, "mainnet-beta")
      setStatistic(res)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const walletForm = (
    <div className="mx-auto flex max-w-screen-lg flex-col justify-start gap-10 py-32">
      <Typography as="h2" level="h3" className="text-center font-bold">
        The Wallet Book
      </Typography>
      <div className="mx-auto flex w-full max-w-xl flex-col gap-6">
        <Input
          value={wallet}
          onChange={(event) => setWallet(event.target.value)}
          className="placeholder:text-gray-500"
          placeholder="Enter your wallet"
        />
        <Button onClick={fetchWalletStatistic} loading={loading}>
          Create your book
        </Button>
      </div>
    </div>
  )

  return (
    <div className="mx-auto h-full min-h-screen w-full max-w-screen-xl py-10">
      {!statistic ? (
        walletForm
      ) : (
        <AppBook
          wallet={wallet}
          tokens={statistic.tokens}
          nfts={statistic.nfts}
          collections={statistic.collectons}
          portfolio={statistic.portfolio}
          transactions={statistic.transactions}
        />
      )}
    </div>
  )
}
