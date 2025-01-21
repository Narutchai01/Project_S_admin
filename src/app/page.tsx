import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    await redirect("/auth");
  } else {
    await redirect("/dashboard/skincare");
  }

  return (
    <div className="jun-layout jun-layout-standalone">
      <h1>home</h1>
    </div>
  );
}
