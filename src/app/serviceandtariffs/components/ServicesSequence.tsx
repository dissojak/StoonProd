import React from "react";
import Service from "@/app/components/Services/Services";
import { useServiceSequence } from "../hooks/useServices";

const ServicesSequence: React.FC = () => {
  const sequence = useServiceSequence();
  return (
    <div>
      {sequence.map(({ sectionNumber, service }, idx) => (
        <React.Fragment key={service.title}>
          <Service sectionNumber={sectionNumber} serviceData={service} />
          {idx < sequence.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ServicesSequence;
