import { Typography } from "./ui/typography"

type WalletIntroProps = {
  balance: number
  tokens: number
  nfts: number
}

export default function WalletIntro({ balance, tokens, nfts }: WalletIntroProps) {
  return (
    <div className="flex h-full w-full">
      <Typography level="h6" className="leading-loose">
        Within the gilded embrace of your wallet, a luminous balance of {Intl.NumberFormat().format(balance)} SOL
        glimmers like stardust, accompanied by a captivating ensemble of {tokens} tokens and a treasure trove of {nfts}{" "}
        NFTs, each a priceless artifact unveiling a chapter of your remarkable tale.
      </Typography>
    </div>
  )
}
