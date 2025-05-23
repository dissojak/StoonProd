"use client";

import { motion } from "framer-motion";
import PropTypes from "prop-types";

function FloatingPaths({ position }) {
  // Optional fallback
  const safePosition = typeof position === "number" ? position : 1;

  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * safePosition} -${189 + i * 6}C-${
      380 - i * 5 * safePosition
    } -${189 + i * 6} -${312 - i * 5 * safePosition} ${216 - i * 6} ${
      152 - i * 5 * safePosition
    } ${343 - i * 6}C${616 - i * 5 * safePosition} ${470 - i * 6} ${
      684 - i * 5 * safePosition
    } ${875 - i * 6} ${684 - i * 5 * safePosition} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute sm:block xs:hidden inset-0 pointer-events-none">
      <svg className="w-full h-full text-white" viewBox="0 0 696 316" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

FloatingPaths.propTypes = {
  position: PropTypes.number.isRequired,
};


export default function BackgroundPaths({ children }) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
        {children}
      </div>
    </div>
  );
}
