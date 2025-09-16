import AdminFigmaOrder from "@/app/admin/components/figma/AdminFigmaOrder";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "admin") {
    redirect("/auth/signin");
  }
  return <AdminFigmaOrder />;
}
