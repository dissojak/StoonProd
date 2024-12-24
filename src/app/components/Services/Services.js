import PricingPlan from "@/app/UI/PricingPlan";
import React from "react";

function Service({ serviceData, sectionNumber }) {
  return (
    <section
      className={`py-10 px-6 ${
        sectionNumber ? 'bg-slate-200 dark:bg-slate-900' : 'bg-gray-50 dark:bg-slate-800'
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-teal-600 dark:text-teal-400">
          Our {serviceData.title}
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">
          Choose the service plan that best suits your needs. Whether it&apos;s an event or a creative project, we have the right options for you.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {serviceData.plans.map((plan) => (
          <PricingPlan key={plan.title} planDetails={plan} />
        ))}
      </div>
    </section>
  );
}

export default Service;
