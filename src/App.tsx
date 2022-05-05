import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const Alignment = {
  TOP_LEFT: 0,
  TOP_RIGHT: 1,
  BOTTOM_RIGHT: 2,
  BOTTOM_LEFT: 3,
};

function App() {
  const constraintsRef_1 = useRef(null);
  const constraintsRef_2 = useRef(null);

  const [alignment, setAlignment] = useState(Alignment.TOP_LEFT);

  const handleDragUpdate = (_: any, { point }: any) => {
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
    <div className="bg-gradient-to-br from-cyan-300 to-blue-500 w-screen h-[100svh] fixed overflow-hidden overscroll-none p-10 ">
      <div className="relative w-full h-full border-4 border-cyan-800 touch-none pointer-events-none" ref={constraintsRef_1}>
        <motion.div
          className="touch-auto pointer-events-auto inline-block absolute top-10 left-10"
          drag
          whileTap={{ scale: 1.3 }}
          whileDrag={{ opacity: 0.5 }}
          dragMomentum={false}
          dragConstraints={constraintsRef_1}
        >
          <svg width={60} height={60} className="fill-cyan-800">
            <rect width={60} height={60} />
          </svg>
        </motion.div>

        <motion.div
          className="touch-auto pointer-events-auto inline-block absolute top-28 left-28"
          drag="x"
          whileTap={{ scale: 1.3 }}
          whileDrag={{ opacity: 0.5 }}
          dragMomentum={false}
          dragConstraints={constraintsRef_1}
        >
          <svg width={60} height={60} className="fill-cyan-600">
            <rect width={60} height={60} />
          </svg>
        </motion.div>

        <motion.div
          className="touch-auto pointer-events-auto inline-block absolute top-10 right-10"
          drag="y"
          whileTap={{ scale: 1.3 }}
          whileDrag={{ opacity: 0.5 }}
          dragMomentum={false}
          dragConstraints={constraintsRef_1}
        >
          <svg width={60} height={60} className="fill-cyan-600">
            <rect width={60} height={60} />
          </svg>
        </motion.div>

        <motion.div
          className="touch-auto pointer-events-auto inline-block fixed"
          style={{ ...constraints }}
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragElastic={1}
          onDragEnd={handleDragUpdate}
          layout
        >
          <svg width={60} height={60} className="fill-cyan-600">
            <circle cx="30" cy="30" r="30" />
          </svg>
        </motion.div>
      </div>

      <div
        className="w-[75vw] border-4 border-violet-700 h-[30svh] absolute bottom-5 left-2 touch-none pointer-events-none"
        ref={constraintsRef_2}
      >
        <motion.div
          className="touch-auto pointer-events-auto inline-block"
          drag
          whileTap={{ scale: 1.3 }}
          whileDrag={{ opacity: 0.5 }}
          dragElastic={0.75}
          dragConstraints={constraintsRef_2}
        >
          <svg width={60} height={60} className="fill-violet-700">
            <circle cx="30" cy="30" r="30" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
