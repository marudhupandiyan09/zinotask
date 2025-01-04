import React, { useState } from "react";
import Header from "./components/Header.js";
import LeftSide from "./components/LeftSide.js";
import Canvas from "./components/Canvas.js";
import "./css/app.css";
// i've used COMPONENT - PRESENTER ARCHITECTURE FOR DEVELOPING THIS TASK
/// first we need to render tree view on the left side based on the data we have
/// then pass the data to leftside component
import data from "./data/treeData.js";
// first component will be header component
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
  const [blocks, setBlocks] = useState(data.blocks);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Header blocks={blocks} />
        <div className="main">
          <LeftSide blocks={blocks} setBlocks={setBlocks} />
          <Canvas />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
