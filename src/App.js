import React, { useState } from "react";
import Header from "./components/Header.js";
import LeftSide from "./components/LeftSide.js";
import Canvas from "./components/Canvas.js";
import data from "./data/treeData.js";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "./css/app.css";

function App() {
  const [blocks, setBlocks] = useState(data);
  const [droppedItems, setDroppedItems] = useState([]);

  const pushToCanvas = (e, blockId) => {
    e.stopPropagation();
    /// when we click this button we need to find the block in the right canvas and add that block to their children elements

    setBlocks((prevBlock) => {
      return prevBlock.map((block) => {
        if (block.id === blockId) {
          return {
            ...block,
            children: [...block.children, {
              id: new Date().getTime().toString(),
              type: "text",
              content: "This is a text label",
              position: { top: 50, left: 50 },
            }]
          }
        }
        return block;
      })
    })

  };

  const addNewBlock = () => {
    const newBlock = {
      id: Date.now().toString(),
      type: "block",
      position: { top: 400, left: 200 },
      size: { height: 200, width: 300 },
      children: [{
        id: "text_1",
        type: "text",
        content: "This is a text label",
        position: { top: 50, left: 50 },
      },],
    };

    setBlocks([...blocks, newBlock]);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Header blocks={blocks} droppedItems={droppedItems} />

        <div className="main">
          <LeftSide
            blocks={blocks}
            setBlocks={setBlocks}
            pushToCanvas={pushToCanvas}
            addNewBlock={addNewBlock}
          />
          <Canvas blocks={blocks} />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
