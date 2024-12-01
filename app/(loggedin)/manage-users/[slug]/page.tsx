import { UserDetails } from "@/components/user-details"

export default function UserPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">User Details</h1>
      <UserDetails userId={params.slug} />
    </div>
  )
}

