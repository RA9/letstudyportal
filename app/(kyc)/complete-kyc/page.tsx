import { getUser } from '@/app/lib/dal'
import KycForm from '@/components/KYCSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete your kyc - Let\'s Study Portal',
  description: "At Let's Study Portal, we simplify your search for the ideal schools and programs. Our platform connects you with institutions that align perfectly with your academic and personal aspirations.",
}

export default async function Page() {
  const user = await getUser()
  return <KycForm  />
}