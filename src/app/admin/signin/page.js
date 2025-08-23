"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-lg shadow max-w-sm w-full space-y-4">
        <h2 className="text-xl font-bold mb-2">Sign In</h2>
        <input
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </button>
        {error && <div className="text-red-400">{error}</div>}
      </form>
    </main>
  );
}
