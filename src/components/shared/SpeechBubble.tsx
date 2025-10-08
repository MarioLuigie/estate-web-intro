import React from "react";
import { motion } from "framer-motion";

interface SpeechBubbleProps {
  text: string;
  direction?: "left" | "right";
  className?: string;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  text,
  direction = "left",
  className = "",
}) => {
  const tailPosition =
    direction === "left"
      ? "left-4 -bottom-2 rotate-45"
      : "right-4 -bottom-2 -rotate-45";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 shadow-lg rounded-2xl px-4 py-2 max-w-xs ${className}`}
    >
      {text}
      <div
        className={`absolute w-4 h-4 bg-white dark:bg-neutral-800 shadow-md ${tailPosition}`}
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
    </motion.div>
  );
};

export default SpeechBubble;
