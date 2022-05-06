import { motion } from "framer-motion";
import { useState } from "react";

const Alignment = {
  TOP_LEFT: 0,
  TOP_RIGHT: 1,
  BOTTOM_RIGHT: 2,
  BOTTOM_LEFT: 3,
};

const DragDropAnywhere = (dragConstraints: any) => {
  const [alignment, setAlignment] = useState(Alignment.TOP_LEFT);

  const handleDragSnapUpdate = (_: any, { point }: any) => {
    const { innerHeight, innerWidth } = window;
    const halfHeight = innerHeight / 2;
    const halfWidth = innerWidth / 2;

    if (point.x < halfWidth && point.y < halfHeight) {
      setAlignment(Alignment.TOP_LEFT);
    } else if (point.x > halfWidth && point.y < halfHeight) {
      setAlignment(Alignment.TOP_RIGHT);
    } else if (point.x < halfWidth && point.y > halfHeight) {
      setAlignment(Alignment.BOTTOM_LEFT);
    } else if (point.x > halfWidth && point.y > halfHeight) {
      setAlignment(Alignment.BOTTOM_RIGHT);
    }
  };

  let constraints;

  if (alignment === Alignment.TOP_LEFT) {
    constraints = { left: 20, top: 20 };
  }
  if (alignment === Alignment.TOP_RIGHT) {
    constraints = { right: 20, top: 20 };
  }
  if (alignment === Alignment.BOTTOM_RIGHT) {
    constraints = { right: 20, bottom: 20 };
  }
  if (alignment === Alignment.BOTTOM_LEFT) {
    constraints = { left: 20, bottom: 20 };
  }

  return (
    <motion.div
      className="fixed inline-block"
      style={{ ...constraints }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={1}
      onDragEnd={handleDragSnapUpdate}
      layout
    >
      <svg width={60} height={60} className="fill-cyan-600">
        <circle cx="30" cy="30" r="30" />
      </svg>
    </motion.div>
  );
};

export default DragDropAnywhere;
