import AdminFigmaForm from "./AdminFigmaForm";


export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-16 px-4 sm:px-8">
      <div className="max-w-2xl mx-auto">
        <AdminFigmaForm />
      </div>
    </main>
  );
}
