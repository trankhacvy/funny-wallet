import { GetAllNFTResult, GetCollectionsResult } from "@/types"
import { Typography } from "./ui/typography"
import { topNftCollections } from "@/config/nft"
import { AspectRatio } from "./ui/aspect-ratio"

type NFTExampleProps = {
  total: number
  nfts: GetAllNFTResult[]
  collections: GetCollectionsResult
}

export default function NFTExample({ nfts }: NFTExampleProps) {
  return (
    <div className="h-full w-full">
      <Typography level="h6" className="leading-loose">
        Your gems
      </Typography>
      <div className="grid grid-cols-4 gap-4">
        {nfts.splice(0, 12).map((nft, idx) => {
          if (idx === 11) {
            return (
              <AspectRatio className="overflow-hidden rounded-lg">
                <div className="flex h-full w-full items-center justify-center bg-white">
                  <Typography>And more...</Typography>
                </div>
              </AspectRatio>
            )
          }
          return (
            <AspectRatio className="overflow-hidden rounded-lg">
              <img src={nft.cached_image_uri ?? nft.image_uri} className="h-full w-full object-cover" />
            </AspectRatio>
          )
        })}
      </div>
    </div>
  )
}
