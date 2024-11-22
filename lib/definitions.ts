import { date, z } from 'zod'

export const SignupFormSchema = z.object({
    firstname: z
        .string()
        .min(2, { message: 'First name must be at least 2 characters long.' })
        .trim(),
    lastname: z
        .string()
        .min(2, { message: 'Last name must be at least 2 characters long.' })
        .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    phoneNumber: z
        .string().min(10, { message: 'Please enter a valid phone number.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim(),
    confirmPassword: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim(),
    dateOfBirth: date().max(new Date(), {
        message: 'Date of birth must be in the past.',
    }).refine((data) => {
        const age = new Date().getFullYear() - new Date(data).getFullYear()
        return age >= 18;
    }, { message: 'You must be at least 18 years old.' }),

}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ["confirm_password"],
})

export type FormState =
    | {
        errors?: {
            firstname?: string[]
            lastname?: string[]
            email?: string[]
            phoneNumber?: string[]
            password?: string[]
            confirmPassword?: string[]
            dateOfBirth?: string[]
        }
        message?: string
    }
    | undefined