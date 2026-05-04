"use client";

import { motion } from "framer-motion";

export default function KPI({
  title,
  value,
}: {
  title: string;
  value: number;
}): JSX.Element {
  return (
    <div>
      <p className="text-xs text-gray-400 uppercase tracking-wider">
        {title}
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-extrabold gradient-text mt-2"
      >
        {value}
      </motion.h2>
    </div>
  );
}