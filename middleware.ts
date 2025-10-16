import { NextResponse, NextRequest } from 'next/server'
import {base64url} from 'jose'
import {cookies} from "next/headers";
import {refreshUserToken, setCookieServer} from "@/utils/serverActions";
import {RequestCookies, ResponseCookies} from "next/dist/compiled/@edge-runtime/cookies";


/**
 * Copy cookies from the Set-Cookie header of the response to the Cookie header of the request,
 * so that it will appear to SSR/RSC as if the user already has the new cookies.
 */
function applySetCookie(req: NextRequest, res: NextResponse) {
    // 1. Parse Set-Cookie header from the response
    const setCookies = new ResponseCookies(res.headers);

    // 2. Construct updated Cookie header for the request
    const newReqHeaders = new Headers(req.headers);
    const newReqCookies = new RequestCookies(newReqHeaders);
    setCookies.getAll().forEach((cookie) => newReqCookies.set(cookie));

    // 3. Set up the “request header overrides” (see https://github.com/vercel/next.js/pull/41380)
    //    on a dummy response
    // NextResponse.next will set x-middleware-override-headers / x-middleware-request-* headers
    const dummyRes = NextResponse.next({ request: { headers: newReqHeaders } });

    // 4. Copy the “request header overrides” headers from our dummy response to the real response
    dummyRes.headers.forEach((value, key) => {
        if (key === 'x-middleware-override-headers' || key.startsWith('x-middleware-request-')) {
            res.headers.set(key, value);
        }
    });
}


const secret = base64url.decode(process.env.JWT_SECRET!)

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    res.cookies.set('foo', 'bar');

    // Apply those cookies to the request
    applySetCookie(req, res);
    const {pathname} = req.nextUrl;
    const cookieStore = await cookies();

    const refreshToken = cookieStore.get('refresh_token')
    const accessToken = cookieStore.get('access_token')

    if (pathname.startsWith('/dashboard')) {
        if (!refreshToken && !accessToken) {
            // not authenticated
            return NextResponse.redirect(new URL("/signup", req.url))
        }
        // if(refreshToken && !accessToken) {
        //     console.log('step 3')
        //     // refresh user tokens
        //     const response = await refreshUserToken();
        //     if(response?.status === 200) {
        //         res.cookies.set({
        //             name: 'access_token',
        //             value: response.data.accessToken,
        //             maxAge: 60 * 60 * 24,
        //             httpOnly: true
        //         });
        //         res.cookies.set({
        //             name: 'refresh_token',
        //             value: response.data.refreshToken,
        //             maxAge: 60 * 60 * 24 * 7,
        //             httpOnly: true
        //         })
        //         return res
        //     }
        //
        // }
    }
}

