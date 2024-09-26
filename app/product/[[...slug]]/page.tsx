import React from "react"

interface Props {
  params: { slug: String[] }
  searchParams: { searchOrder: string }
}

const ProductPage = ({
  params: { slug },
  searchParams: { searchOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} -- {searchOrder}
    </div>
  )
}

export default ProductPage
