import { UserList } from "@/components/user-list"

export default function ManageUsersPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Manage Users</h1>
      <UserList />
    </div>
  )
}

