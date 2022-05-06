import { motion } from "framer-motion";

const DragConstrainedToY = (dragConstraints: any) => (
  <motion.div className="inline-block ml-4" drag="y" whileTap={{ scale: 1.3 }} dragMomentum={false} dragConstraints={dragConstraints}>
    <svg width={60} height={60} className="fill-cyan-700">
      <rect width={60} height={60} />
    </svg>
  </motion.div>
);

export default DragConstrainedToY;
