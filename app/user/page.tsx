import Link from "next/link"
import UserFile from "./UserFile"

interface Props {
  searchParams: { sortOrder: string }
}
const userPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <Link href="/user/new">Create</Link>
      <br />
      <UserFile sortOrder={sortOrder} />
    </div>
  )
}

export default userPage
