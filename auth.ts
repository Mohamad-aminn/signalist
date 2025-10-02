import { betterAuth } from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle";
import db from "@/db/db";
import {phoneNumber} from "better-auth/plugins";
import sms from "@/utils/sms";

export const auth = betterAuth({
    plugins: [
      phoneNumber({
          sendOTP: async ({phoneNumber, code}) => {
              await sms.send(phoneNumber, process.env.SMS_FROM, `${code} \nکد تایید سیگنالیست`)
          }
      })
    ],
    database: drizzleAdapter(db, {
        provider: "pg"
    })
});

// npx @better-auth/cli@latest generate # to generate sessions schema then generate it