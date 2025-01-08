import React, { useState } from "react";
import Block from "./Block";
import { useDrop } from "react-dnd";

const Canvas = ({ blocks }) => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item, parentId) => {
    setDroppedItems((prevItems) => [
      ...prevItems,
      { ...item, parentId }, // Add the parentId to associate with the block
    ]);
  };

  return (
    <div style={{ position: "relative" }}>
      {blocks.length > 0 &&
        blocks.map((block) => {
          // Get the dropped items for the current block
          const blockChildren = droppedItems.filter(
            (droppedItem) => droppedItem.parentId === block.id
          );

          return (
            <Block
              key={block.id}
              block={block}
              onDrop={handleDrop}
              droppedItems={blockChildren} // Pass the specific dropped items for this block
            />
          );
        })}
    </div>
  );
};

export default Canvas;
