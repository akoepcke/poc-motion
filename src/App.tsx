import { useRef } from "react";
import DragElement from "./components/DragElement";
import DragConstrainedToX from "./components/DragConstrainedToX";
import DragConstrainedToY from "./components/DragConstrainedToY";
import DragConstrainedToDiv from "./components/DragConstrainedToDiv";
import DragDropAnywhere from "./components/DragDropAnywhere";
import DragDropOnTarget from "./components/DragDropOnTarget";
import DragCombinedParallel from "./components/DragCombinedParallel";
import DragCombinedPerpendicular from "./components/DragCombinedPerpendicular";
import DragDropOnCorner from "./components/DragDropOnCorner";

function App() {
  const constraintsRef_1 = useRef(null);

  return (
    <>
      <div className="bg-gradient-to-br from-cyan-300 to-blue-500 w-screen h-[100svh] fixed overflow-hidden overscroll-none p-10 ">
        <div className="relative w-full h-full p-10 border-4 border-cyan-800" ref={constraintsRef_1}>
          <DragElement />
          <DragElement />
          <br />
          <DragConstrainedToX dragConstraints={constraintsRef_1} />
          <DragConstrainedToY dragConstraints={constraintsRef_1} />
          <DragConstrainedToDiv />
          <br />
          <DragDropAnywhere dragConstraints={constraintsRef_1} />
          <DragDropOnCorner dragConstraints={constraintsRef_1} />
          <br />
          <DragDropOnTarget />
          <br />
          <DragCombinedParallel dragConstraints={constraintsRef_1} />
          <br />
          <DragCombinedPerpendicular dragConstraints={constraintsRef_1} />
        </div>
      </div>
    </>
  );
}

export default App;
