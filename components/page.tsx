import * as React from "react"

type PageProps = {
  children: React.ReactNode
}

const Page = React.forwardRef<HTMLDivElement, PageProps>(({ children }, ref) => (
  <div className="page px-6 py-10 text-gray-700" ref={ref}>
    {children}
  </div>
))

export { Page }
