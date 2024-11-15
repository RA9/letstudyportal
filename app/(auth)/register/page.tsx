import SignupPageComponent from '@/components/SignupPage'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Sign Up - Let\'s Study Portal',
  description: "Register an account to get started with Let's Study Portal.",
}


export default function Page() {
    return <SignupPageComponent />
  }