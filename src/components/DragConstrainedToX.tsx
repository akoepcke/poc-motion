import { motion } from "framer-motion";

const DragConstrainedToX = (dragConstraints: any) => (
  <motion.div className="inline-block" drag="x" whileTap={{ scale: 1.3 }} dragMomentum={false} dragConstraints={dragConstraints}>
    <svg width={60} height={60} className="fill-cyan-600">
      <rect width={60} height={60} />
    </svg>
  </motion.div>
);

export default DragConstrainedToX;
