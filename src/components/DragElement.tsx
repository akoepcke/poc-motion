import { motion } from "framer-motion";

const DragElement = () => (
  <motion.div className="inline-block" drag whileTap={{ scale: 1.3 }} whileDrag={{ opacity: 0.5 }}>
    <svg width={60} height={60} className="fill-teal-900">
      <circle cx="30" cy="30" r="30" />
    </svg>
  </motion.div>
);

export default DragElement;
