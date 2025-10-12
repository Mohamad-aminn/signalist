"use server"

import {cookies} from "next/headers";
import {ResponseCookie} from "next/dist/compiled/@edge-runtime/cookies";
import axios from "axios";

export const setCookieServer = async (cookieOptions:ResponseCookie ) => {
    const cookieStore = await cookies()

    cookieStore.set({
       ...cookieOptions,
        httpOnly: true,
    })
}

export const getCookieServer = async (name:string) => {
    const cookieStore = await cookies()

     return cookieStore.get(name);
}

export const getUser = async () => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('access_token');

        const headers = {
            'Content-Type': 'application/json',
            "x_token": token?.value,
        }
        const res = await axios.get('http://127.0.0.1:5000/user/get', {
            headers,
            withCredentials: true
        })

        if(res.status === 200) {
            // returning user data
            return res.data
        }
    } catch (error) {
        throw error;
    }



}