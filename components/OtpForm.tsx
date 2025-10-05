"use client"
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/components/ui/input-otp";
import {useState} from "react";
import {UseFormReturn} from "react-hook-form";
import {authClient} from "@/auth-client";
import {CircleLoader, MoonLoader} from "react-spinners";
import {useRouter} from "next/navigation";

type props = {
    form:  UseFormReturn<SignupSchema, any,SignupSchema>
    changeStep: (step:number) => void
}


const OtpForm = ({form, changeStep}: props) => {
    const [opt, setOpt] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter()

    const verifyOpt = async () => {
        try {
            setLoading(true);

            const res = await authClient.phoneNumber.verify({
                phoneNumber: '09201370140',
                code: opt,
            });
            console.log(res)
            if(res.error) {
                throw Error(res.error.message)
            }

            // router.push('/')
            // update user table update name country and password
        } catch (err) {
            console.log(err)
            setError("something went wrong");
        } finally {
            setLoading(false);
        }

    }

    return (
        <div>
            <p className={'text-[#ccc] font-semibold mb-2'}>Enter Code</p>
            <InputOTP containerClassName={'mb-7 text-white'} maxLength={5} onChange={(v) => setOpt(v)}>
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
            <button onClick={verifyOpt} disabled={loading} className={'form-btn'}>
                {loading ?
                    <CircleLoader
                        size={15}
                        loading={true}
                    />
                        :
                    'Verify'}
            </button>
        </div>

    );
};

export default OtpForm;
