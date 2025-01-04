import React, { useState } from "react";
import { useDrop } from "react-dnd";

const Canvas = ({ blocks, setBlocks }) => {
  //// storing the dropped item in the state we can easily mange the dropped items
  const [droppedItems, setDroppedItems] = useState([]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "TREE_NODE",
    //// handleDrop function will be called when the item is dropped on the canvas
    ///// collecting the data handledrop function then show it on the canvas
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  }));

  const handleDrop = (item) => {
    //// this function will be called when the item is dropped on the canvas
    setDroppedItems((prev) => [...prev, item]);
  };

  return (
    <div
      ref={drop}
      className="canvas"
      style={{
        backgroundColor: canDrop ? "lightgreen" : "white",
      }}
    >
      {droppedItems.map((item, index) => (
        <div
          key={index}
          style={{
            marginTop: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "4px",
            backgroundColor: "#f0f0f0",
            width: "fit-content",
          }}
        >
          Dropped Item Type: {item.type}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
