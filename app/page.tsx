import {auth} from "@/auth";
import {cookies, headers} from "next/headers";
import db from "@/db/db";
import {user, account, verification} from "@/db/schema/user"
import {createCookie} from "@/utils/cookie";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  await createCookie()
  const cookieStore = await cookies()

  const cookie =  cookieStore.get('name');
  console.log(cookie)
  const users = await db.select().from(user)
  const accounts = await db.select().from(account)
  const verifications = await db.select().from(verification)

  console.log(users, accounts, verifications)

  console.log(session)
  return (
    <div>
      all good go do what you gotta do
    </div>
  );
}
