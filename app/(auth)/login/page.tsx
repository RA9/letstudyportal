import LoginPageComponent from '@/components/LoginPage'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Login - Let\'s Study Portal',
  description: "Welcome back! Login to your account.",
}



export default function Page() {
    return <LoginPageComponent />
  }