"use server"

import {cookies} from "next/headers";

export const setCookieServer = async () => {
    const cookieStore = await cookies()

    cookieStore.set({
        name: 'server',
        value: 'testing',
        httpOnly: true,
        maxAge: 10
    })
}

export const getCookieServer = async () => {
    const cookieStore = await cookies()

    const serverCookie = cookieStore.get("server");
    console.log(serverCookie)
}