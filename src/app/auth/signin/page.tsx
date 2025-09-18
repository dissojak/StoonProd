"use client";
import { signIn } from "next-auth/react";
import { useRef, useState } from "react";
import Link from "next/link";
import { User, Lock, Eye, EyeOff, AlertCircle, Loader2 } from "lucide-react";

export default function SignInPage() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");
  const [showSecret, setShowSecret] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const secretPassword = "ena9a7betAdem";

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);

    if (/^emna/i.test(value) || /^amna/i.test(value)) {
      setNotification("Hi there, it's me Adem! Click the eye to reveal password 😉");
    } else {
      setNotification("");
      setShowSecret(false);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRevealSecret = () => {
    setShowSecret((prev) => {
      const next = !prev;
      if (next) {
        setPassword(secretPassword);
        setShowPassword(true);
        passwordRef.current?.focus();
      }
      return next;
    });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    let finalUsername = username;
    function isSpecialUserWithSecretPassword(username: string, password: string) {
      const isSpecialUser = /^emna/i.test(username) || /^amna/i.test(username);
      return isSpecialUser && password === secretPassword;
    }
    if (isSpecialUserWithSecretPassword(username, password)) {
      finalUsername = "EmnaGmati";
    }

    const res = await signIn("credentials", {
      redirect: false,
      username: finalUsername,
      password,
    });

    if (res?.error) {
      setError(res.error);
      setIsSubmitting(false);
    } else {
      window.location.href = "/admin";
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-950 p-4 sm:p-6">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur p-6 sm:p-8 shadow-2xl"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.08),transparent_60%)]" />

          <div className="mb-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Admin Sign In</h1>
            <p className="mt-1 text-zinc-400 text-sm">
              Access restricted area. Authorized personnel only.
            </p>
          </div>

          {notification && (
            <div className="mb-4 space-y-2">
              <div className="flex items-center justify-between rounded-md bg-blue-600/90 p-2 sm:p-3 text-white">
                <span className="text-sm sm:text-base">{notification}</span>
                <button
                  type="button"
                  onClick={handleRevealSecret}
                  className="ml-2 rounded bg-blue-700 px-2 py-1 text-sm hover:bg-blue-600"
                  aria-label={
                    showSecret ? "Hide special password" : "Reveal and autofill special password"
                  }
                >
                  {showSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {showSecret && (
                <div className="rounded-md bg-blue-500/90 p-2 sm:p-3 text-center text-white text-sm sm:text-base font-semibold">
                  Password: {secretPassword}
                </div>
              )}
            </div>
          )}

          {error && (
            <div
              className="mb-4 flex items-center gap-2 rounded-md border border-red-900 bg-red-900/40 p-3 text-red-300"
              role="alert"
              aria-live="polite"
            >
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <div className="space-y-4 sm:space-y-5">
            <label className="block text-sm font-medium text-zinc-300" htmlFor="username">
              Username
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-400">
                <User className="h-4 w-4" />
              </span>
              <input
                id="username"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800/80 pl-10 pr-3 py-2 text-white placeholder-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
                autoComplete="username"
                required
              />
            </div>

            <label className="block text-sm font-medium text-zinc-300" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-400">
                <Lock className="h-4 w-4" />
              </span>
              <input
                id="password"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800/80 pl-10 pr-10 py-2 text-white placeholder-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                ref={passwordRef}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-2 flex items-center rounded p-1 text-zinc-400 hover:text-zinc-200 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-teal-600 px-4 py-2.5 font-semibold text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Signing in...
              </>
            ) : (
              <>Sign In</>
            )}
          </button>

          <div className="mt-4 text-center text-xs text-zinc-500">
            <span>
              Having trouble? Return to{" "}
              <Link href="/" className="text-teal-400 hover:text-teal-300 underline">
                Home
              </Link>
              .
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}
