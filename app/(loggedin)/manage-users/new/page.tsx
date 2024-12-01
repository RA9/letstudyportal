import { NewUserForm } from "@/components/new-user-form"

export default function NewUserPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Add New User</h1>
      <NewUserForm />
    </div>
  )
}

