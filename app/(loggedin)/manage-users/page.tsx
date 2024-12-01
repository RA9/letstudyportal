import { getUsers } from "@/app/actions/users"
import { UserList } from "@/components/user-list"
import { cookies } from "next/headers"

export default async function ManageUsersPage() {
  const token = cookies().get('session')?.value

  let users = await getUsers(token || "")

  users = users.map((user: any) => {
    return {
      id: user.id,
      name: user.firstName + " "+ user.lastName,
      email: user.email,
      createdAt: user.createdAt,
      role: user.role,
    }
  })

  console.log({ users })
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Manage Users</h1>
      <UserList  users={users} />
    </div>
  )
}

