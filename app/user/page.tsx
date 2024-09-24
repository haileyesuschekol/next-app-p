interface User {
  id: number
  name: string
}

const userPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const user: User[] = await res.json()
  return (
    <div>
      <h2>users</h2>
      {user.map((user) => {
        return <li key={user.id}>{user.name}</li>
      })}
    </div>
  )
}

export default userPage
