import { getUser } from '@/app/lib/dal'
import ApplicationForm from '@/components/study-application-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Application Form - Let\'s Study Portal',
  description: "At Let's Study Portal, we simplify your search for the ideal schools and programs. Our platform connects you with institutions that align perfectly with your academic and personal aspirations.",
}

export default async function Page() {
  const user = await getUser()
  return <ApplicationForm />
}