import { LogoutUser } from "@/components/LogoutUser";
import { authorizeUser } from "@/lib/actions/authorize-user";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await authorizeUser();

  if (user) {
    return (
      <div className="flex flex-col gap-1">
        <p>Home</p>
        {user && <LogoutUser user={user} />}
      </div>
    );
  } else {
    redirect("/auth/login");
  }
}

/* 
1. Buat fungsi untuk authorization
2. Ketika di home & gada user, redirect ke login
3. Ketika di login/register dan ada user, redirect ke home
*/
