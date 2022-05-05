import { useRef } from "react";
import { motion } from "framer-motion";

function App() {
  const constraintsRef = useRef(null);

  return (
    <div className="bg-gradient-to-br from-cyan-300 to-blue-500 w-screen h-[100svh] fixed overflow-hidden overscroll-none p-10">
      <div className="w-full h-full border-4" ref={constraintsRef}>
        <motion.div
          className="w-16 h-16 bg-pink-800"
          drag
          whileTap={{ scale: 1.3 }}
          whileDrag={{ opacity: 0.5 }}
          dragConstraints={constraintsRef}
        ></motion.div>
      </div>
    </div>
  );
}

export default App;
