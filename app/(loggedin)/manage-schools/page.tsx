import { SchoolList } from "@/components/SchoolListing"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manage Schools - Let\'s Study Portal',
  description: "At Let's Study Portal, we simplify your search for the ideal schools and programs. Our platform connects you with institutions that align perfectly with your academic and personal aspirations.",
}

export default function SchoolsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Schools Directory</h1>
      <SchoolList />
    </div>
  )
}