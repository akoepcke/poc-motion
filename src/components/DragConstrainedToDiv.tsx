import { motion } from "framer-motion";
import { useRef } from "react";

const DragConstrainedToDiv = () => {
  const constraintsRef = useRef(null);

  return (
    <div
      className="w-[75vw] border-4 border-violet-700 h-[20vh] absolute -bottom-10 -left-10 touch-none pointer-events-none"
      ref={constraintsRef}
    >
      <motion.div
        className="inline-block pointer-events-auto touch-auto"
        drag
        whileTap={{ scale: 1.3 }}
        whileDrag={{ opacity: 0.5 }}
        dragElastic={0}
        dragConstraints={constraintsRef}
      >
        <svg width={60} height={60} className="fill-violet-700">
          <circle cx="30" cy="30" r="30" />
        </svg>
      </motion.div>
      <motion.div
        className="inline-block pointer-events-auto touch-auto"
        drag
        whileTap={{ scale: 1.3 }}
        whileDrag={{ opacity: 0.5 }}
        dragElastic={0.1}
        dragConstraints={constraintsRef}
      >
        <svg width={60} height={60} className="fill-violet-700">
          <circle cx="30" cy="30" r="30" />
        </svg>
      </motion.div>
      <motion.div
        className="inline-block pointer-events-auto touch-auto"
        drag
        whileTap={{ scale: 1.3 }}
        whileDrag={{ opacity: 0.5 }}
        dragElastic={0.5}
        dragConstraints={constraintsRef}
      >
        <svg width={60} height={60} className="fill-violet-800">
          <circle cx="30" cy="30" r="30" />
        </svg>
      </motion.div>
      <motion.div
        className="inline-block pointer-events-auto touch-auto"
        drag
        whileTap={{ scale: 1.3 }}
        whileDrag={{ opacity: 0.5 }}
        dragElastic={1}
        dragConstraints={constraintsRef}
      >
        <svg width={60} height={60} className="fill-violet-900">
          <circle cx="30" cy="30" r="30" />
        </svg>
      </motion.div>
    </div>
  );
};

export default DragConstrainedToDiv;
