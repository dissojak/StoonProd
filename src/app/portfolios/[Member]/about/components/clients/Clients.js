import Image from "next/image";

// src/components/Clients.js
export default function Clients({ clients }) {
  // Don't show section if no clients from Strapi
  if (!clients || clients.length === 0) {
    return null;
  }

  return (
    <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>
      <ul className="clients-list has-scrollbar">
        {clients.map((client, index) => (
          <li key={index} className="clients-item">
            <a href="#">
              <Image
                src={client.logo}
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
