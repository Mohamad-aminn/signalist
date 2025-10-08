import {NextRequest} from "next/server";
import {createCookie} from "@/utils/cookie";

export const GET = async (req: NextRequest) => {
    const cookie = req.cookies.get('name')

    return Response.json({data: cookie?.value}, {status:200})
}

export const POST = async (req: NextRequest) => {

    await createCookie();

    return Response.json({}, {status:200})
}