"use server"

import { SignupFormSchema, FormState } from '@/lib/definitions'
import { createSession, deleteSession } from '@/app/lib/session'
import { redirect } from 'next/navigation'

export async function register(prevState: any, formData: FormData) {
  try {
    const validatedFields = SignupFormSchema.safeParse({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
      phoneNumber: formData.get('phoneNumber'),
      dateOfBirth: formData.get('dateOfBirth') ? new Date(String(formData.get('dateOfBirth'))) : undefined,
      countryOfResidence: formData.get('countryOfResidence') || null
    })

    // If form validation fails, return errors early
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Register.',
      }
    }

    const {confirmPassword, ...rest} = validatedFields.data;

    // If the form is valid, send a POST request to the API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rest),
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        errors: result.errors || {},
        message: result.message || 'Failed to register. Please try again.',
      }
    }

    console.log({result})

    await createSession(result.token)

    redirect('/dashboard')
  } catch (error) {
    return {
      message: 'Server error. Please try again later.',
    }
  }
}

export async function login(prevState: any, formData: FormData) {
  // Implement login logic here
}

export async function logout() {
  deleteSession()
  redirect('/login')
}