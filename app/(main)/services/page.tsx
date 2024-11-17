import ServicesComponent from '@/components/Services'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Services - Let\'s Study Portal',
  description: "At Let's Study Portal, we offer a range of services to support international students in their educational journey. From school search to program comparison, we provide the tools and resources you need to succeed.",
}

export default function Page() {
  return <ServicesComponent />
}
