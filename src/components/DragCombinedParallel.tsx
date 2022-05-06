import { motion, useMotionValue } from "framer-motion";

const DragCombinedParallel = (dragConstraints: any) => {
  const x = useMotionValue(0);

  return (
    <>
      <motion.div
        className="inline-block"
        drag="x"
        whileTap={{ scale: 1.3 }}
        whileDrag={{ opacity: 0.5 }}
        dragMomentum={false}
        dragConstraints={dragConstraints}
        style={{ x }}
      >
        <svg width={60} height={60} className="fill-sky-700">
          <rect width={60} height={60} />
        </svg>
      </motion.div>
      <motion.div
        className="inline-block ml-4"
        drag="x"
        whileTap={{ scale: 1.3 }}
        whileDrag={{ opacity: 0.5 }}
        dragMomentum={false}
        dragConstraints={dragConstraints}
        style={{ x }}
      >
        <svg width={60} height={60} className="fill-sky-800">
          <rect width={60} height={60} />
        </svg>
      </motion.div>
    </>
  );
};

export default DragCombinedParallel;
