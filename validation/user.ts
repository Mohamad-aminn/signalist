import {z} from "zod";

export const signupValidation = z.object({
    fullName: z.string().max(55),
    email:z.email().max(125),
    country:z.string().max(50),
    password: z.string().max(125),
    investmentGoal: z.string().max(55),
    riskTolerance: z.string().max(55),
    preferredIndustry: z.string().max(55)
})

export const signInValidation = z.object({
    email: z.email().max(125),
    password: z.string().max(125),
})