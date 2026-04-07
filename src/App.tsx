/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[6rem] font-medium text-gray-900"
      >
        Hello
      </motion.h1>
    </div>
  );
}
