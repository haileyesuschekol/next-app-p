interface User {
  id: number
  name: string
}

const UserFile = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const user: User[] = await res.json()
  return (
    <>
      {user.map((user) => {
        return <li key={user.id}>{user.name}</li>
      })}
    </>
  )
}

export default UserFile
