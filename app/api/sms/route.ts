import {NextRequest} from "next/server";
import sms , {smsResponseCode} from "@/utils/sms";

export const POST = async (req: NextRequest) => {
    const { phone, text } = await req.json()

    const res = await sms.send(phone, process.env.SMS_FROM, text)
    if (res.RetStatus !== 1) {
       return Response.json(smsResponseCode[res.RetStatus as SmsStatus], {status: 401})
    }

    return Response.json(res, {status:200})
}