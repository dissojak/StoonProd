// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { redirect } from "next/navigation";
// import AdminPageClient from "./pages/admin/AdminPageClient";

// export default async function AdminPage() {
//   const session = await getServerSession(authOptions)
//   if (!session || session.user?.role !== "admin") {
//     redirect("/auth/signin")
//   }
//   return <AdminPageClient />
// }

import { redirect } from "next/navigation";

export default function Page() {
  redirect("/admin/figma/form");
}
