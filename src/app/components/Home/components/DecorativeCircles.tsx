import React from "react";
import { useCircles } from "../hooks/useCircles";

interface DecorativeCirclesProps {
  count?: number;
  className?: string;
}

const DecorativeCircles: React.FC<DecorativeCirclesProps> = ({ count = 10, className }) => {
  const circles = useCircles(count);
  return (
    <ul className={className ?? "circles"}>
      {circles.map((i) => (
        <li key={i}></li>
      ))}
    </ul>
  );
};

export default DecorativeCircles;
