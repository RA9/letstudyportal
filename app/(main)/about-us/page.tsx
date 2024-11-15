import AboutHeroSection from '@/components/AboutHeroSection'
import CollaborationSection from '@/components/CollaborationSection'
import ConnectionsSection from '@/components/ConnectionsSection'
import ContactSection from '@/components/ContactSection'
import MissionVisionSection from '@/components/MissionVissionSection'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About Us - Let\'s Study Portal',
  description: "At Let's Study Portal, we simplify your search for the ideal schools and programs. Our platform connects you with institutions that align perfectly with your academic and personal aspirations.",
}

export default function Page() {
  return (
    <>
        <AboutHeroSection />
        <CollaborationSection />
        <MissionVisionSection />
        <ConnectionsSection />
        <ContactSection />
    </>
  )
}