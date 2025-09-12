import AdminFigmaForm from "@/app/admin/components/figma/AdminFigmaForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== "admin") {
    redirect("/auth/signin");
  }
  return <AdminFigmaForm />;
}
