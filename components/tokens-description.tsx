import { GetTokenBalanceResult } from "@/types"
import { Typography } from "./ui/typography"

type TokenDescriptionProps = {
  total: number
  tokens: GetTokenBalanceResult[]
}

export default function TokenDescription({ total, tokens }: TokenDescriptionProps) {
  const uniqueTokenNames = Array.from(new Set(tokens.map((token) => token.info.name)))
  
  const hodingTokens = `You hold ${total} types of tokens such as ${uniqueTokenNames.splice(0, 3).join(", ")}, and more`

  const firstCase = `${hodingTokens}, with a modest selection of tokens in your wallet, it's evident that you don't hold an extensive variety, yet their presence hints at the untapped potential they possess, beckoning the promise of future growth and opportunities.`

  const secondCase = `${hodingTokens}, forming a captivating tapestry that adorns your wallet. This mosaic of diverse digital assets vividly depicts your adventurous spirit and strategic investments within the expansive crypto landscape.`

  let content = null

  if (total > 5) {
    content = secondCase
  } else {
    content = firstCase
  }

  return (
    <div className="flex h-full w-full">
      <Typography level="h6" className="leading-loose">
        {content}
      </Typography>
    </div>
  )
}
