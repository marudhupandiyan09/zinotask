import React, { useState } from "react";
import "../css/treeNode.css";
import { useDrag } from "react-dnd";

const TreeNode = ({ blocks, pushToCanvas }) => {
  const [expended, setExpended] = useState(false);


  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CHILD",
    item: {
      id: blocks.id,
      type: blocks.type,
      children: blocks.children || [],
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  if (!blocks) {
    return null; // Safeguard for invalid or missing blocks
  }

  return (
    <div
      className="leftside"
      style={{ width: "100%" }}
      onClick={() => {
        setExpended(!expended);
      }}
    >
      <div className="leftSide_block">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {expended ? "⬆️" : "⬇️"}
          {blocks.type}
        </div>

        <div>

          {blocks.type === "block" && <button
            onClick={(e) => {
              pushToCanvas(e, blocks.id);
            }}
            style={{
              cursor: "pointer",
              padding: "10px",
              width: "50px",
              border: "none",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            💠
          </button>}
        </div>
      </div>
      <div className="left_child" ref={drag}>
        {expended &&
          Array.isArray(blocks.children) &&
          blocks.children.length > 0 &&
          blocks.children.map((data) => {
            return <TreeNode key={data.id} blocks={data} pushToCanvas={pushToCanvas} />;
          })}
      </div>
    </div>
  );
};

export default TreeNode;
