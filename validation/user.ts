import {z} from "zod";

const phoneRegExp = new RegExp('^(\\+98|0)?9\\d{9}$');

export const signupSchema = z.object({
    name: z.string().min(4).max(55),
    phoneNumber:z.string().refine((v) => phoneRegExp.test(v), {
        message: 'Invalid phone number',
    }),
    email:z.email().max(50),
    password: z.string().max(125),
    // investmentGoal: z.string().max(55),
    // riskTolerance: z.string().max(55),
    // preferredIndustry: z.string().max(55)
})

export const signInSchema = z.object({
    email: z.email().max(125),
    password: z.string().max(125),
})