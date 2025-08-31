import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AdminFigmaForm from "./AdminFigmaForm";
import { redirect } from "next/navigation";


export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== "admin") {
    redirect("/auth/signin");
  }
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-32 px-4 sm:px-8">
      <div className="max-w-2xl mx-auto">
        <AdminFigmaForm />
        <form action="/api/auth/signout" method="POST" className="mt-8 flex justify-center">
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
        </form>
      </div>
    </main>
  );
}
