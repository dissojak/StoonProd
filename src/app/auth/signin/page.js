"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password
    });
    if (res.error) setError(res.error);
    else window.location.href = "/admin";
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-900">
      <form onSubmit={handleSubmit} className="bg-zinc-800 p-8 rounded shadow max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6 text-white">Admin Sign In</h1>
        <input
          className="w-full mb-4 p-2 rounded bg-zinc-700 text-white"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          className="w-full mb-4 p-2 rounded bg-zinc-700 text-white"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </button>
        {error && <div className="text-red-400 mt-4">{error}</div>}
      </form>
    </main>
  );
}
