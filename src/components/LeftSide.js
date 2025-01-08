import React from "react";
import TreeNode from "./TreeNode";


const LeftSide = ({ blocks, setBlocks, pushToCanvas, addNewBlock }) => {
  // console.log(blocks);

  return (
    <div>
      <div onClick={addNewBlock}>
        <button>ADD NEW BLOCK</button>
      </div>

      <div style={{ width: "100%" }}>
        {blocks.map((block) => {
          return (
            <TreeNode
              key={block.id}
              blocks={block}
              pushToCanvas={pushToCanvas}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LeftSide;
