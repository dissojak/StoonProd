import React from "react";
import Image from "next/image";

type Client = {
  logo?: string;
  name?: string;
};

interface ClientsProps {
  clients?: Client[] | null;
}

export default function Clients({ clients }: ClientsProps) {
  if (!clients || clients.length === 0) return null;

  return (
    <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>
      <ul className="clients-list has-scrollbar">
        {clients.map((client, index) => (
          <li key={index} className="clients-item">
            <a href="#">
              <Image
                src={client.logo || "/assets/images/default.jpg"}
                alt={client.name || "client logo"}
                width={500}
                height={300}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
