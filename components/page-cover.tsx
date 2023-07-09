import * as React from "react"
import { Typography } from "./ui/typography"
import Image from "next/image"
import truncate from "@/utils/truncate"
import { Button } from "./ui/button"

type BookPreCoverProps = {
  children?: React.ReactNode
  wallet: string
}

const BookPreCover = React.forwardRef<HTMLDivElement, BookPreCoverProps>(({ children, wallet }, ref) => (
  <div className="overflow-hidden bg-gray-800 p-5 text-white" ref={ref} data-density="hard">
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <Image width={160} height={160} src="/assets/logo.png" alt="logo" />
        <Typography as="h2" level="h3" className="font-bold">
          The Wallet Book
        </Typography>
        <Typography className="font-semibold" level="body4">
          of
        </Typography>
        <Typography className="font-semibold" level="body2">
          {truncate(wallet, 16, true)}
        </Typography>
      </div>
    </div>
  </div>
))

type BookPostCoverProps = {
  children?: React.ReactNode
  wallet: string
}

const BookPostCover = React.forwardRef<HTMLDivElement, BookPostCoverProps>(({ children, wallet }, ref) => (
  <div className="overflow-hidden bg-gray-800 p-5 text-white" ref={ref} data-density="hard">
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <Image width={160} height={160} src="/assets/logo.png" alt="logo" />
        <Button onClick={() => alert("Still thinking about this feature :(")} scheme="primary">
          Mint your book
        </Button>
      </div>
    </div>
  </div>
))

export { BookPreCover, BookPostCover }
