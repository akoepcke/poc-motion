import { motion } from "framer-motion";

const DragDropAnywhere = (dragConstraints: any) => (
  <motion.div
    className="inline-block"
    drag
    whileTap={{ scale: 1.3 }}
    whileDrag={{ opacity: 0.5 }}
    dragMomentum={false}
    dragConstraints={dragConstraints}
  >
    <svg width={60} height={60} className="fill-pink-800">
      <rect width={60} height={60} />
    </svg>
  </motion.div>
);

export default DragDropAnywhere;
