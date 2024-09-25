interface Props {
  params: { id: number }
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return (
    <div>
      User Detail
      <h3>User Id: {id}</h3>
    </div>
  )
}

export default UserDetailPage
