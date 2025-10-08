

// import {cookies} from "next/headers";
import axios from "axios";
import {toast} from "react-toastify";
import {getCookieServer, setCookieServer} from "@/utils/cookies";

export const sendOpt = async (phoneNumber:string) => {
    try {
        // await  getCookieServer()
        await setCookieServer()

        const res = await axios.post("http://127.0.0.1:5000/auth/phone/send-otp", { phoneNumber });
        return res.data;  // Return the data!

    } catch (err) {
        throw err
    }

}

export const signup = async (data: SignupSchema & { otp: string }) => {
    // const cookieStore = await cookies();
    const res = await axios.post("http://127.0.0.1:5000/auth/phone/verify", data);

    // if(res.status === 200) {
    //     cookieStore.set({
    //         name: "new_cookie",
    //         path: "/",
    //         value: 'cookie on login',
    //     });
    //
    //     cookieStore.set({
    //         name: "xx_token",
    //         path: "/",
    //         httpOnly:true,
    //         value: res.data.token,
    //     });
    // }

    return res.data
}

export const getUser = async () => {
    // const cookieStore = await cookies();
    const token = cookieStore.get('xx_token');
    const headers = {
        'Content-Type': 'application/json',
        "x_token": token?.value,
    }
    const res = await axios.get('http://127.0.0.1:5000/user/get', {
        headers,
        withCredentials: true
    })
    console.log(res.data)
}

export const setCookie = async () => {
    // const cookieStore = await cookies();

    // cookieStore.set('urmom', "a simple value", {
    //     httpOnly: true,
    //     maxAge: 1000 * 60 * 60
    // })
}