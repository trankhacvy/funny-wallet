import { GetTokenBalanceResult } from "@/types"
import { Typography } from "./ui/typography"
import { defiTokens } from "@/config/defi"

type DefiDescriptionProps = {
  total: number
  tokens: GetTokenBalanceResult[]
}

export default function DefiDescription({ tokens }: DefiDescriptionProps) {
  const uniqueSymbols = Array.from(new Set(tokens.map((token) => token.info.symbol.toLowerCase())))
  const numOfDefi = uniqueSymbols.filter((token) => defiTokens.includes(token)).length

  const noDefi = `While your wallet may not currently hold any DEFI tokens, it presents a canvas of possibilities, inviting you to explore the realm of decentralized finance and unlock the potential for financial innovation and growth. Embrace the journey ahead, as you consider venturing into the world of DEFI and discovering the transformative power it holds.`

  const someDefi = `While your wallet doesn't hold an extensive amount of DEFI tokens, it still opens up a world of opportunities. Embrace the journey ahead as you explore the realm of decentralized finance and discover the potential for innovation and financial growth.`

  const manyDefi = `Enveloped within your wallet's embrace lies a collection of DEFI tokens, a testament to your unwavering devotion and passion for the transformative world of decentralized finance, where innovation and financial freedom intertwine.`

  let content = null

  if (numOfDefi === 0) {
    content = noDefi
  } else if (numOfDefi <= 3) {
    content = someDefi
  } else {
    content = manyDefi
  }

  return (
    <div className="flex h-full w-full">
      <Typography level="h6" className="leading-loose">
        {content}
      </Typography>
    </div>
  )
}
