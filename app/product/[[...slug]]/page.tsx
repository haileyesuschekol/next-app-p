import React from "react"

interface Props {
  params: { slug: String[] }
}

const ProductPage = ({ params: { slug } }: Props) => {
  return <div>ProductPage {slug}</div>
}

export default ProductPage
