"use server"
 
import { cookies } from 'next/headers'
import { decrypt } from '@/app/lib/session'
import { cache } from 'react'
import { redirect } from 'next/navigation'
 
export const verifySession = cache(async () => {
  const cookie = cookies().get('session')?.value
  const session = await decrypt(cookie)
 
  if (!session?.userId) {
    redirect('/login')
  }
 
  return { isAuth: true, userId: session.userId, token: cookie}
})

export const getUser = cache(async () => {
    const session = await verifySession()
    if (!session) return null
   
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${session.userId}`, {
        headers: {
          'Authorization': `Bearer ${session.token}`
        }
      })
      if (res.ok) {
        const user = await res.json()
        return user.user
      }   
      return null
    } catch (error) {
      console.log('Failed to fetch user')
      return null
    }
  })

