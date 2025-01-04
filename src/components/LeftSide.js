import React from "react";
import TreeNode from "./TreeNode";
import "../css/leftside.css";

const Leftside = ({ blocks, setBlocks }) => {
  const addBlock = () => {
    /// this one for adding a new block for the tree view on the left side of the screen
    const newBlock = {
      id: `${Date.now()}`,
      type: "block",
      position: { x: 100, y: 100, width: 200, height: 200 },
      children: [],
    };
    setBlocks([...blocks, newBlock]);
  };

  return (
    <div className="left-side">
      <button
        style={{ backgroundColor: "#7f7fff", color: "white" }}
        onClick={addBlock}
      >
        ADD NEW BLOCK
      </button>

      {blocks.map((block) => {
        return <TreeNode key={block.id} block={block} />;
      })}
    </div>
  );
};

export default Leftside;
