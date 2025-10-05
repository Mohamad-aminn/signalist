import {NextRequest} from "next/server";
import sms, {smsResponseCode} from "@/utils/sms";

export const POST = async (req: NextRequest) => {
    // const {phoneNumber} = await req.json();

    // const code = Math.floor(Math.random()*90000) + 10000;

    // const res = await sms.send(phoneNumber, process.env.SMS_FROM, `${code}\n\n کد تایید سیگنالیست`)
    //
    // if (res.RetStatus !== 1) {
    //     return Response.json({message: smsResponseCode[res.RetStatus as SmsStatus]}, {status: 401})
    // }

    return Response.json({}, {status:200})
}