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

export const getCookieServer = async () => {
    const cookieStore = await cookies()

    const serverCookie = cookieStore.get("server");
    console.log(serverCookie)
}

export const getUser = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token');
    console.log(token)
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