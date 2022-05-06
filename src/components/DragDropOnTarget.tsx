import clsx from "clsx";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Color = {
  MISS: 0,
  HIT: 1,
};

const DragDropOnTarget = () => {
  const dropTarget = useRef<HTMLDivElement>(null);

  const [color, setColor] = useState(Color.MISS);

  const handleDragTargetColor = (_: any, { point }: any) => {
    const target = dropTarget.current;
    if (!target) return;

    const { top, bottom, left, right } = target.getBoundingClientRect();

    if (left <= point.x && point.x <= right && top <= point.y && point.y <= bottom) {
      setColor(Color.HIT);
    } else {
      setColor(Color.MISS);
    }
  };

  let targetColor;

  if (color === Color.MISS) {
    targetColor = "fill-transparent";
  }
  if (color === Color.HIT) {
    targetColor = "fill-lime-200/30";
  }

  return (
    <>
      <motion.div
        className="inline-block "
        drag
        whileTap={{ scale: 1.3 }}
        whileDrag={{ opacity: 0.5 }}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragElastic={1}
        onDrag={handleDragTargetColor}
      >
        <svg width={50} height={50} className={clsx("fill-lime-400")}>
          <circle cx="25" cy="25" r="24" />
        </svg>
      </motion.div>
      <div id="droptarget" ref={dropTarget} className="absolute right-0 pointer-events-none top-1/2 touch-none">
        <svg width={100} height={100} className={clsx("stroke-lime-400 stroke-2", targetColor)}>
          <circle cx="50" cy="50" r="49" />
        </svg>
      </div>
    </>
  );
};

export default DragDropOnTarget;
