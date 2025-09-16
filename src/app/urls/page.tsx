"use client";
import Link from "next/link";
import React from "react";

export default function UrlsPage() {
  const isLocalhost =
    typeof window !== "undefined" && window.location.hostname.includes("localhost");

  const baseUrl = isLocalhost ? "http://localhost:3000" : "https://stoonproduction.com";

  const publicUrls = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tariff", path: "/serviceandtariffs" },
    { name: "Contact", path: "/contact" },
  ];

  const privateUrls = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Web Design", path: "/web-design" },
    { name: "Content", path: "/content" },
    { name: "URLs Page", path: "/urls" },
  ];

  const Table: React.FC<{ title: string; urls: { name: string; path: string }[] }> = ({
    title,
    urls,
  }) => (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <table className="border border-gray-300 mx-auto min-w-[60%]">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-3 text-left font-semibold">Name</th>
            <th className="border p-3 text-left font-semibold">URL</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url.path}>
              <td className="border p-3 text-black hover:text-orange-600 font-medium">
                <Link href={url.path}>{url.name}</Link>
              </td>
              <td className="border p-3 text-blue-600 hover:underline font-medium">
                <Link href={url.path}>{baseUrl + url.path}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );

  return (
    <div className="px-24 space-y-10 mt-[100px]">
      <Table title="Private URLs" urls={privateUrls} />
      <Table title="Public URLs" urls={publicUrls} />
    </div>
  );
}
