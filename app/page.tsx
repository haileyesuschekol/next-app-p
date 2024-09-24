import Image from "next/image"
import Link from "next/link"
import ProductCart from "./components/ProductCart"

export default function Home() {
  return (
    <main>
      <h1>hello next</h1>
      <Link href="/user">Users</Link>
      <ProductCart />
    </main>
  )
}
