import PricingPlan from "@/app/UI/PricingPlan";
import React from "react";

function Service({ serviceData }) {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-teal-600">Our {serviceData.title}</h2>
        <p className="text-xl text-gray-700 mt-4">
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
