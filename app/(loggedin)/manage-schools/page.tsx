import { SchoolList } from "@/components/SchoolListing"
import { Button } from "@/components/ui/button"
import type { Metadata } from 'next'
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Manage Schools - Let\'s Study Portal',
  description: "At Let's Study Portal, we simplify your search for the ideal schools and programs. Our platform connects you with institutions that align perfectly with your academic and personal aspirations.",
}

export default function SchoolsPage() {
  return (
    <div className="container mx-auto py-10 px-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold">Schools Directory</h1>
        <div className="flex items-center gap-2">
            <Link href="/manage-schools/create">
                <Button variant="default">Add School</Button>
            </Link>
            <Link href="/manage-schools/create">
                <Button variant="blue">Export</Button>
            </Link>
        </div>
        </div>
      <SchoolList />
    </div>
  )
}