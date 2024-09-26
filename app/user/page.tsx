import Link from "next/link"
import UserFile from "./UserFile"

interface Props {
  searchParams: { sortOrder: string }
}
const userPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <UserFile sortOrder={sortOrder} />
    </div>
  )
}

export default userPage
