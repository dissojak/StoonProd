"use client";

import { ThemeProvider, type Attribute } from "next-themes";
import React from "react";

type Props = {
  children: React.ReactNode;
  attribute?: Attribute | Attribute[];
  enableSystem?: boolean;
  defaultTheme?: string;
};

export default function ClientThemeProvider({
  children,
  attribute = "class",
  enableSystem = true,
  defaultTheme = "system",
}: Props) {
  return (
    <ThemeProvider attribute={attribute} enableSystem={enableSystem} defaultTheme={defaultTheme}>
      {children}
    </ThemeProvider>
  );
}
