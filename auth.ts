import { betterAuth } from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle";
import db from "@/db/db";

export const auth = betterAuth({
    //...
    database: drizzleAdapter(db, {
        provider: "pg"
    })
});

// npx @better-auth/cli@latest generate # to generate sessions schema then generate it