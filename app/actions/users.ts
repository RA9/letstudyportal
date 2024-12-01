import { cookies } from "next/headers"


const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getUserById(slug: string) {
    try {
        const token = cookies().get('session')?.value

        const response = await fetch(`${API_URL}/users/${slug}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function getUsers(token: string) {
    try {
        const response = await fetch(`${API_URL}/users`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.json()
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function createUser(data: any) {
    const token = cookies().get('session')?.value

    try {
        const response = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
        return response.json()
    } catch (error) {
        console.log(error)
        return null
    }
}