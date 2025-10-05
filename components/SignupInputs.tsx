"use client"

import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useMutation} from "@tanstack/react-query";
import {FormEvent, useState} from "react";
import {UseFormReturn} from "react-hook-form"
import axios from "axios";
import {Input} from "@/components/ui/input";
import {authClient} from "@/auth-client";
import {z} from "zod";
import {signupSchema} from "@/validation/user";
import ErrorMessage from "@/components/ErrorMessage";

type props = {
    form:  UseFormReturn<SignupSchema, any, SignupSchema>
    changeStep: (step:number) => void
}

const SignupInputs = ({form, changeStep}: props) => {
    const [error, setError] = useState('');
    const {mutate, isPending, isError, data, status} = useMutation({
        onError: (error) => {

        },
        mutationFn:  async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

        }
    })

    const onSubmit =async (values: z.infer<typeof signupSchema>) => {

    }

    if(isPending) return <div>Loading...</div>

    return (
        <>
            <p className={'title'}>Sign Up & Personalize</p>
            {error && <ErrorMessage>{error}</ErrorMessage>}
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
                    <button className={'form-btn'} type="submit">Send Code</button>
                </form>
            </Form>
        </>
    );
};

export default SignupInputs
