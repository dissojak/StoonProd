"use client";
import { useState } from "react";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!username.trim()) return setError("Username is required.");
    if (!email.trim()) return setError("Email is required.");
    if (!password) return setError("Password is required.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");
    if (password !== passwordVerify) return setError("Passwords do not match.");

    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    setLoading(false);

    if (res.ok) {
      setSuccess("Account created! Please check your email for an activation link or code.");
      setUsername(""); setEmail(""); setPassword(""); setPasswordVerify("");
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data?.error || "Signup failed. Try again.");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-950 p-4">
      <div className="w-full max-w-md bg-zinc-900/80 rounded-xl p-8 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-2xl font-bold text-white text-center">Sign Up</h1>
          <input
            type="text"
            className="w-full rounded-md border border-zinc-700 bg-zinc-800/80 px-4 py-2 text-white"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            className="w-full rounded-md border border-zinc-700 bg-zinc-800/80 px-4 py-2 text-white"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full rounded-md border border-zinc-700 bg-zinc-800/80 px-4 py-2 text-white"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full rounded-md border border-zinc-700 bg-zinc-800/80 px-4 py-2 text-white"
            placeholder="Confirm Password"
            value={passwordVerify}
            onChange={e => setPasswordVerify(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-teal-600 py-2 text-white font-semibold hover:bg-teal-700"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
          {error && <div className="text-red-400 text-sm text-center">{error}</div>}
          {success && <div className="text-green-400 text-sm text-center">{success}</div>}
        </form>
      </div>
    </main>
  );
}