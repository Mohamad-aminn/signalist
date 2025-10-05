"use client"

import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {signupSchema} from "@/validation/user";
import {z} from "zod";
import SignupInputs from "@/components/SignupInputs";
import OtpForm from "@/components/OtpForm";

const SignupForm = () => {
    const [step, setStep] = useState(0);

    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: "",
            phoneNumber: "",
            name: "",
            password: "",
            // preferredIndustry: "",
            // riskTolerance: "",
            // investmentGoal: "",
        },
    })

    const changeStep = (step:number) => {
        setStep(step)
    }


    if(step === 0) return <SignupInputs changeStep={changeStep} form={form} />

    if(step === 1) return <OtpForm changeStep={changeStep} form={form}/>
};

export default SignupForm