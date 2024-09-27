import { notFound } from "next/navigation"

interface Props {
  params: { id: number }
}

const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound()
  return (
    <div>
      User Detail
      <h3>User Id: {id}</h3>
    </div>
  )
}

export default UserDetailPage
