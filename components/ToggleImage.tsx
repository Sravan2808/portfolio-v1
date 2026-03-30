"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MorphImageDialog from "@/components/motion-primitives/morphing-dialog";

const ToggleImage: React.FC = () => {
  const [isFirst, setIsFirst] = useState<boolean>(true);

  return (
    <div className="flex flex-col items-center gap-4">

      <button
        onClick={() => setIsFirst((prev) => !prev)}
        className="px-4 py-2 bg-black text-white rounded-lg"
      >
        Toggle Image
      </button>

      <div className="relative w-[100px] h-[100px] overflow-hidden">
        <AnimatePresence mode="wait">
          {isFirst ? (
            <motion.div
              key="img1"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <MorphImageDialog src="/images/logo/Gruz.jpeg" />
            </motion.div>
          ) : (
            <motion.div
              key="img2"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <MorphImageDialog src="/images/logo/mark.jpeg" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default ToggleImage;