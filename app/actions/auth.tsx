import { SignupFormSchema, FormState } from '@/lib/definitions'

export async function register(prevState: any, formData: FormData) {
  try {
    const validatedFields = SignupFormSchema.safeParse({
      firstName: formData.get('firstname'),
      lastName: formData.get('lastname'),
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

    console.log({ temp: validatedFields.data} )

    // If the form is valid, send a POST request to the API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFields.data),
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        errors: result.errors || {},
        message: result.message || 'Failed to register. Please try again.',
      }
    }

    return result
  } catch (error) {
    return {
      message: 'Server error. Please try again later.',
    }
  }
}

export async function login(prevState: any, formData: FormData) {
  // Implement login logic here
}