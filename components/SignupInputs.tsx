"use client"

import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useMutation} from "@tanstack/react-query";
import {UseFormReturn} from "react-hook-form"
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {signupSchema} from "@/validation/user";
import {toast} from "react-toastify";
import {sendOpt, signup} from "@/utils/userActions";
import {useEffect} from "react";
import axios, {AxiosError} from "axios";

type props = {
    form:  UseFormReturn<SignupSchema, any, SignupSchema>
    changeStep: (step:number) => void
}

const SignupInputs = ({form, changeStep}: props) => {
    const {mutate, isPending } =  useMutation<void, AxiosError, { phoneNumber: string }>({
        mutationFn:  async (values) => {
             await sendOpt(values.phoneNumber)
        },
        onError: (error, variables, onMutateResult, context) => {
            if (axios.isAxiosError(error)) {
            const data = error.response?.data;

            // If your API always returns { message: string }
            if (typeof data === 'object' && data && 'message' in data && typeof data.message === 'string') {
                return toast.error(data.message ?? error.response?.statusText);
            }

            // fallback for status or unknown shape
            return toast.error(error.response?.statusText ?? 'Unexpected error');
        }

            toast.error('Unexpected error');
        },
        onSuccess: (data) => {
            toast.info('code has been sent!');
            changeStep(1)
        }
    });

    const onSubmit =async (values: z.infer<typeof signupSchema>) => {
             return await mutate(values)
    }

    return (
        <>
            <p className={'title'}>Sign Up & Personalize</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-xs text-[#ccc]">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type={'password'} placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <button className={'form-btn'} type="submit">{
                        isPending ? "loading..." : "Send Code"
                    }</button>
                </form>
            </Form>
        </>
    );
};

export default SignupInputs
