import ActivationClient from "./ActivationClient";
export const dynamic = "force-dynamic";

// Treat searchParams as a Promise (the warning implies this shape)
export default async function Page({
  searchParams,
}: {
  readonly searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const emailVal = sp.email;
  const codeVal = sp.code;

  const email = typeof emailVal === "string" ? emailVal : undefined;
  const code = typeof codeVal === "string" ? codeVal : undefined;

  return <ActivationClient email={email} code={code} />;
}