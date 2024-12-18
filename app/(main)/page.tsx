import { LandingPageComponent } from "@/components/landing-page"

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home - Let\'s Study Portal',
  description: "At Let's Study Portal, we simplify your search for the ideal schools and programs. Our platform connects you with institutions that align perfectly with your academic and personal aspirations.",
}

export default function Page() {
  return <LandingPageComponent />
}
