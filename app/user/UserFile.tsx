import { sort } from "fast-sort"
import Link from "next/link"

interface sortProps {
  sortOrder: string
}

interface User {
  id: number
  name: string
}

const UserFile = async ({ sortOrder }: sortProps) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const user: User[] = await res.json()

  const sorted = sort(user).asc((u) => u.name)
  const userList = user.map((user) => {
    return <li key={user.id}>{user.name}</li>
  })
  const sortedName = sorted.map((user) => {
    return <li key={user.id}>{user.name}</li>
  })

  return (
    <>
      <Link href={"/user?sortOrder=name"}>Name</Link>
      {sortOrder === "name" ? sortedName : userList}
    </>
  )
}

export default UserFile
