import { Typography } from "./ui/typography"

type LatestTxProps = {
  blocktime: number
  slot: number
  lamports: number
}

export default function LatestTx({ blocktime, slot, lamports }: LatestTxProps) {
  return (
    <div className="flex h-full w-full">
      <Typography level="h6" className="leading-loose">
        On the digital landscape of your wallet, a recent transaction unfolded at the timestamp {blocktime},
        specifically in slot {slot}. This transaction involved a cost of {lamports} lamports, signifying an important
        financial interaction within your digital ecosystem.
      </Typography>
    </div>
  )
}
