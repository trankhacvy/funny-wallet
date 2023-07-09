import { GetCollectionsResult, GetPortfolioResult } from "@/types"
import { Typography } from "./ui/typography"

type NFTsDescriptionProps = {
  total: number
  nfts: GetPortfolioResult["nfts"]
  collections: GetCollectionsResult
}

export default function NFTsDescription({ total, nfts, collections }: NFTsDescriptionProps) {
  const noNft =
    "Despite the absence of NFTs in your wallet, the abundance of diverse digital assets within it showcases your venturesome spirit and broad-ranging investments in the expansive world of cryptocurrency. Perhaps now is the time to consider venturing into the realm of NFTs and further expanding the horizons of your digital portfolio."

  const someNfts =
    "Within your wallet, a handful of cherished NFTs find their home, each one a digital masterpiece that encapsulates a unique story or artistic expression. These treasured possessions form a small yet meaningful collection, offering a glimpse into your appreciation for the beauty and creativity within the world of non-fungible tokens."

  const alotsofNfts =
    "Within the vast expanse of your wallet, a captivating gallery of NFTs takes center stage, a testament to your deep appreciation for the world of digital art and collectibles. Each unique NFT in your abundant collection holds within it a story, a visual marvel, or a piece of history, forming a mosaic that reflects your passion and discerning taste for the boundless creativity within the realm of non-fungible tokens."

  let content = null

  if (total === 0) {
    content = noNft
  } else if (total <= 5) {
    content = someNfts
  } else {
    content = alotsofNfts
  }

  return (
    <div className="flex h-full w-full">
      <Typography level="h6" className="leading-loose">
        {content}
      </Typography>
    </div>
  )
}
