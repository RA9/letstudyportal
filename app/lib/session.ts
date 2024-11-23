// import 'server-only'
import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'


const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

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

export async function decrypt(session: string | undefined = '') {
    try {
      const { payload } = await jwtVerify(session, encodedKey, {
        algorithms: ['HS256'],
      })
      return payload
    } catch (error) {
      console.log('Failed to verify session')
    }
  }


export async function deleteSession() {
    const cookieStore = cookies()
    cookieStore.delete('session')
  }