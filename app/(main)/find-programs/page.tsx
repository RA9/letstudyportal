import { EducationPortalComponent } from '@/components/education-portal'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Program Finder - Let\'s Study Portal',
  description: "Find the perfect program for you. Let's Study Portal helps you discover programs that align with your academic and personal aspirations.",
}

export default function Page() {
  return <EducationPortalComponent />
}