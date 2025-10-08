import { betterAuth } from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle";
import db from "@/db/db";
import {phoneNumber} from "better-auth/plugins";
import sms from "@/utils/sms";
import * as schema from "@/db/schema/user"

export const auth = betterAuth({
    plugins: [
      phoneNumber({
          sendOTP: async ({phoneNumber, code}, request) => {
              const res = await sms.send(phoneNumber, process.env.SMS_FROM, `${code} \n\nکد تایید سیگنالیست`);
              console.log(res);
          },
          callbackOnVerification: async ({ phoneNumber, user }, request) => {
              // Implement callback after phone number verification
              console.log(phoneNumber, user);
          },
          signUpOnVerification: {
              getTempEmail: (phoneNumber) => {
                  return `${phoneNumber}@my-site.com`
              },
              //optionally, you can also pass `getTempName` function to generate a temporary name for the user
              getTempName: (phoneNumber) => {
                  return phoneNumber //by default, it will use the phone number as the name
              }
          }
      })
    ],
    trustedOrigins: ['http://localhost:3000'],
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            ...schema,
            user: schema.user
        }
    })
});

// npx @better-auth/cli@latest generate # to generate sessions schema then generate it