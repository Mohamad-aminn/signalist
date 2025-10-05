import {z} from "zod";

export const signupSchema = z.object({
    name: z.string().min(4).max(55),
    phoneNumber:z.string().max(125),
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