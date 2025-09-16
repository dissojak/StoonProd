"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");
  const [showSecret, setShowSecret] = useState(false);

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    let finalUsername = username;

    if ((/^emna/i.test(username) || /^amna/i.test(username)) && password === secretPassword) {
      finalUsername = "EmnaGmati";
    }

    const res = await signIn("credentials", {
      redirect: false,
      username: finalUsername,
      password,
    });

    if (res?.error) setError(res.error);
    else window.location.href = "/admin";
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-900 p-4 sm:p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 p-6 sm:p-8 rounded-lg shadow w-full max-w-md space-y-4 sm:space-y-6 relative"
      >
        {notification && (
          <div className="sticky top-0 z-10 space-y-2">
            <div className="bg-blue-600 text-white p-2 sm:p-3 rounded text-center text-sm sm:text-base flex justify-between items-center">
              <span>{notification}</span>
              <button
                type="button"
                onClick={() => setShowSecret(!showSecret)}
                className="ml-2 bg-blue-700 p-1 sm:p-2 rounded text-sm sm:text-base"
              >
                {showSecret ? "🙈" : "👁️"}
              </button>
            </div>
            {showSecret && (
              <div className="bg-blue-500 text-white p-2 sm:p-3 rounded text-center text-sm sm:text-base font-semibold">
                Password: {secretPassword}
              </div>
            )}
          </div>
        )}

        <h1 className="text-xl sm:text-2xl font-bold text-white text-center">Admin Sign In</h1>

        <input
          className="w-full p-2 sm:p-3 rounded bg-zinc-700 text-white text-sm sm:text-base"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input
          className="w-full p-2 sm:p-3 rounded bg-zinc-700 text-white text-sm sm:text-base"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded text-sm sm:text-base"
        >
          Sign In
        </button>

        {error && <div className="text-red-400 mt-2 sm:mt-4 text-sm sm:text-base">{error}</div>}
      </form>
    </main>
  );
}
