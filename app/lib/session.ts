// import 'server-only'
import { cookies } from 'next/headers'

export async function createSession(token: string) {
    //   const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = token;

    cookies().set(
        'session',
        session,
        {
            httpOnly: true,
            secure: true,
            //   expires: expiresAt,
            sameSite: 'lax',
            path: '/',
        }
    )

    return null
}


export async function deleteSession() {
    const cookieStore = cookies()
    cookieStore.delete('session')
  }