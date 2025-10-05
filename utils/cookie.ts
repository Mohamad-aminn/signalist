"use server"

import {cookies} from "next/headers";
import axios from "axios";

export const sendOpt = async (phoneNumber) => {
    const cookieStore = await cookies()

    const res =await axios.post("http://localhost:5000/phone/send-otp", {
        phoneNumber
    })

    return res
}

export const signup = async (data:SignupSchema) => {
    const res = await axios.post("http://localhost:5000/signup", data);

    return res
}