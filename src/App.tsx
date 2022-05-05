import { useRef } from "react";
import { motion } from "framer-motion";

function App() {
  const constraintsRef_1 = useRef(null);
  const constraintsRef_2 = useRef(null);

  return (
    <div className="bg-gradient-to-br from-cyan-300 to-blue-500 w-screen h-[100svh] fixed overflow-hidden overscroll-none p-10 ">
      <div className="w-full h-full border-4 border-cyan-800 touch-none pointer-events-none" ref={constraintsRef_1}>
        <motion.div
          className="touch-auto pointer-events-auto inline-block"
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
          dragElastic={0.7}
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
