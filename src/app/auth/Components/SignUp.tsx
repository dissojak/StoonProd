"use client";
import { useState } from "react";
import { User, Mail, Lock, Loader2 } from "lucide-react";
import Message from "./SignUp/Message";
import FormField from "./SignUp/FormField";

function validateFields(
  username: string,
  email: string,
  password: string,
  passwordVerify: string
): string | null {
  if (!username.trim()) return "Username is required.";
  if (!email.trim()) return "Email is required.";
  if (!password) return "Password is required.";
  if (password.length < 6) return "Password must be at least 6 characters.";
  if (password !== passwordVerify) return "Passwords do not match.";
  return null;
}

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordVerify, setShowPasswordVerify] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateFields(username, email, password, passwordVerify);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    setLoading(false);

    if (res.ok) {
      setSuccess("Account created! Please check your email for an activation link or code.");
      setUsername("");
      setEmail("");
      setPassword("");
      setPasswordVerify("");
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data?.error || "Signup failed. Try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur p-6 sm:p-8 shadow-2xl space-y-5"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.08),transparent_60%)]" />

      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Create Account</h1>
        <p className="mt-1 text-zinc-400 text-sm">Sign up to get started</p>
      </div>

      {error && <Message type="error">{error}</Message>}
      {success && <Message type="success">{success}</Message>}

      <div className="space-y-4">
        <FormField
          id="username"
          label="Username"
          icon={<User className="h-4 w-4" />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Choose a username"
        />
        <FormField
          id="email"
          label="Email"
          type="email"
          icon={<Mail className="h-4 w-4" />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <FormField
          id="password"
          label="Password"
          icon={<Lock className="h-4 w-4" />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showToggle
          showValue={showPassword}
          onToggle={() => setShowPassword((v) => !v)}
          placeholder="Create a password"
        />
        <FormField
          id="confirm-password"
          label="Confirm Password"
          icon={<Lock className="h-4 w-4" />}
          value={passwordVerify}
          onChange={(e) => setPasswordVerify(e.target.value)}
          showToggle
          showValue={showPasswordVerify}
          onToggle={() => setShowPasswordVerify((v) => !v)}
          placeholder="Confirm your password"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-teal-600 px-4 py-2.5 font-semibold text-white hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Creating Account...
          </>
        ) : (
          <>Sign Up</>
        )}
      </button>
    </form>
  );
}
