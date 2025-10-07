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
import {signup} from "@/utils/cookie";

type props = {
    form:  UseFormReturn<SignupSchema, any,SignupSchema>
    changeStep: (step:number) => void
}


const OtpForm = ({form, changeStep}: props) => {
    const [otp, setOtp] = useState('');

    const router = useRouter()

    const {mutate, isPending} = useMutation({
        onError: (error) => {
            if("message" in error.reponse?.data) {
                return toast.error(error.response.data.message)
            }
            return toast.error(error.message)
        },
        onSuccess: (data) => {
            console.log(data);
            router.push("/")
        },
        mutationFn:  async (values:SignupSchema) => {
            await signup({...values, otp})
        }
    })

    const onSubmit = (values: z.infer<typeof signupSchema>)=> {
        mutate({...values, opt: otp})
    }

    return (
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

    );
};

export default OtpForm;
