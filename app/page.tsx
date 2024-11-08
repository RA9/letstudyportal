import { LandingPageComponent } from "@/components/landing-page"

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home - Let\'s Study Portal',
  description: '...',
}

export default function Page() {
  return <LandingPageComponent />
}
