"use server"

import {cookies} from "next/headers";
import {ResponseCookie} from "next/dist/compiled/@edge-runtime/cookies";
import axios from "axios";
import {redirect, RedirectType} from "next/navigation";

export const setCookieServer = async (cookieOptions:ResponseCookie ) => {
    const cookieStore = await cookies()

    return cookieStore.set({
       ...cookieOptions,
        httpOnly: true,
    })
}

export const getCookieServer = async (name:string) => {
    const cookieStore = await cookies()

     return cookieStore.get(name);
}

export const getUser = async () => {
        const cookieStore = await cookies();
        const token = cookieStore.get('access_token');

        if(!token) return ;

        const headers = {
            'Content-Type': 'application/json',
            "x_token": token?.value,
        }
        const res = await axios.get('http://127.0.0.1:5000/user/get', {
            headers,
            withCredentials: true
        })

        return res
}

export const refreshUserToken = async () => {
    try {
        const cookieStore = await cookies()
        const refreshToken = cookieStore.get("refresh_token")

        if(!refreshToken) return redirect('/signup', RedirectType.replace);

        const res = await axios.get('http://127.0.0.1:5000/auth/refresh', {
            headers: {
                "Content-Type": "application/json",
                "x_token": refreshToken.value,
            }
        })

        return res
    }catch (err) {
        console.log(err)
    }
}

export const sleep = async (ms:number) => new Promise(resolve => setTimeout(resolve, ms));