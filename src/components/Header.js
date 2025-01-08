import React from "react";
import "../css/headerComp.css";

const Header = ({ blocks, droppedItems }) => {
  // Recursive function to find a block and its parent in the tree which is find the parent node that's all
  const findBlockWithParent = (tree, blockId) => {
    for (const node of tree) {
      if (node.id === blockId) {
        return { ...node };
      }

      if (node.children) {
        const childResult = findBlockWithParent(node.children, blockId);
        if (childResult) {
          return {
            ...node,
            children: [childResult], // Include only the matched child
          };
        }
      }
    }
    return null; // Block not found in this branch
  };

  const viewJson = () => {
    const result = droppedItems.map((item) =>
      findBlockWithParent(blocks, item.id)
    );
    alert(JSON.stringify(result, null, 2));
    console.log(JSON.stringify(result, null, 2));
  };

  return (
    <div className="navbar">
      <div>
        <h1>Zino Task</h1>
      </div>
      <div>
        <button onClick={viewJson}>View Json</button>
      </div>
    </div>
  );
};

export default Header;
