import { getUser } from '@/app/lib/dal'
import { NewSchoolForm } from '@/components/NewSchoolForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Add School - Let\'s Study Portal',
  description: "At Let's Study Portal, we simplify your search for the ideal schools and programs. Our platform connects you with institutions that align perfectly with your academic and personal aspirations.",
}

export default async function Page() {
  const user = await getUser()
  return (
    <div className="container mx-auto py-10 px-4 bg-white rounded-lg shadow-md">
      <NewSchoolForm />
    </div>
  )
}