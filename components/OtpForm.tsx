"use client"
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/components/ui/input-otp";
import {useState} from "react";
import {UseFormReturn} from "react-hook-form";
import {authClient} from "@/auth-client";
import {CircleLoader, MoonLoader} from "react-spinners";
import {useRouter} from "next/navigation";
import {z} from "zod";
import {signupSchema} from "@/validation/user";
import {useMutation} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {setCookie, signup} from "@/utils/cookie";
import {setCookieServer} from "@/utils/cookies";
import axios from "axios";

type props = {
    form:  UseFormReturn<SignupSchema, any,SignupSchema>
    changeStep: (step:number) => void
}


const OtpForm = ({form, changeStep}: props) => {
    const [otp, setOtp] = useState('');

    const router = useRouter()

    const {mutate, isPending} = useMutation({
        onError: (error) => {
            console.log(error)
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
        onSuccess: async (data) => {
            console.log(data)
            await setCookieServer({name: 'access_token', value: data.accessToken, maxAge: 60 * 60 * 24});
            await setCookieServer({name: 'refresh_token', value: data.refreshToken, maxAge: 60 * 60 * 24 * 14});

            router.push("/")
        },
        mutationFn:  async (values:SignupSchema) => {
            return await signup({...values, otp})
        }
    })

    const onSubmit = (values: z.infer<typeof signupSchema>)=> {
        return mutate(values)
    }

    return (
        <>
            <button
                onClick={() => changeStep(0)}
                className={'rounded-lg flex items-center justify-center pb-1.5 font-bold bg-white size-8 text-2xl text-start cursor-pointer'}>&#x2190;</button>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <p className={'text-[#ccc] font-semibold mb-2'}>Enter Code</p>
                <InputOTP containerClassName={'mb-7 text-white'} maxLength={5} onChange={(v) => setOtp(v)}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                    </InputOTPGroup>
                </InputOTP>
                <button type={'submit'} disabled={isPending} className={'form-btn'}>
                    {isPending ?
                        <CircleLoader
                            size={15}
                            loading={true}
                        />
                        :
                        'Verify'}
                </button>
            </form>
        </>
    );
};

export default OtpForm;
