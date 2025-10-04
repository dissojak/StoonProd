import React from "react";

const stats = [
  { label: "Offices Worldwide", value: "3" },
  { label: "Projects Delivered", value: "210+" },
  { label: "Creative Team Members", value: "18" },
  { label: "Years in Business", value: "5" },
];

const StatsGrid: React.FC = () => (
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(s => (
        <div key={s.label} className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">{s.label}</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{s.value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

export default StatsGrid;
