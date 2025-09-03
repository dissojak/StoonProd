// app/components/ClientThemeProvider.jsx
"use client";

import { ThemeProvider } from "next-themes";

export default function ClientThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
